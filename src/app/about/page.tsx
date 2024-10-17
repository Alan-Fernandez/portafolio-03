'use client';

import type { NextPage } from 'next';
import { useState } from 'react';

const About: NextPage = () => {
  const personalInfo = [
    // { label: "Website", value: "https://porfolio-alan.netlify.app" },
    { label: 'Email', value: 'fernandeezalan20@gmail.com' },
    {
      label: 'LinkedIn',
      value: 'www.linkedin.com/in/alan-damian-fernández2022',
    },
    { label: 'GitHub', value: 'https://github.com/Alan-Fernandez' },
    { label: 'Phone', value: '+55 48 9995-26886' },
    { label: 'City', value: 'Florianópolis' },
    { label: 'Freelance', value: 'Available' },
  ];

  const skills = [
    { name: 'HTML5', percentage: 90 },
    { name: 'CSS3', percentage: 85 },
    { name: 'JavaScript', percentage: 95 },
    { name: 'TypeScript', percentage: 90 },
    { name: 'Next.js', percentage: 85 },
    { name: 'Node.js', percentage: 80 },
    { name: 'PostgreSQL', percentage: 75 },
    { name: 'Docker', percentage: 70 },
  ];

  const education = [
    {
      date: '2024',
      title: 'Desenvolvedor Web Full Stack, Henry Bootcamp',
      description:
        'Completo o curso teórico-prático de 800 horas, especializando-me em desenvolvimento full stack com tecnologias como JavaScript, React, Next.js, Node.js e PostgreSQL.',
    },
    {
      date: '2017 a 2020',
      title:
        'Engenharia de Sistemas de Informação, Universidade Tecnológica Nacional',
      description:
        'Cursados três anos na área de Engenharia de Sistemas de Informação, adquirindo sólidos conhecimentos em lógica de programação, estruturas de dados e arquitetura de software.',
    },
    {
      date: '2022',
      title: 'Cursos Complementares em Backend e DevOps',
      description:
        'Estudos contínuos com cursos focados em Node.js, PostgreSQL, Express.js, Next.js, e CI/CD para ambientes de produção.',
    },
  ];

  const experience = [
    {
      date: 'Oct 2024 - Atualmente',
      title: 'Líder Técnico e Desenvolvedor Full Stack – SwaplyAr',
      description:
        'Atuação na liderança de equipe, supervisão de projetos e desenvolvimento full stack, garantindo a qualidade do código e implementando soluções escaláveis e eficientes.',
    },
    {
      date: 'Jul 2024 - Oct 2024',
      title:
        'Desenvolvedor Full Stack e Especialista em Qualidade de Software – SwaplyAr',
      description:
        'Responsável por testes, desenvolvimento e correção de páginas web, além de implementar melhorias utilizando Google Apps Script.',
    },
    {
      date: 'Jun 2022 - Oct 2024',
      title: 'Suporte Técnico de Sistemas – GRUPO SEB (COC Floripa)',
      description:
        'Responsável pela manutenção e configuração de infraestrutura de rede, garantindo o funcionamento ideal dos sistemas e dispositivos.',
    },
    {
      date: 'Maio 2024 - Jul 2024',
      title: 'Desenvolvedor Full Stack Freelancer – Bummi AI',
      description:
        'Desenvolvimento de soluções utilizando Next.js, TypeScript e PostgreSQL para uma plataforma de inteligência artificial, garantindo escalabilidade e segurança.',
    },
    {
      date: 'Set 2023 - Jul 2024',
      title: 'Full Stack Teaching Assistant – Henry Bootcamp',
      description:
        'Coordenação e mentoria técnica de estudantes, promovendo integração e técnicas avançadas de programação como Pair Programming.',
    },
  ];

  const [showAllSkills, setShowAllSkills] = useState(false);

  const renderInfoItems = (info: { label: string; value: string }[]) =>
    info.map((item, index) => (
      <div className="info-item padd-15" key={index}>
        <p>
          {item.label} : <span>{item.value}</span>
        </p>
      </div>
    ));

  const renderSkills = (skills: { name: string; percentage: number }[]) =>
    skills.map((skill, index) => (
      <div className="skill-item padd-15" key={index}>
        <h5>{skill.name}</h5>
        <div className="progress">
          <div
            className="progress-in"
            style={{ width: `${skill.percentage}%` }}
          />
          <div className="skill-percent">{skill.percentage}%</div>
        </div>
      </div>
    ));

  const toggleSkills = () => {
    setShowAllSkills((prevShowAll: boolean) => !prevShowAll);
  };

  const renderTimeline = (
    items: { date: string; title: string; description: string }[],
  ) =>
    items.map((item, index) => (
      <div className="timeline-item" key={index}>
        <div className="circle-dot" />
        <h6 className="timeline-date">
          <i className="fa fa-calendar" /> {item.date}
        </h6>
        <h4 className="timeline-title">{item.title}</h4>
        <p className="timeline-text">{item.description}</p>
      </div>
    ));

  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    I am <span>Alan Fernandez</span>, a{' '}
                    <span>Full Stack Developer</span>
                  </h2>
                  <p>
                    I am a full stack developer with over 3 years of experience,
                    working with modern technologies such as JavaScript,
                    TypeScript, React.js, Next.js, and Node.js. I have solid
                    knowledge in PostgreSQL and experience optimizing
                    applications using Redux and Zustand for state management.
                    My career includes leading teams and developing scalable
                    solutions, prioritizing code quality and system efficiency.
                    Currently, I am enhancing my technical and leadership
                    skills, focusing on delivering high-performance projects
                    that meet user needs and keep up with market innovations.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="personal-info padd-15">
                  
                  <div className="row">
                    {renderInfoItems(personalInfo)}
                  </div>

                  <div className="row buttons padd-15">
                    <a
                      href="/utils/assets/docs/CurriculumFullStack.pdf"
                      download="CurriculumFullStack.pdf"
                      target="_blank"
                      className="btn"
                    >
                      Download CV
                    </a>
                    <a href="#contact" className="btn hire-me">
                      Hire Me
                    </a>
                  </div>
                </div>

                <div className="skills padd-15">
                  <div className="row">
                    {renderSkills(showAllSkills ? skills : skills.slice(0, 3))}
                  </div>
                  <button className="btn" onClick={toggleSkills}>
                    {showAllSkills ? 'Ver menos' : 'Ver más'}
                  </button>
                </div>
              </div>

              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="timeline-box padd-15">
                    <div className="timeline shadow-dark">
                      {renderTimeline(education)}
                    </div>
                  </div>
                </div>

                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="timeline-box padd-15">
                    <div className="timeline shadow-dark">
                      {renderTimeline(experience)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
