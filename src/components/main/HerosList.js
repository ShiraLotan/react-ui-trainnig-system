import React from 'react';
import SinglHero from './SingleHero';

function HerosList({list}) {


  return (
    <div className="HerosList">
        {list.map((l, i)=> <SinglHero key={i} data={l}/>)}
    </div>
  );
}

export default HerosList;
