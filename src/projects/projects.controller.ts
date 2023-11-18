import { Controller, Get, Res, HttpStatus, Query } from '@nestjs/common';
import { Response } from 'express';
import { ProjectsService } from './projects.service';
import {
  ProjectStatusValidationPipe,
  SearchFilterBuilder,
} from './validation/projects.validation';
import { ProjectStatus } from './dto/projectStatus.enum';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get('/search')
  async getProjects(
    @Query('status', ProjectStatusValidationPipe)
    status: ProjectStatus,
    @Query('country') country: string,
    @Res() res: Response,
  ): Promise<Response<any>> {
    try {
      const projects = await this.projectsService.searchProjects(
        SearchFilterBuilder.buildSearchFilter({ status, country }),
      );

      return res.status(HttpStatus.OK).send({ data: projects });
    } catch (error) {
      return res.status(HttpStatus.SERVICE_UNAVAILABLE).send({ error });
    }
  }

  @Get('/countries')
  async getProjectsByCountry(@Res() res: Response): Promise<Response<any>> {
    try {
      const result = await this.projectsService.searchProjectsByCountry();

      return res.status(HttpStatus.OK).send({ data: result.country });
    } catch (error) {
      return res.status(HttpStatus.SERVICE_UNAVAILABLE).send({ error });
    }
  }
}
