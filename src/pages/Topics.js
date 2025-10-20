import React, { useState } from 'react';
import { topics as topicData } from '../data/topics';

function Topics() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  return (
    <div>
      <h2>Social Sciences Topics</h2>
      {topicData.map(topic => (
        <div key={topic.id} style={{ border: '2px solid #3498db', padding: '10px', margin: '10px 0', borderRadius: '5px', backgroundColor: '#ecf0f1' }}>
          <h3>{topic.title}</h3>
          <p>{topic.description}</p>
          <button onClick={() => setSelectedTopic(topic)}>Learn More</button>
        </div>
      ))}
      {selectedTopic && (
        <div style={{ marginTop: '20px', padding: '20px', backgroundColor: 'white', borderRadius: '10px' }}>
          <h3>Lessons in {selectedTopic.title}</h3>
          {selectedTopic.lessons.map((lesson, index) => (
            <div key={index} style={{ margin: '10px 0' }}>
              <h4>{lesson.title}</h4>
              <p>{lesson.content}</p>
            </div>
          ))}
          <button onClick={() => setSelectedTopic(null)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Topics;
