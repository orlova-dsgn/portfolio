import niir1 from '@/assets/projects/niir1.png';
import niir2 from '@/assets/projects/niir2.png';

import inrik1 from '@/assets/projects/inrik1.png';
import inrik2 from '@/assets/projects/inrik2.png';

import linkway1 from '@/assets/projects/linkway1.png';
import linkway2 from '@/assets/projects/linkway2.png';

import type { Project } from './types';

export const PROJECT_LIST: Project[] = [
  {
    id: 'case-1',
    title: 'Институт ревматологии',
    subtitle: 'редизайн',
    description:
      'Корпоративный сайт медицинской организации, позиционирующей себя как лучшую в области ревматологии',
    image1: niir1,
    image2: niir2,
    lottieAnimationSrc: '/animations/case-1.lottie',
  },
  {
    id: 'case-2',
    title: 'Инрик-вист',
    subtitle: 'интернет-магазин',
    description:
      'Дизайн интернет-магазина для молодой компании, производящей корма для животных',
    image1: inrik1,
    image2: inrik2,
    lottieAnimationSrc: '/animations/case-1.lottie',
  },
  {
    id: 'case-3',
    title: 'Линквэй',
    subtitle: 'корпоративный сайт',
    description:
      'Корпоративный сайт для дистрибьютора информационных технологий, выстроенный как удобная B2B-платформа для взаимодействия с вендорами и партнёрами',
    image1: linkway1,
    image2: linkway2,
    lottieAnimationSrc: '/animations/case-1.lottie',
  },
];
