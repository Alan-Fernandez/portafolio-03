import type { NextPage } from "next";

const projects = [
  {
    id: 1,
    title: "KongWebhook",
    description: "Tienda Online",
    imageUrl: "https://res.cloudinary.com/df5jwzuq9/image/upload/v1728853742/kong-webhook_xr0nu0.png",
    link: "https://kong-webhook-v2.vercel.app",
    category: "web-design",
  },
  {
    id: 2,
    title: "SwaplyAr",
    description: "Convertí y enviá tu dinero",
    imageUrl: "https://res.cloudinary.com/df5jwzuq9/image/upload/v1728853376/swaplyar_srke3o.png",
    link: "https://swaplyar.vercel.app",
    category: "web-design",
  },
  {
    id: 3,
    title: "Henry Music",
    description: "Interactive music application",
    imageUrl: "https://res.cloudinary.com/df5jwzuq9/image/upload/v1715685591/rcay6pokjpppnui7gpqy.jpg",
    link: "https://henry-music.vercel.app",
    category: "web-design",
  },
  {
    id: 4,
    title: "Future World",
    description: "Dynamic routes and AI chatbot website",
    imageUrl: "https://res.cloudinary.com/df5jwzuq9/image/upload/v1715470649/Captura_de_pantalla_2024-05-11_203606_mtz8bt.png",
    link: "https://web-business-pied.vercel.app",
    category: "ai",
  },
  {
    id: 5,
    title: "Videogames",
    description: "Single Page Application for game exploration",
    imageUrl: "/imgs/portfolio/videogames.jpg",
    link: "https://web-business-pied.vercel.app",
    category: "games",
  },
];

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
          <div className="row">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`portfolio-item padd-15`}
                data-category={project.category}
              >
                <div className="portfolio-item-inner shadow-dark">
                  <div className="portfolio-img">
                    <img src={project.imageUrl} alt={project.title} />
                  </div>
                  <div className="portfolio-info">
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                    <div className="icon">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-search" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
