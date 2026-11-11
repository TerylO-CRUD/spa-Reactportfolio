import { useState } from "react";

import SearchBar from "./components/SearchBar";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

const initialProjects = [
  { id: 1, title: "Mobile Banking UI", description: "A modern UI for a mobile banking application." },
  { id: 2, title: "Portfolio Site", description: "Responsive photography portfolio built with React." },
  { id: 3, title: "E-commerce Platform", description: "A full-featured e-commerce platform built with React and Node.js." },
];

export default function App() {
  const [projects, setProjects] = useState(initialProjects);
  const [query, setQuery] = useState("");

  const addProject = (title, description) => {
  setProjects([{ id: Date.now(), title, description }, ...projects]);
}; 

  const needle = query.trim().toLowerCase();
  const visible = projects.filter((p) => 
    p.title.toLowerCase().includes(needle) || p.description.toLowerCase().includes(needle)
  );

  return (
    <>
       <header>
      <h1>Personal Project Showcase App</h1>
    </header>
    <main className="app">
      <ProjectForm onAdd={addProject} />
      <div className="box">
        <SearchBar query={query} onChange={setQuery} />
        <ProjectList projects={visible} />
      </div>
    </main>
    </>
  );
}