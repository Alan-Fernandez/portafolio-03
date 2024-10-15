// /src/app/portfolio/page.tsx

import ClientProjectList from '@/components/portfolio/ClientProjectList/ClientProjectList';

const Portfolio = () => {
  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Portfolio</h2>
            </div>
          </div>
          <div className="row">
            <div className="portfolio-filter padd-15">
              <button type="button" className="active" data-filter="all">
                All
              </button>
              <button type="button" data-filter="web-design">
                Web Design
              </button>
              <button type="button" data-filter="ai">
                AI Projects
              </button>
              <button type="button" data-filter="games">
                Games
              </button>
            </div>
          </div>
          {/* Renderiza el componente cliente aquí */}
          <ClientProjectList />
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
