import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { fadeUp } from '../../shared/animations/portfolio.animations';

export interface TimelineEntry {
  period: string;
  title: string;
  org: string;
  desc: string;
  tags?: string[];
}

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  animations: [fadeUp],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent {
  experience: TimelineEntry[] = [
    {
      period: 'Oct 2024 — Present',
      title: 'Junior Developer — Full-Stack',
      org: 'Lizy Softwares',
      desc: 'Development and maintenance of corporate systems using C# (.NET MVC) and Angular. Involvement in Scrum sprints, CI/Build pipelines and code reviews via Git/GitHub/Jira.',
      tags: ['C# / .NET MVC', 'Angular', 'SQL', 'Scrum', 'Jira', 'Git'],
    },
    {
      period: 'May 2024 — Aug 2024',
      title: 'Technical Support Analyst',
      org: 'Atria Lub',
      desc: 'IT support and system troubleshooting for internal teams. Ticket management, infrastructure maintenance and inter-area technical assistance.',
      tags: ['Technical Support', 'IT Infrastructure'],
    },
    {
      period: 'Aug 2021 — May 2024',
      title: 'Process Engineering Analyst',
      org: 'Mag Sac Embalagens Ltda',
      desc: 'Process analysis and development in the manufacturing/packaging sector. Optimization of production flows, quality reporting and cross-functional coordination.',
      tags: ['Process Analysis', 'Quality', 'Manufacturing'],
    },
  ];

  education: TimelineEntry[] = [
    {
      period: '2023 — 2025',
      title: 'Systems Analysis & Development',
      org: 'Anhanguera Educacional',
      desc: 'Bachelor-level degree covering software architecture, databases, algorithms and modern development practices. Graduating 2025.',
      tags: ['ADS', 'Software Engineering'],
    },
    {
      period: '2020 — 2021',
      title: 'Technical Degree — Systems Development',
      org: 'SENAI "Álvares Romi"',
      desc: 'Technical certification in systems analysis and development with strong foundations in programming, logic and applied computing.',
      tags: ['Technical Degree', 'SENAI'],
    },
  ];

  techStack = [
    { name: 'C# / .NET', tier: 'primary' },
    { name: 'ASP.NET MVC', tier: 'primary' },
    { name: 'Angular', tier: 'primary' },
    { name: 'TypeScript', tier: 'primary' },
    { name: 'LLMs / AI Agents', tier: 'primary' },
    { name: 'MCP Integrations', tier: 'primary' },
    { name: 'SQL', tier: 'secondary' },
    { name: 'Python', tier: 'secondary' },
    { name: 'Node.js', tier: 'secondary' },
    { name: 'Git / GitHub', tier: 'secondary' },
    { name: 'Azure DevOps', tier: 'secondary' },
    { name: 'Scrum / Jira', tier: 'secondary' },
    { name: 'REST APIs', tier: 'secondary' },
    { name: 'HTML5 / CSS3', tier: 'secondary' },
    { name: 'JavaScript', tier: 'secondary' },
  ];
}
