import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ProjectStatus } from './dto/projectStatus.enum';

@Entity({ name: 'projects' })
export class Project {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  url: string;

  @Column({
    enum: ProjectStatus,
  })
  status: ProjectStatus;

  @Column({ nullable: true })
  country: string;
}
