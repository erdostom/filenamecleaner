import React from 'react';
import moment from 'moment'

function App() {
  return (
    <div>
      <TimeBlock />
        </div>
  );
}

function TimeBlock() {
  return <div className="">
    <p>{moment().format('dddd, MMMM Do')}</p>
      <p>{moment().format('HH:mm')}</p>
        </div>
}

export default App;
