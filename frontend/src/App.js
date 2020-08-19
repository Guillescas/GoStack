import React, { useState } from 'react'

import './App.css'
import treesImage from './assets/trees.jpeg'

import Header from './components/Header'

function App() {
  const [projects, setProjects] = useState(['Desenvolvimento', 'web'])

  function handleAddProject() {
    // projects.push(`Novo Projeto ${Date.now()}`)
    setProjects([...projects, `Novo Projeto ${Date.now()}`])

    console.log(projects)
  }

  return (
    <>
      <Header title="Projects" />

      <img width="400px" height="600px" src={treesImage} />

      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
  )
}

export default App