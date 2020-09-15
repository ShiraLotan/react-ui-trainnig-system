import React from 'react';
import Card from 'react-bootstrap/Card';

function SinglHero({data}) {


  return (
    <div className="SinglHero">
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>
            Ability: {data.ability}
            Started trainning: {data.start}
            Suit colors: {data.suit_color}
            Starting power: {data.start_power}
            Current power: {data.current_power}
            </Card.Text>
        </Card.Body>
        </Card>
        
    </div>
  );
}

export default SinglHero;
