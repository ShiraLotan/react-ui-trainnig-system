import React, {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import updateHeroPower from '../../state/thunk/updateHeroPower';
import { connect } from 'react-redux';

import '../../../src/stylesFolder/singleHero.scss';

function SinglHero({data, handleUpdateUserPower}) {

  const [heroId, setHeroId]=useState('');

  useEffect(() => {
    setHeroId(data._id)
    },[data._id]);

    const handleStart = () =>{
      handleUpdateUserPower(data._id)
    }

  return (
    <div className="SinglHero">
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <div className="hero-details">
              <ul>
                <li><span>Ability:</span> {data.ability}</li>
                <li><span>Started trainning:</span>{data.started}</li>
                <li><span>Suit colors:</span> {data.suit}</li>
                <li><span>Starting power:</span> {data.power_start}</li>
                <li><span>Current power:</span>{data.power_current}</li>
              </ul>
            </div>
        </Card.Body>
        <Button variant="success" onClick={handleStart}>
            Start Practice
        </Button>
        </Card>
        
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    handleUpdateUserPower: (id) => dispatch(updateHeroPower(id))
  }
}

export default connect(null, mapDispatchToProps)(SinglHero);
