// /src/app/portfolio/[id]/page.tsx

'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Project } from '@/utils/type/project';
import { FaGithub } from 'react-icons/fa';


const PortfolioPage = () => {
  const { id } = useParams();
  const projectId = id as string;
  const [project, setProject] = useState<Project | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    let isMounted = true;

    const fetchProject = async () => {
      if (!projectId || isNaN(Number(projectId))) {
        setError('Invalid project ID');
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(`/api/projects?id=${projectId}`);
        if (!res.ok) {
          throw new Error('Failed to fetch project');
        }

        const data = await res.json();

        if (isMounted) {
          setProject(data);
          setError(null);
        }
      } catch (error) {
        if (isMounted) {
          setError(`error: ${error}` || 'An error occurred');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchProject();
    return () => {
      isMounted = false;
    };
  }, [projectId]);

  const handleNextImage = () => {
    if (project && Array.isArray(project.imageUrl)) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === project.imageUrl.length - 1 ? 0 : prevIndex + 1,
      );
    }
  };

  const handlePrevImage = () => {
    if (project && Array.isArray(project.imageUrl)) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? project.imageUrl.length - 1 : prevIndex - 1,
      );
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!project) return <div className="no-project">No project found.</div>;

  return (
    <div className="portfolio section">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>{project.title}</h2>
          </div>
        </div>
        <div className="carousel-container">
          {Array.isArray(project.imageUrl) && (
            <button className="prev" onClick={handlePrevImage}>
              &#9664;
            </button>
          )}
          <Image
            src={project.imageUrl[currentImageIndex].img}
            alt={project.title}
            width={800}
            height={450}
          />
          {Array.isArray(project.imageUrl) && (
            <button className="next" onClick={handleNextImage}>
              &#9654;
            </button>
          )}
        </div>
          <div className="project-header">
            <div>
              <p>{project.description}</p>
            </div>
            <div>
              <a
                href={project.link}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Project
              </a>
            </div>
            {project.github && (
              <div className="project-icons">
                <a
                  href={project.github}
                  className="github-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={30} />
                </a>
              </div>
            )}
          </div>

      </div>
    </div>
  );
};

export default PortfolioPage;
