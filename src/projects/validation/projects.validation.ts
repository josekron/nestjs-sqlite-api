import { BadRequestException, PipeTransform } from '@nestjs/common';
import { isDefined, isEnum } from 'class-validator';
import { ProjectStatus } from '../dto/projectStatus.enum';

export class ProjectStatusValidationPipe
  implements PipeTransform<string, Promise<ProjectStatus>>
{
  transform(value: string): Promise<ProjectStatus> {
    if (isDefined(value) && isEnum(value, ProjectStatus)) {
      const statusFound = Object.keys(ProjectStatus).find(
        (x) => ProjectStatus[x] === value,
      );
      return ProjectStatus[statusFound];
    } else if (isDefined(value)) {
      const errorMessage = `the value ${value} is not valid. See the acceptable values: ${Object.keys(
        ProjectStatus,
      ).map((key) => ProjectStatus[key])}`;
      throw new BadRequestException(errorMessage);
    }

    return undefined;
  }
}

export class SearchFilterBuilder {
  static buildSearchFilter(query): any {
    const searchFilter = {};

    if (query.status) {
      searchFilter['status'] = query.status;
    }
    if (query.country) {
      searchFilter['country'] = query.country;
    }

    return searchFilter;
  }
}
