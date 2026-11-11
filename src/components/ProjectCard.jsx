export default function ProjectCard({ project }) {
    return (
        <li className="card">
            <div className="thumb" />
            <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
            </div>
        </li>
    );
}