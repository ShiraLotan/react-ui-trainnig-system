import React from 'react';
import SinglHero from './SingleHero';
import '../../../src/stylesFolder/heroList.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HerosList({list}) {


  return (
    <div className="HerosList">
      <Container>
        {list.map((l, i)=><SinglHero key={i} data={l}/>)}
      </Container>
    </div>
  );
}

export default HerosList;
