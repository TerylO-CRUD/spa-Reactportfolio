# Personal Project Showcase App

A small React app to show projects, add new ones, and search them.

## Setup

```bash
npm install
npm test
npm run dev
```

Open the link that Vite prints (eg. http://localhost:5173).

## Features

- List of projects on the main page
- Form to add a new project (title and description)
- Search box that filters projects as you type
- Layout based on the mockup

## Components

```
App (state: projects, query)
├─ ProjectForm
├─ SearchBar
└─ ProjectList
   └─ ProjectCard
```