import imgNiir from '@/assets/projects/img_niir.png';
import imgInrik from '@/assets/projects/img_Inrik-vist.png';
import imgLinkway from '@/assets/projects/img_linkway.png';

import type { Project } from './types';

export const PROJECT_LIST: Project[] = [
  {
    id: 'case-1',
    title: 'Институт ревматологии',
    subtitle: 'редизайн',
    description:
      'Корпоративный сайт медицинской организации, позиционирующей себя как лучшую в области ревматологии',
    image1: imgNiir,
    cardWidth: '100%',
    imgWidth: '75%',
  },
  {
    id: 'case-2',
    title: 'Инрик-вист',
    subtitle: 'интернет-магазин',
    description:
      'Дизайн интернет-магазина и личного кабинета для компании, производящей корма для животных',
    image1: imgInrik,
    cardWidth: '100%',
    imgWidth: '68%',
  },
  {
    id: 'case-3',
    title: 'Линквэй',
    subtitle: 'корпоративный сайт',
    description:
      'Корпоративный сайт для дистрибьютора информационных технологий, выстроенный как удобная B2B-платформа для взаимодействия с вендорами и партнёрами',
    image1: imgLinkway,
    cardWidth: '50%',
    imgWidth: '75%',
  },
];
