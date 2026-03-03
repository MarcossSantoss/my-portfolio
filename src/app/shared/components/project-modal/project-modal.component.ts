import {
  Component, inject, ViewChild,
  ElementRef, effect, HostListener,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { ModalService } from 'src/app/core/services/modal.service';

const backdropIn = trigger('backdropIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('220ms ease', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    animate('180ms ease', style({ opacity: 0 })),
  ]),
]);

const panelIn = trigger('panelIn', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scale(0.94) translateY(24px)' }),
    animate('300ms cubic-bezier(0.16,1,0.3,1)',
      style({ opacity: 1, transform: 'scale(1) translateY(0)' })),
  ]),
  transition(':leave', [
    animate('200ms ease-in',
      style({ opacity: 0, transform: 'scale(0.96) translateY(12px)' })),
  ]),
]);

const tagStagger = trigger('tagStagger', [
  transition(':enter', [
    query('.tech-tag', [
      style({ opacity: 0, transform: 'translateY(8px)' }),
      stagger('40ms', [
        animate('260ms cubic-bezier(0.16,1,0.3,1)',
          style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ], { optional: true }),
  ]),
]);

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule],
  animations: [backdropIn, panelIn, tagStagger],
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss'],
})
export class ProjectModalComponent {
  readonly modal = inject(ModalService);

  @ViewChild('videoRef') videoRef?: ElementRef<HTMLVideoElement>;
  @ViewChild('iframeRef') iframeRef?: ElementRef<HTMLIFrameElement>;

  constructor() {
    // Toda vez que o modal abre/fecha, controla o vídeo
    effect(() => {
      const project = this.modal.activeProject();
      if (!project) {
        this.stopMedia();
      }
    });
  }

  // Fecha com ESC
  @HostListener('document:keydown.escape')
  onEsc(): void { this.modal.close(); }

  closeOnBackdrop(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal-backdrop')) {
      this.modal.close();
    }
  }

  private stopMedia(): void {
    if (this.videoRef?.nativeElement) {
      const v = this.videoRef.nativeElement;
      v.pause();
      v.currentTime = 0;
    }
  }

  get isVideo(): boolean {
    const p = this.modal.activeProject();
    return !!p?.preview && p.previewType === 'video';
  }

  get isGif(): boolean {
    const p = this.modal.activeProject();
    return !!p?.preview && (p.previewType === 'gif' || !p.previewType);
  }

  get hasAnyPreview(): boolean {
    return !!this.modal.activeProject()?.preview;
  }
}
