import React from 'react';
import Hero from './Hero';
import Trainer from './Trainer';

function Dashboard({location}) {


  return (
    <div className="Dashboard">
        <h3>Time of start:</h3>
        <h1>Hello {location.state.name}</h1>
        <Trainer userEmail={location.state.email}/>
    </div>
  );
}

export default Dashboard;
