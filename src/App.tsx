import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope, FaGithub, FaArrowUp, FaCode, FaDatabase, FaTools } from 'react-icons/fa';

const skills = {
  frontend: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
  backend: ['Node.js', 'Java', 'PHP'],
  database: ['MySQL', 'MariaDB', 'SQLite'],
  tools: ['Git', 'GitHub', 'VS Code', 'XAMPP', 'Postman', 'Docker'],
};

const experiences = [
  {
    title: 'ERP basé sur Dolibarr',
    items: ['Gestion des factures', 'Paiements', 'API REST', 'Authentification'],
  },
  {
    title: 'Application React + Node.js',
    items: ['Frontoffice', 'Backoffice', 'Paiement de salaires', 'Tableau de bord'],
  },
];

const projects = [
  {
    title: 'Cloud S5',
    description: 'Application académique de signalement et de gestion des travaux routiers prototype pour Antananarivo.',
    technologies: ['PHP 8.2', 'PostgreSQL 15', 'React', 'Tailwind', 'Leaflet', 'Ionic', 'Docker Compose'],
  },
];

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-lg font-semibold text-cyan-300">Ratsiva Rohintsoa Kiady</div>
          <nav className="hidden gap-6 text-sm md:flex text-slate-300">
            <a href="#accueil" className="transition hover:text-white">Accueil</a>
            <a href="#apropos" className="transition hover:text-white">À propos</a>
            <a href="#projets" className="transition hover:text-white">Projets</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main className="relative pt-24">
        <section id="accueil" className="relative overflow-hidden px-6 py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.25),transparent_35%),linear-gradient(135deg,rgba(59,130,246,0.18),rgba(168,85,247,0.18))]" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glass backdrop-blur-xl"
            >
              <div className="flex flex-col items-center gap-6 text-center">
                <div className="h-36 w-36 overflow-hidden rounded-full border-2 border-cyan-300/50 bg-slate-800">
                  <img
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
                    alt="Photo professionnelle"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">Étudiant en Informatique</p>
                  <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">Ratsiva Rohintsoa Kiady</h1>
                  <p className="mt-3 text-lg text-slate-300">Développeur Full Stack | Projet académique Cloud S5</p>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  <FaDownload /> Télécharger le CV
                </a>
                <a
                  href="#projets"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-slate-900/90 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300"
                >
                  Voir mes projets
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-slate-900/90 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300"
                >
                  Me contacter
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-glass backdrop-blur-xl"
            >
              <div className="space-y-8">
                <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
                  <h2 className="flex items-center gap-3 text-xl font-semibold text-white">
                    <FaCode className="text-cyan-300" /> Compétences Frontend
                  </h2>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {skills.frontend.map((skill) => (
                      <span key={skill} className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
                  <h2 className="flex items-center gap-3 text-xl font-semibold text-white">
                    <FaDatabase className="text-cyan-300" /> Backend & Bases de données
                  </h2>
                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    {skills.backend.map((skill) => (
                      <span key={skill} className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-200">
                        {skill}
                      </span>
                    ))}
                    {skills.database.map((skill) => (
                      <span key={skill} className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
                  <h2 className="flex items-center gap-3 text-xl font-semibold text-white">
                    <FaTools className="text-cyan-300" /> Outils
                  </h2>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {skills.tools.map((skill) => (
                      <span key={skill} className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="apropos" className="mx-auto max-w-6xl space-y-10 px-6 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glass backdrop-blur-xl"
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-start">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">À propos</p>
                <h2 className="text-3xl font-semibold text-white">Présentation</h2>
                <p className="text-slate-300">
                  Je suis Ratsiva Rohintsoa Kiady, étudiant en informatique passionné par le développement web et les technologies modernes. J'aime concevoir des applications performantes, intuitives et évolutives, aussi bien côté frontend que backend. Je cherche constamment à améliorer mes compétences à travers des projets concrets.
                </p>
              </div>
              <div className="space-y-6 rounded-3xl border border-white/10 bg-slate-950/70 p-6">
                <div>
                  <h3 className="text-lg font-semibold text-white">Formation</h3>
                  <p className="mt-2 text-slate-300">Licence Informatique</p>
                  <p className="text-sm text-slate-500">Université / École</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Langues</h3>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {['Français', 'Anglais', 'Malagasy'].map((lang) => (
                      <span key={lang} className="rounded-full bg-slate-900/80 px-4 py-2 text-sm text-slate-200">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="grid gap-6 lg:grid-cols-2"
          >
            {experiences.map((experience) => (
              <article key={experience.title} className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-glass backdrop-blur-xl">
                <h3 className="text-xl font-semibold text-white">{experience.title}</h3>
                <ul className="mt-4 space-y-3 text-slate-300">
                  {experience.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </motion.div>
        </section>

        <section id="projets" className="mx-auto max-w-6xl space-y-10 px-6 pb-20">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glass backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">Projets</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Mes réalisations académiques</h2>
            <p className="mt-3 text-slate-300">Chaque projet présente une idée, une description et les technologies utilisées.</p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <motion.article
                  key={project.title}
                  whileHover={{ y: -8 }}
                  className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-glass transition-transform duration-300"
                >
                  <div className="h-48 overflow-hidden rounded-3xl bg-slate-800">
                    <img src={import.meta.env.BASE_URL + 'cloud-s5-screenshot.png'} alt="Cloud S5 - Gestion des travaux routiers" className="h-full w-full object-cover" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 text-slate-300">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-2 text-sm text-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl space-y-10 px-6 pb-32">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glass backdrop-blur-xl">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">Contact</p>
                <h2 className="mt-4 text-3xl font-semibold text-white">Restons en contact</h2>
                <p className="mt-3 text-slate-300">N'hésitez pas à m'écrire pour discuter d'un projet, d'un stage ou d'une collaboration.</p>
                <div className="mt-8 space-y-4 text-slate-300">
                  <p className="flex items-center gap-3">
                    <FaEnvelope className="text-cyan-300" />
                    rohintsoakiady@yahoo.com
                  </p>
                  <p className="flex items-center gap-3">
                    <FaGithub className="text-cyan-300" />
                    https://github.com/Krounts
                  </p>
                  <p className="flex items-center gap-3">
                    <FaArrowUp className="text-cyan-300" />
                    +261 38 64 833 10
                  </p>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-glass">
                <form className="space-y-5">
                  <label className="block text-sm font-medium text-slate-200">
                    Nom
                    <input type="text" placeholder="Votre nom" className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300" />
                  </label>
                  <label className="block text-sm font-medium text-slate-200">
                    Email
                    <input type="email" placeholder="Votre email" className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300" />
                  </label>
                  <label className="block text-sm font-medium text-slate-200">
                    Message
                    <textarea placeholder="Votre message" rows={5} className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300" />
                  </label>
                  <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                    Envoyer
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <a
        href="#accueil"
        className="fixed bottom-6 right-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400 text-slate-950 shadow-glass transition hover:bg-cyan-300"
      >
        <FaArrowUp size={18} />
      </a>
    </div>
  );
}

export default App;
