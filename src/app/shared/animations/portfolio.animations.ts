import {
  trigger, transition, style, animate,
  query, stagger, state,
} from '@angular/animations';

export const fadeUp = trigger('fadeUp', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(36px)' }),
    animate('620ms var(--ease-spring, cubic-bezier(0.16,1,0.3,1))',
      style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
]);

export const fadeLeft = trigger('fadeLeft', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(-36px)' }),
    animate('620ms cubic-bezier(0.16,1,0.3,1)',
      style({ opacity: 1, transform: 'translateX(0)' })),
  ]),
]);

export const fadeRight = trigger('fadeRight', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(36px)' }),
    animate('620ms cubic-bezier(0.16,1,0.3,1)',
      style({ opacity: 1, transform: 'translateX(0)' })),
  ]),
]);

export const listStagger = trigger('listStagger', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(28px)' }),
      stagger('70ms', [
        animate('480ms cubic-bezier(0.16,1,0.3,1)',
          style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ], { optional: true }),
    query(':leave', [
      stagger('40ms', [
        animate('260ms ease-out',
          style({ opacity: 0, transform: 'scale(0.92)' })),
      ]),
    ], { optional: true }),
  ]),
]);

export const cardHover = trigger('cardHover', [
  state('idle', style({ transform: 'scale(1)' })),
  state('hovered', style({ transform: 'scale(1.025)' })),
  transition('idle <=> hovered',
    animate('280ms cubic-bezier(0.16,1,0.3,1)')),
]);

export const overlayReveal = trigger('overlayReveal', [
  state('idle', style({ opacity: 0, transform: 'translateY(8px)' })),
  state('hovered', style({ opacity: 1, transform: 'translateY(0)' })),
  transition('idle <=> hovered',
    animate('280ms cubic-bezier(0.16,1,0.3,1)')),
]);

export const navIn = trigger('navIn', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(-100%)' }),
    animate('380ms cubic-bezier(0.16,1,0.3,1)',
      style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
]);
