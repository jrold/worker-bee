import React, { useState } from 'react';
import FontFaceObserver from 'fontfaceobserver';
import { Container } from './components';
import './fonts/inter/inter.css';
import './fonts/fontawesome-free-5.7.1-web/css/all.min.css';
import 'normalize.css/normalize.css';
import 'milligram/dist/milligram.min.css';
import './main.scss';

const App = () => {
  let [view, setView] = useState(false);
  const fontA = new FontFaceObserver('Inter');
  const fontB = new FontFaceObserver('Inter', { style: "italic" });
  const fontC = new FontFaceObserver('Font Awesome 5 Free', { weight: 400 });
  const fontD = new FontFaceObserver('Font Awesome 5 Brands', { weight: 400 });
  const fontE = new FontFaceObserver('Inter', { style: "italic", weight: 500 });

  Promise.all([
    fontA.load(null, 20000),
    fontB.load(null, 20000),
    fontC.load(null, 20000),
    fontD.load(null, 20000),
    fontE.load(null, 20000)
  ]).then(function () {
    setView(true);
  });
  return (
    <>
      {view ? <Container /> : null }
    </>
  );
}

export default App;