import React from 'react';
import styles from '../styles/Home.module.css';
import Header from '@/components/header';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { FiMail, FiGithub, FiLinkedin, FiPhone } from 'react-icons/fi';


const projects = [
  {
    id: 1,
    title: 'App de Receitas',
    description: 'TCC de frontend, onde criamos um app de receitas (otimizado para mobile)',
    image: 'https://i.ibb.co/RSPYZsv/recipe.jpg',
    url: 'https://recipe-101-juliorugolo.vercel.app/'
  },
  {
    id: 2,
    title: 'Trybetunes',
    description: 'App de preview de musicas',
    image: 'https://i.ibb.co/CnvnFRp/Captura-de-Tela-2023-07-18-a-s-21-24-27.png',
    url: 'https://rugolo-trybetunes.surge.sh/'
  },
  {
    id: 3,
    title: 'Tryunfo',
    description: 'App de Supertrunfo',
    image: 'https://i.ibb.co/xs3G7HY/Captura-de-Tela-2023-07-18-a-s-21-33-09.png',
    url: 'https://rugolo-tryunfo.surge.sh/'
  },
  {
    id: 4,
    title: 'ShoppingCart',
    description: 'App de Compras (Não publicado)',
    image: 'https://i.ibb.co/wMFgRkH/Captura-de-Tela-2023-07-18-a-s-21-42-01.png',
    url: '#'
  },
  {
    id: 5,
    title: 'Trybewallet',
    description: 'Aplicativo de controle de gastos',
    image: 'https://i.ibb.co/WVsLYWH/Captura-de-Tela-2023-07-18-a-s-22-00-22.png',
    url: 'rugolo-trybewallet.surge.sh'
  },
];

const ProjectCard = ({ project }) => (
  <a href={project.url ? project.url : `#${project.id}`} target='_blank' className={styles.projecturl}>
    <div className={styles.card}>
    <div className={styles.divImg}>
      <img src={project.image} alt={project.title} />

    </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  </a>
);

const skills = [
  {
    title: 'Fundamentos de Desenvolvimento Web',
    items: [
      'Introdução ao desenvolvimento web',
      'HTML e CSS',
      'JavaScript básico e manipulação do DOM',
      'Introdução ao Git e controle de versão',
    ],
  },
  {
    title: 'Front-end',
    items: [
      'React.js (componentes, estado, ciclo de vida)',
      'Requisições HTTP e consumo de APIs',
      'Estilização com CSS avançado (Flexbox, Grid)',
      'SPA (Single-Page Applications) e roteamento com React Router',
    ],
  },
  {
    title: 'Back-end',
    items: [
      'Node.js e Express.js (servidor e rotas)',
      'Banco de Dados SQL (modelagem, queries)',
      'Autenticação e autorização (JWT, sessões)',
      'API RESTful e boas práticas de desenvolvimento',
    ],
  },
  {
    title: 'Banco de Dados',
    items: [
      'Banco de Dados NoSQL (MongoDB)',
      'Modelagem e relacionamento de dados',
      'Query Language (MongoDB Query Language)',
    ],
  },
  {
    title: 'Testes e Qualidade de Código',
    items: [
      'Testes de unidade e integração (Jest, Supertest)',
      'Testes de aceitação e End-to-End (Cypress)',
      'Testes assíncronos e mocks',
    ],
  },
];

const SkillCard = ({ title, items }) => (
  <div className={styles.skillCard}>
    <h2 className={styles.skillTitle}>{title}</h2>
    <ul className={styles.skillList}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const ContactSection = () => (
  <section className={styles.contactSection} id='section4'>
    <div className={styles.overlay}>
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>Contato</h1>
        <div className={styles.contactIcons}>
          <a href='mailto:juliorugolo@gmail.com' target='_blank' rel='noopener noreferrer'>
            <FiMail className={styles.contactIcon} />
          </a>
          <a href='https://github.com/JulioRugolo' target='_blank' rel='noopener noreferrer'>
            <FiGithub className={styles.contactIcon} />
          </a>
          <a href='https://www.linkedin.com/in/juliorugolo/' target='_blank' rel='noopener noreferrer'>
            <FiLinkedin className={styles.contactIcon} />
          </a>
          <a href='https://wa.me/5514991647966' target='_blank' rel='noopener noreferrer'>
            <FiPhone className={styles.contactIcon} />
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Home = () => (
  <main>
  <ScrollToTopButton />
    <Header />

    <section className={styles.section1} id='section1'>
  <div className={styles.overlay}>
    <div className={styles.contentContainer}>
      <div className={styles.description}>
        <h1 className={styles['welcome-text']}>Bem-vindo ao meu portfolio!</h1>
        <h2 className={styles['welcome-description']}>
          E aí, pessoal! Tô em transição pra área de Tecnologia e tô quase lá! Quase concluindo um curso top de Desenvolvimento Web, já finalizei Front-end e tô mandando bem no Back-end!
          <br /><br />
          Apesar da falta de experiência direta, trago habilidades transferíveis como comunicação, criatividade e trabalho em equipe, desenvolvidas na minha formação anterior! Tô super determinado a adquirir novas competências na área, animado pra contribuir pro crescimento e sucesso da empresa. Sou rápido pra aprender, dedicado e encaro qualquer desafio!
          <br /><br />
          Com minha paixão por tecnologia e experiência em Publicidade e Propaganda, posso agregar muito à equipe. Tô aberto a estágios e posições iniciais pra aplicar meu conhecimento e continuar aprendendo! Pode contar comigo pra fornecer informações e participar de entrevistas. Agradeço a consideração e tô empolgado pra contribuir pro sucesso da empresa. Vamos nessa!
          <br /><br />
          Bora, galera! Sempre em busca de desafios e crescimento! Valeu! 🚀👊
        </h2>
      </div>
    </div>
  </div>
</section>

    <section className={styles.section2} id='section2'>
      <div className={styles.overlay}>
        <div className={styles.contentContainer}>
          <h1 className={styles.title}>Skills e Aprendizados</h1>
          <div className={styles.skillGrid}>
            {skills.map((skill, index) => (
              <SkillCard key={index} title={skill.title} items={skill.items} />
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className={styles.section3} id='section3'>
      <div className={styles.overlay}>
        <div className={styles.contentContainer}>
          <h1 className={styles.title}>Projetos</h1>
          <p className={styles['projects-text']}>
            Aqui estão alguns dos projetos que fiz:
          </p>
          <div className={styles['project-grid']}>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
    <ContactSection />
  </main>
);


export default Home;
