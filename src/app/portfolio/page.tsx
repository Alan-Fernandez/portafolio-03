// /src/app/portfolio/page.tsx

import ClientProjectList from '@/components/portfolio/ClientProjectList/ClientProjectList';
import { NextPage } from 'next';

const Portfolio: NextPage = () => {
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
              {/* <button type="button" className="active" data-filter="all">
                All
              </button>
              <button type="button" data-filter="graphics-design">
                Graphics Design
              </button>
              <button type="button" data-filter="web-design">
                Web Design
              </button>
              <button type="button" data-filter="wordpress">
                Wordpress
              </button> */}
            </div>
          </div>
          <ClientProjectList />
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
