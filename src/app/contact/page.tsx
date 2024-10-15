import type { NextPage } from 'next';

// Información de contacto
const contactInfo = {
  address: 'Florianópolis, Brasil',
  phone: '+55 48 9995-26886',
  email: 'fernandeezalan20@gmail.com',
};

const Contact: NextPage = () => {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Contact Me</h2>
          </div>
        </div>
        <div className="row">
          {/* Información de contacto */}
          <div className="contact-info-item padd-15">
            <div className="icon">
              <i className="fa fa-map-marker" />
            </div>
            <h4>Address</h4>
            <p>{contactInfo.address}</p>
          </div>
          <div className="contact-info-item padd-15">
            <div className="icon">
              <i className="fa fa-phone" />
            </div>
            <h4>Call Us On</h4>
            <p>{contactInfo.phone}</p>
          </div>
          <div className="contact-info-item padd-15">
            <div className="icon">
              <i className="fa fa-envelope" />
            </div>
            <h4>Email</h4>
            <p>{contactInfo.email}</p>
          </div>
        </div>
        {/* Formulario de contacto */}
        <div className="row">
          <form className="contact-form padd-15">
            <div className="row">
              <div className="form-item col-6 padd-15">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name*"
                    required
                  />
                </div>
              </div>
              <div className="form-item col-6 padd-15">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email*"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-item col-12 padd-15">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject*"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-item col-12 padd-15">
                <div className="form-group">
                  <textarea
                    className="form-control"
                    placeholder="Your Message*"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 padd-15">
                <button type="submit" className="btn">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
