import React from 'react';
import data from '../data.js';

const TimelineItem = ({ data }) => {
  return (
    <div className="timeline-block">
      <div className="timeline-item">
        <p>{data.category}</p>
        <h4>{data.institution}</h4>
        <p>{data.title}</p>
        <p>{data.dates}</p>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

const Timeline = () => (
  <div className="timeline-container">
    {data.map(element => <TimelineItem data={element} />)}
  </div>
);

export default Timeline;
