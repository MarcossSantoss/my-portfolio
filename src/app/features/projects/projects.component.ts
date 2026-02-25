import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../core/services/project.service';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { ProjectCategory } from '../../core/models/project.model';
import { listStagger, fadeUp } from '../../shared/animations/portfolio.animations';

interface Filter { label: string; value: ProjectCategory; }

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent, SectionTitleComponent],
  animations: [listStagger, fadeUp],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  readonly svc = inject(ProjectService);

  filters: Filter[] = [
    { label: 'All', value: 'all' },
    { label: 'Web', value: 'web' },
    { label: 'Backend', value: 'backend' },
    { label: 'Games', value: 'game' },
  ];

  setFilter(v: ProjectCategory): void { this.svc.setCategory(v); }

  trackById(_: number, p: { id: number }): number { return p.id; }
}
