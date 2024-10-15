// /src/api/projects/route.ts

import { projects } from '@/data/projects';
import { NextResponse } from 'next/server';


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
