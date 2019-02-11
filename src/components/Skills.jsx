import React from 'react';
import './Skills.scss';

const Skills = ({ skills }) => {
  const columnItems = skills.map((item) => {
    const skillStyle = item.style || null;
    const imgUrl = require(`../static/${item.image}`);

    return (
      <div key={item.label} className='module skill-badge'>
        <div>
          <img 
            src={imgUrl} 
            style={skillStyle} 
            className="skill-icon" 
            alt={item.label} />
          <span>{item.label}</span>
        </div>
      </div>
    )
  });
  return (
    <div className="exp-contain">
      <h3>Skills</h3>
      <div className="panel skills-panel">
        <div className="grid">
          {columnItems}
        </div>
      </div>
    </div>
  )
}

export default Skills;