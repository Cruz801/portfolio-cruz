import React from 'react'
// mport Resume from '../assets/resume'

export default function Resume() {
  return (
    <div className="page">Resume
       <a href={require(`../assets/Resume.pdf`)} download>

<img src={require(`../assets/pdf.png`)} alt="resume-pdf" width="104" height="142" className='icon-size '/>
    </a>
    </div>
    
  )
}
