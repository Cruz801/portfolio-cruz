import React from 'react'
import projects from '../utils/projectdata';
import {Row, Col} from 'react-bootstrap';

export default function Portfolio() {
  return (
    <div className="page">
        <h1>Portfolio</h1>
        <Row className="project-cards">
    {projects.map((project)=> {
        return <Col key={project.title} sm={12} md={6} lg={3}>
        <div className="mb-4 portImage">
            <h2>{project.title}</h2>
            <img src={project.image} alt={project.title}/>
            <p>{project.description}</p>
            <a className="livesite" target="_blank" rel="noreferrer" href={project.link}>live Site</a>
            <a className="githublink" target="_blank" rel="noreferrer" href={project.github}>GitHub</a>
        </div>
        </Col>
    })}
        </Row>
    </div>
  )
}
