import Image from "next/image";

export default async function Home() {
  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <Image
              src="/imgs/logo_adf.png"
              alt="Al Siam Profile"
              className="shadow-dark"
            />
            <h1>Alan Damian Fernández</h1>
            <p>Fullstack Developer</p>
            <div className="social-links">
              {/* <a href="https://twitter.com/" target="_blank">
                <i className="fa fa-twitter" />
              </a> */}
              {/* <a href="https://facebook.com/" target="_blank">
                <i className="fa fa-facebook" />
              </a> */}
              <a href="https://github.com/Alan-Fernandez" target="_blank">
                <i className="fa fa-github" />
              </a>
              {/* <a href="https://instagram.com/" target="_blank">
                <i className="fa fa-instagram" />
              </a> */}
              <a
                href="https://www.linkedin.com/in/alan-damian-fern%C3%A1ndez2022"
                target="_blank"
              >
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
