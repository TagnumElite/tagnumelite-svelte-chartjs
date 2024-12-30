import type { ChartData } from 'chart.js';

export const EXAMPLE_BAR_DATA: ChartData<'bar'> = {
  labels: [
    'XML',
    'JavaScript',
    'enforce',
    'paradox',
    'dockercompose',
    'CSS',
    'Kotlin',
    'Ruby',
    'Pug',
    'textmate',
    'Groovy',
    'Markdown',
    'tailwindcss',
    'TOML',
    'YAML',
    'java-properties',
    'django-html',
    'Java',
    'Ini',
    'TypeScript (JSX)',
    'svx',
    'gradle',
    'C++',
    'Svelte',
    'C#',
    'Ignore',
    'Shell Script',
    'HTML',
    'editorconfig',
    '.gitignore (GitIgnore)',
    'SQL',
    'Twig',
    'Rust',
    'Vue',
    'reStructuredText',
    'SCSS',
    'TypeScript',
    'requirements.txt',
    'Properties',
    'Docker',
    'hoi4',
    'scminput',
    'Lua',
    'Python',
    'CSV',
    'C',
    'Log',
    'Plain text',
    'Access Transformers',
    'pip-requirements',
    'JSON'
  ],
  datasets: [
    {
      label: 'Language XP',
      data: [
        232, 50788, 1526, 76, 139, 13412, 25, 159, 1524, 518, 8733, 17119, 5, 566, 3987, 102, 435,
        188558, 43, 44, 25, 172, 3737, 41960, 149, 293, 14, 69020, 29, 20, 923, 99, 2313, 16, 2744,
        1273, 106043, 8, 2487, 217, 908, 47, 5000, 21385, 574, 728, 68, 11067, 205, 84, 11261
      ]
    }
  ]
};

export const EXAMPLE_BUBBLE_DATA: ChartData<'bubble'> = {
  datasets: [
    {
      label: 'First Dataset',
      data: [
        {
          x: 20,
          y: 30,
          r: 15
        },
        {
          x: 40,
          y: 10,
          r: 10
        }
      ],
      backgroundColor: 'rgb(255, 99, 132)'
    }
  ]
};

export const EXAMPLE_DOUGHNUT_DATA: ChartData<'doughnut'> = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
      hoverOffset: 4
    }
  ]
};

export const EXAMPLE_LINE_DATA: ChartData<'line'> = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }
  ]
};

export const EXAMPLE_PIE_DATA: ChartData<'pie'> = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
      hoverOffset: 4
    }
  ]
};

export const EXAMPLE_POLAR_AREA_DATA: ChartData<'polarArea'> = {
  labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [11, 16, 7, 3, 14],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)',
        'rgb(54, 162, 235)'
      ]
    }
  ]
};

export const EXAMPLE_RADAR_DATA: ChartData<'radar'> = {
  labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [65, 59, 90, 81, 56, 55, 40],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    },
    {
      label: 'My Second Dataset',
      data: [28, 48, 40, 19, 96, 27, 100],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    }
  ]
};

export const EXAMPLE_SCATTER_DATA: ChartData<'scatter'> = {
  datasets: [
    {
      label: 'Scatter Dataset',
      data: [
        {
          x: -10,
          y: 0
        },
        {
          x: 0,
          y: 10
        },
        {
          x: 10,
          y: 5
        },
        {
          x: 0.5,
          y: 5.5
        }
      ],
      backgroundColor: 'rgb(255, 99, 132)'
    }
  ]
};
