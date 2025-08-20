import "./styles.css";
import { projects } from "./data/projects";

export default function App() {
  return (
    <main className="page">
      {/* Left (About) */}
      <aside className="about">
        <img
          className="avatar"
          src="https://avatars.githubusercontent.com/u/000000?v=4"
          alt="My Avatar"
        />
        <h1>Your Name</h1>
        <p className="muted">Title 1 • Title 2 • Title 3</p>

        <p>
          Input description
        </p>

        <ul className="links">
          <li><a href="https://github.com/TristanJFrey" target="_blank" rel="noreferrer">GitHub</a></li>
          <li><a href="mailto:TristanJFrey">Email</a></li>
        </ul>
      </aside>

      {/* Right (Projects) */}
      <section className="projects">
        <h2>Projects</h2>
        <div className="grid">
          {projects.map((p) => (
            <article key={p.title} className="card">
              <h3><a href={p.href} target="_blank" rel="noreferrer">{p.title}</a></h3>
              <p>{p.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
