import ProjectCard from "./ProjectCard";

export default function ProjectList({ projects }) {
    if (projects.length === 0) 
        return <p className="empty">No projects found.</p>;
    
    return (
        <ul className="list">
            {projects.map((p) => (
                <ProjectCard key={p.id} project={p} />
            ))}
        </ul>
    );
}