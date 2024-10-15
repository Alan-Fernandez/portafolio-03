// components/ClientProjectList/ClientProjectList.tsx

"use client";

import { Project } from '@/utils/type/project';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';



const ClientProjectList = () => {
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/api/projects');
        if (!res.ok) throw new Error('Failed to fetch projects');
        const data = await res.json();
        if (Array.isArray(data)) {
          setProjects(data);
        } else {
          throw new Error('Projects data is not an array');
        }
      } catch (error) {
        setError(error instanceof Error ? error.message : 'An error occurred');
      }
    };
    fetchProjects();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (projects.length === 0) return <div>Loading...</div>;

  return (
    <div className="row">
      {projects.map((project) => (
        <div
          key={project.id}
          className={`portfolio-item padd-15`}
          data-category={project.category}
          onClick={() => {
            console.log(`Redirecting to /portfolio/${project.id}`);

            router.push(`/portfolio/${project.id}`);
          }}
        >
          <div className="portfolio-item-inner shadow-dark">
            <div className="portfolio-img">
              {project.imageUrl.length > 0 && (
                <Image 
                  src={project.imageUrl[0].img} 
                  alt={project.title} 
                  width={800}  
                  height={450}
                />
              )}
            </div>
            <div className="portfolio-info">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <div className="icon">
                <i className="fa fa-search" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClientProjectList;
