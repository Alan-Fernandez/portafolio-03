// /src/api/projects/route.ts

import { NextResponse } from 'next/server';

export const projects = [
  {
    id: 1,
    title: 'KongWebhook',
    description: 'Tienda Online',
    imageUrl: [
      {
        id: 1,
        img: 'https://res.cloudinary.com/df5jwzuq9/image/upload/v1728853742/kong-webhook_xr0nu0.png',
      },
      {
        id: 2,
        img: 'https://res.cloudinary.com/df5jwzuq9/image/upload/v1721050388/Screenshot_2024-07-15_095801_bx2lzs.png',
      },
    ],
    link: 'https://kong-webhook-v2.vercel.app',
    category: 'web-design',
  },
  {
    id: 2,
    title: 'SwaplyAr',
    description: 'Convertí y enviá tu dinero',
    imageUrl: [
      {
        id: 1,
        img: 'https://res.cloudinary.com/df5jwzuq9/image/upload/v1728853376/swaplyar_srke3o.png',
      },
    ],
    link: 'https://swaplyar.vercel.app',
    category: 'web-design',
  },
  {
    id: 3,
    title: 'Henry Music',
    imageUrl: [
      {
        id: 1,
        img: 'https://res.cloudinary.com/df5jwzuq9/image/upload/v1715685591/rcay6pokjpppnui7gpqy.jpg',
      },
    ],
    link: 'https://henry-music.vercel.app',
    description:
      'Aplicación de música. Creado desde cero con Next.js y Tailwind CSS en el FrontEnd y para el BackEnd utilisamos Node.js, SQL.',
    category: 'web-design',
  },
  {
    id: 4,
    title: 'Future World',
    imageUrl: [
      {
        id: 1,
        img: 'https://res.cloudinary.com/df5jwzuq9/image/upload/v1715470649/Captura_de_pantalla_2024-05-11_203606_mtz8bt.png',
      },
    ],
    link: 'https://web-business-pied.vercel.app',
    description:
      'Proyecto en Next.js con rutas dinámicas, múltiples métodos de data fetching, integrando un chatbot con IA. Optimiza el rendimiento del sitio y su SEO, garantizando una experiencia excelente para tus clientes.',
    category: 'ai',
  },
  {
    id: 5,
    title: 'Videogames',
    description: 'Single Page Application for game exploration',
    imageUrl: [
      {
        id: 1,
        img: '/imgs/portfolio/videogames.jpg',
      },
    ],
    link: 'https://web-business-pied.vercel.app',
    category: 'games',
  },
];

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const title = searchParams.get('title');
    const category = searchParams.get('category');

    // Filtro por ID
    if (id) {
      const projectId = Number(id);

      if (isNaN(projectId)) {
        return NextResponse.json(
          { message: 'Invalid project ID' },
          { status: 400 },
        );
      }

      const project = projects.find((proj) => proj.id === projectId);

      if (!project) {
        return NextResponse.json(
          { message: 'Project not found' },
          { status: 404 },
        );
      }

      return NextResponse.json(project);
    }

    // Filtro por otros parámetros (title, category, etc.)
    let filteredProjects = projects;

    if (title) {
      filteredProjects = filteredProjects.filter((proj) =>
        proj.title.toLowerCase().includes(title.toLowerCase()),
      );
    }

    if (category) {
      filteredProjects = filteredProjects.filter(
        (proj) => proj.category.toLowerCase() === category.toLowerCase(),
      );
    }

    // Si no se encuentra ningún proyecto
    if (filteredProjects.length === 0) {
      return NextResponse.json(
        { message: 'No projects found' },
        { status: 404 },
      );
    }

    // Devolver los proyectos filtrados
    return NextResponse.json(filteredProjects);
  } catch (error) {
    console.error('Error fetching project:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 },
    );
  }
}
