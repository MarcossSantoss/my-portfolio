import { Injectable, signal, computed } from '@angular/core';
import { Project, ProjectCategory } from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectService {

  private readonly _projects = signal<Project[]>([
    {
      id: 1,
      title: 'Feature Flag API (Backend)',
      description: 'RESTful API for managing real-time feature flag rollouts. Implements Google OAuth authentication, JWT validation, percentage-based rollout logic and Redis in-memory caching for instant configuration updates without rebuild or restart.',
      thumbnail: 'assets/imgs/feature-flag-back.png',
      preview: 'assets/previews/feature-flag-back.mp4',
      previewType: 'video',
      technologies: ['ASP.NET Core', 'Redis', 'JWT', 'Google OAuth'],
      githubUrl: 'https://github.com/MarcossSantoss/Feature-Flag',
      category: 'backend',
      featured: true,
    },
    {
      id: 2,
      title: 'Feature Flag Dashboard (Frontend)',
      description: 'Administrative dashboard built with Angular for managing feature rollout percentages in real time. Integrated with secured backend API and supports authentication via Google OAuth.',
      thumbnail: 'assets/imgs/feature-flag-back.png',
      preview: 'assets/previews/feature-flag-back.mp4',
      previewType: 'video',
      technologies: ['Angular', 'TypeScript', 'OAuth'],
      githubUrl: 'https://github.com/MarcossSantoss/feature-flag-ui',
      category: 'web',
      featured: false,
    },
    {
      id: 3,
      title: 'Jogo da Forca',
      description: 'Classic hangman game built with vanilla JS. Word categories, score tracking and smooth animations.',
      thumbnail: 'assets/imgs/Forca.png',
      // preview: 'assets/previews/forca.gif',
      technologies: ['JavaScript', 'HTML5', 'CSS3'],
      githubUrl: 'https://github.com/MarcossSantoss/jogo-forca',
      category: 'game',
      featured: true,
    },
    {
      id: 4,
      title: 'Forant — Anonymous Topics',
      description: 'Anonymous forum platform for open topic discussion. Real-time collaborative architecture.',
      thumbnail: 'assets/imgs/forant.jpg',
      technologies: ['JavaScript', 'Node.js', 'CSS3'],
      githubUrl: 'https://github.com/GabrielPrzybysz/forant-anonymous-topics',
      category: 'web',
      featured: true,
    },
    {
      id: 5,
      title: 'Series Tracker',
      description: "TV series management app — track what you're watching, finished and want to watch next.",
      thumbnail: 'assets/imgs/seires.jpg',
      technologies: ['JavaScript', 'HTML5', 'CSS3'],
      githubUrl: 'https://github.com/MarcossSantoss/serie',
      category: 'web',
    },
    {
      id: 6,
      title: 'Jogo da Velha',
      description: 'Tic-tac-toe with win detection, draw logic and animated feedback.',
      thumbnail: 'assets/imgs/jogo-da-velha.jpg',
      technologies: ['JavaScript', 'HTML5', 'CSS3'],
      githubUrl: 'https://github.com/MarcossSantoss/jogo-da-velha',
      category: 'game',
    },
    {
      id: 7,
      title: 'Flask REST API',
      description: 'RESTful API with Python Flask — routing, data handling and structured JSON responses.',
      thumbnail: 'assets/imgs/flask.png',
      technologies: ['Python', 'Flask', 'REST API'],
      githubUrl: 'https://github.com/MarcossSantoss/api-python',
      category: 'backend',
      featured: true,
    },
    {
      id: 8,
      title: 'Calculator in Python',
      description: 'Feature-rich terminal calculator in Python with support for advanced arithmetic operations.',
      thumbnail: 'assets/imgs/calc.jpg',
      technologies: ['Python'],
      githubUrl: 'https://github.com/MarcossSantoss/calculator-in-python',
      category: 'backend',
    },
    {
      id: 9,
      title: 'Catch the Ball',
      description: 'Browser-based reflex game — paddle control, physics and progressive difficulty.',
      thumbnail: 'assets/imgs/ball.jpg',
      technologies: ['JavaScript', 'Canvas API', 'CSS3'],
      githubUrl: 'https://github.com/MarcossSantoss/catch-the-ball',
      category: 'game',
    },
  ]);

  private readonly _activeCategory = signal<ProjectCategory>('all');

  readonly projects       = this._projects.asReadonly();
  readonly activeCategory = this._activeCategory.asReadonly();

  readonly filteredProjects = computed(() => {
    const cat = this._activeCategory();
    return cat === 'all'
      ? this._projects()
      : this._projects().filter(p => p.category === cat);
  });

  setCategory(category: ProjectCategory): void {
    this._activeCategory.set(category);
  }
}

