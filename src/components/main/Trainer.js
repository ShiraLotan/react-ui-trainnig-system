import React, { useEffect, useState } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import HerosList from '../main/HerosList';
import { connect } from 'react-redux';
import getHerosByTrainer from '../../state/thunk/getAllHeros';
import AddHero from './AddHero';
import '../../../src/stylesFolder/trainer.scss';

function Trainer({getHeroList, userEmail, list}) {

     useEffect(() => {
      getHeroList(userEmail)
      },[]);

  return (
    <div className="Trainer">
        <Tabs className="trainer-nav-bar" defaultActiveKey="add" id="uncontrolled-tab-example">
          <Tab eventKey="add" title="Add a hero">
            <AddHero/>
          </Tab>
          <Tab eventKey="all" title="All heros">
          <HerosList list={list}/>
          </Tab>
        </Tabs>
    </div>
  );
}


const mapDispatchToProps = dispatch => {
   return {
     getHeroList: (userEmail) => dispatch(getHerosByTrainer(userEmail))
   }
 }
const mapStateToProps = state =>({
   list: state.heroReducer.heroList
})



export default connect(mapStateToProps, mapDispatchToProps)(Trainer);
