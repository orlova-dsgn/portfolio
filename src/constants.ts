import imgNiir from '@/assets/projects/img_niir.png';
import imgInrik from '@/assets/projects/img_Inrik-vist.png';
import imgLinkway from '@/assets/projects/img_linkway.png';
import imgKeramika from '@/assets/projects/img_keramika.png';

import type { Project } from './types';

export const PROJECT_LIST: Project[][] = [
  [
    {
      id: 'case-1',
      title: 'Институт ревматологии',
      subtitle: 'редизайн',
      description:
        'Корпоративный сайт медицинской организации, позиционирующей себя как лучшую в области ревматологии',
      image1: imgNiir,
      imgWidth: '75%',
      gradientColorFrom: '#103469',
      gradientColorTo: '#1F67CF',
    },
  ],
  [
    {
      id: 'case-2',
      title: 'Инрик-вист',
      subtitle: 'интернет-магазин',
      description:
        'Дизайн интернет-магазина и личного кабинета для компании, производящей корма для животных',
      image1: imgInrik,
      imgWidth: '68%',
      gradientColorFrom: '#064219',
      gradientColorTo: '#28653C',
    },
  ],
  [
    {
      id: 'case-3',
      title: 'Линквэй',
      subtitle: 'корпоративный сайт',
      description:
        'Корпоративный сайт для дистрибьютора информационных технологий, выстроенный как удобная B2B-платформа для взаимодействия с вендорами и партнёрами',
      image1: imgLinkway,
      imgWidth: '75%',
      gradientColorFrom: '#F95B3D',
      gradientColorTo: '#01369D',
    },
    {
      id: 'case-4',
      title: 'Керамика',
      subtitle: 'интернет-магазин',
      description: 'Дизайн интернет-магазина для продажи посуды ручной работы',
      image1: imgKeramika,
      imgWidth: '75%',
      gradientColorFrom: '#DAFFB9',
      gradientColorTo: '#7141EF',
      isLocked: true,
    },
  ],
];
