export const projects = [
  {
    slug: 'field-pest-monitoring',
    name: '大田重大病虫害智能监测预警平台｜挑战杯国银项目',
    images: [
      {
        src: 'projects/field-project-poster.png',
        alt: '大田重大病虫害智能监测预警平台项目封面',
        width: 547,
        height: 780,
      },
      {
        src: 'projects/field-pest-monitoring-main.png',
        alt: '大田重大病虫害智能监测预警平台主界面',
        width: 666,
        height: 392,
      },
      {
        src: 'projects/field-dashboard-collage.png',
        alt: '大田重大病虫害智能监测预警平台功能界面合集',
        width: 1304,
        height: 696,
      },
    ],
  },
  {
    slug: 'campuspath',
    name: 'CampusPath校园空间通 智能导航Agent',
    images: [
      {
        src: 'projects/campuspath-main.png',
        alt: 'CampusPath 校园空间通智能导航 Agent 主界面',
        width: 1917,
        height: 955,
      },
    ],
  },
  {
    slug: 'ard-remote-sensing-cube',
    name: '多数据中心ARD遥感立方体协同处理平台',
    images: [
      {
        src: 'projects/ard-control-center.jpg',
        alt: '多数据中心ARD遥感立方体协同处理平台控制台',
        width: 1920,
        height: 2447,
      },
      {
        src: 'projects/ard-system-architecture.jpg',
        alt: '多数据中心ARD遥感立方体协同处理平台系统架构图',
        width: 761,
        height: 615,
      },
    ],
  },
  {
    slug: 'game-design',
    name: 'Game design',
    description: '原创 FPS 策划案、五关浏览器原型与两份玩法系统分析。',
    repositoryUrl: 'https://github.com/3323098520/game-design-portfolio',
    demoUrl: 'https://3323098520.github.io/game-design-portfolio/04%20vertex-demo/',
    images: [
      {
        src: 'projects/game-design-demo.png',
        alt: '原创 FPS 顶点射手训练场视觉图',
        width: 1672,
        height: 941,
        caption: '原创 FPS《顶点射手》｜训练场视觉',
      },
      {
        src: 'projects/game-design-overview.png',
        alt: '游戏策划作品集线上总览页面',
        width: 1440,
        height: 960,
        caption: '作品集总览｜策划案、Demo 与玩法分析',
      },
      {
        src: 'projects/game-design-delta.png',
        alt: '三角洲行动烽火地带玩法系统分析页面',
        width: 1440,
        height: 960,
        caption: '《三角洲行动》｜烽火地带玩法系统分析',
      },
      {
        src: 'projects/game-design-valorant.png',
        alt: 'VALORANT 战术系统分析页面',
        width: 1440,
        height: 960,
        caption: '《VALORANT》｜战术系统分析',
      },
    ],
  },
] as const;
