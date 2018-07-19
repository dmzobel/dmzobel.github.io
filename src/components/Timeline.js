import React from 'react';
import data from '../data.js';

const TimelineItem = ({ data }) => {
  return (
    <div className="timeline-block">
      <div className="timeline-item">
        <div>
          <h5 className="resume-category">{data.category}</h5>
          {data.title ? (
            <h4 className="resume-title">
              {data.title} - {data.place}
            </h4>
          ) : (
            <h4 className="resume-title">{data.place}</h4>
          )}
          <ul className="resume-description">
            {data.description.map(item => (
              <li>
                <h5>{item}</h5>
              </li>
            ))}
          </ul>
        </div>
        <img src={data.image} alt="" className="small-icon" />
      </div>

      <div className="timeline-marker" />

      <h4 className="timeline-date">{data.dates}</h4>
    </div>
  );
};

const Timeline = () => (
  <div className="timeline-container">
    {data.map(element => <TimelineItem key={element.id} data={element} />)}
  </div>
);

export default Timeline;
