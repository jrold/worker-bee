import React, { useEffect } from 'react';
import { Header, Experience, Skills } from '../components';
import { pageTitle, header, skills, experience } from '../workerBee';

const Container = () => {
  useEffect(() => {
    document.title = pageTitle;
  });

  return (
    <div className='fadeIn'>
      <Header {...header} />
      <div className="container">
        <Skills skills={skills} />
        <Experience experience={experience} />
      </div>
    </div>
  )
}

export default Container;