import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Project } from './projects.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectDto } from './dto/project.dto';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private projectsRepository: Repository<Project>,
  ) {}

  async searchProjects(searchFilter: any): Promise<ProjectDto[]> {
    const projects: Project[] = await this.projectsRepository.find({
      where: [searchFilter],
    });
    return projects.map((project) => ProjectDto.fromEntity(project));
  }

  async searchProjectsByCountry(): Promise<any> {
    const projects: Project[] = await this.projectsRepository.find();

    return projects.reduce(
      (prev: any, current) => {
        if (!current.country) {
          return prev;
        }

        if (prev.country[current.country]) {
          prev.country[current.country].push(current);
        } else {
          prev.country[current.country] = [current];
        }

        return prev;
      },
      { country: {} },
    );
  }
}
