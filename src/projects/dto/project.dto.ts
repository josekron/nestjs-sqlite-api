import { Project } from '../projects.entity';
import { ProjectStatus } from './projectStatus.enum';

export class ProjectDto {
  id!: string;
  url: string;
  status: ProjectStatus;
  country: string;

  constructor(id: string, url: string, status: ProjectStatus, country: string) {
    this.id = id;
    this.url = url;
    this.status = status;
    this.country = country;
  }

  static fromEntity(project: Project): ProjectDto {
    return new ProjectDto(
      project.id,
      project.url,
      project.status,
      project.country,
    );
  }
}
