import { Injectable, signal } from '@angular/core';
import { Project } from '../../core/models/project.model';

@Injectable({ providedIn: 'root' })
export class ModalService {
  private readonly _project = signal<Project | null>(null);

  /** Projeto atualmente aberto no modal. null = modal fechado. */
  readonly activeProject = this._project.asReadonly();

  open(project: Project): void {
    this._project.set(project);
    document.body.style.overflow = 'hidden'; // trava scroll da página
  }

  close(): void {
    this._project.set(null);
    document.body.style.overflow = '';
  }
}
