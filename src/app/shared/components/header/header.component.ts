import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { navIn } from '../../animations/portfolio.animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  animations: [navIn],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  scrolled = signal(false);
  menuOpen = signal(false);

  readonly navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Resume', href: '#resume' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  @HostListener('window:scroll')
  onScroll(): void { this.scrolled.set(window.scrollY > 24); }

  toggle(): void { this.menuOpen.update(v => !v); }
  closeMenu(): void { this.menuOpen.set(false); }
}
