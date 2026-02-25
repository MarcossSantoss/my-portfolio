import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeLeft, fadeRight, fadeUp } from '../../shared/animations/portfolio.animations';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  animations: [fadeLeft, fadeRight, fadeUp],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit, OnDestroy {
  displayedText = '';
  typing = true;

  private readonly roles = [
    'Full Stack Developer',
    'Generative AI Enthusiast',
    '.NET & Angular Dev',
    'LLM Integration Builder',
  ];

  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timer: ReturnType<typeof setTimeout> | null = null;

  readonly stats = [
    { value: '3+', label: 'Years of Experience' },
    { value: '8+', label: 'Projects Built' },
    { value: '6+', label: 'Technologies' },
  ];

  ngOnInit(): void { this.tick(); }

  ngOnDestroy(): void {
    if (this.timer) clearTimeout(this.timer);
  }

  private tick(): void {
    const current = this.roles[this.roleIndex];

    if (!this.isDeleting) {
      this.displayedText = current.slice(0, ++this.charIndex);
      this.typing = true;
    } else {
      this.displayedText = current.slice(0, --this.charIndex);
    }

    if (!this.isDeleting && this.charIndex === current.length) {
      this.typing = false;
      this.timer = setTimeout(() => { this.isDeleting = true; this.tick(); }, 2200);
      return;
    }

    if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
    }

    this.timer = setTimeout(() => this.tick(), this.isDeleting ? 45 : 75);
  }
}
