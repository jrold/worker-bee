import React from 'react';
import ReactTooltip from 'react-tooltip';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';
import './Experience.scss';

const Experience = ({ experience }) => {
  const openPopupbox = (content) => {
    const imgUrl = require(`../static/${content}`);
    content = <img
      key={content}
      onClick={() => PopupboxManager.close()}
      src={imgUrl}
      alt={content}
    />
    PopupboxManager.open({ content })
  }
  const listItems = experience.map(({
    id, list, brand, title, years, company, blockquote, css
  }) => {
    const brandUrl = require(`../static/${brand}`);

    return (
      <div key={id} className="company-panel">
        <img src={brandUrl} style={css} alt={company} className="company-logo" />
        <div className="company">
          {company}
        </div>
        {blockquote ?
          <blockquote>
            <p>
              {blockquote}
            </p>
          </blockquote>
          : null}
        <div>
          <span className="title">{title}</span> <span className="years">({years})</span>
        </div>
        <div>
          <ul>
            {
              list.map((line) => {
                return (
                  <li key={line}>{
                    /* Parse #@Text:Filename@# */
                    line.split('#').map((s) => {
                      if (s.charAt(0) && s.charAt(s.length - 1) === '@') {
                        s = s.substring(1, s.length - 1).split(':');
                        const text = s[0];
                        const fileName = s[1];
                        const tipId = s[1].split('.')[0];
                        const imgUrl = require(`../static/${fileName}`);

                        return (
                          <span
                            key={text + fileName}
                            onClick={() => openPopupbox(fileName)}
                            className='list-tt'
                            data-tip data-for={tipId}
                          >
                            {text}<i key={fileName + text} className='far fa-image'></i>
                            <ReactTooltip
                              key={text + tipId}
                              id={tipId}
                              className="custom-tooltip"
                              globalEventOff="click"
                            >
                              <img key={tipId + text} src={imgUrl} alt={fileName} />
                            </ReactTooltip>
                          </span>
                        )
                      } else {
                        return s
                      }
                    })
                  }
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  });


  return (
    <>
      <h3>Experience</h3>
      <div className="panel">
        {listItems}
      </div>
      <PopupboxContainer />
    </>
  )

}

export default Experience;