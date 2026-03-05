import {
  Component, Input, ViewChild, ElementRef,
  signal, inject, AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../core/models/project.model';
import { ModalService } from 'src/app/core/services/modal.service';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements AfterViewInit {
  @Input({ required: true }) project!: Project;

  @ViewChild('videoRef') videoRef!: ElementRef<HTMLVideoElement>;

  private readonly modalSvc = inject(ModalService);
  hovered = signal(false);

  ngAfterViewInit(): void {
    if (this.isVideo && this.videoRef?.nativeElement) {

      this.videoRef.nativeElement.load();
    }
  }

  openModal(): void {
    this.modalSvc.open(this.project);
  }

  onEnter(): void {
    this.hovered.set(true);

    if (this.isVideo && this.videoRef?.nativeElement) {
      const v = this.videoRef.nativeElement;
      v.currentTime = 0;
      v.play().catch(() => { });
    }
  }

  onLeave(): void {
    this.hovered.set(false);

    if (this.isVideo && this.videoRef?.nativeElement) {
      const v = this.videoRef.nativeElement;
      v.pause();
      v.currentTime = 0;
    }
  }

  get hasPreview(): boolean { return !!this.project.preview; }

  get isGif(): boolean {
    return this.hasPreview &&
      (this.project.previewType === 'gif' || !this.project.previewType);
  }

  get isVideo(): boolean {
    return this.hasPreview && this.project.previewType === 'video';
  }
}
