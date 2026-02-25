import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { fadeLeft, fadeRight } from '../../shared/animations/portfolio.animations';

interface Skill {
  name: string;
  level: number;
  icon: string;
  iconType: 'svg' | 'emoji';
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  animations: [fadeLeft, fadeRight],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  skills: Skill[] = [
    {
      name: 'C# / .NET',
      level: 85,
      icon: 'csharp',
      iconType: 'svg',
    },
    {
      name: 'Angular',
      level: 70,
      icon: 'angular',
      iconType: 'svg',
    },
    {
      name: 'SQL (PostgreSQL / SQL Server)',
      level: 75,
      icon: 'sql',
      iconType: 'svg',
    },
    {
      name: 'JavaScript',
      level: 90,
      icon: 'js',
      iconType: 'svg',
    },
    {
      name: 'HTML5 / CSS3',
      level: 90,
      icon: '🌐',
      iconType: 'emoji',
    },
    {
      name: 'Python',
      level: 60,
      icon: '🐍',
      iconType: 'emoji',
    },
    {
      name: 'C Language',
      level: 30,
      icon: 'c',
      iconType: 'svg',
    },
  ];

  highlights = [
    {
      icon: '⚙️',
      label: 'Backend Development',
      desc: '.NET, REST APIs, business rules and scalable systems'
    },
    {
      icon: '🗄️',
      label: 'Databases',
      desc: 'PostgreSQL, SQL Server, data modeling and optimization'
    },
    {
      icon: '🔷',
      label: 'Angular',
      desc: 'Component-based architecture and reactive patterns'
    },
    {
      icon: '🧠',
      label: 'Generative AI',
      desc: 'LLM integrations and intelligent automation exploration'
    },
  ];
}