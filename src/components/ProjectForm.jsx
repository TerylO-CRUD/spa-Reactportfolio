import { useState } from "react";

export default function ProjectForm({ onAdd }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !description.trim()) 
            return;
              onAdd(title, description);
                setTitle("");
                setDescription("");
            };
            return (
                <form className="box form" onSubmit={handleSubmit}>
                    <h2>Add Project</h2>
                    <label htmlFor="title">Title</label>
                    <input id="title" value={title} onChange={(e) => 
                        setTitle(e.target.value)} />
                    <label htmlFor="description">Description</label>
                    <textarea id="description" value={description} onChange={(e) => 
                        setDescription(e.target.value)} />
                    <button type="submit">Add</button>
                </form>
            );
        }