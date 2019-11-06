import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { useDispatch } from 'react-redux'

import {removeFeature,buyItem}from"./redux/action"

const App = (props) => {
  const dispatch=useDispatch();
console.log(props.car)
  const removeFeatures = item => {
    // dispatch an action here to remove an item
    dispatch(removeFeature(item))
  };

  const buyItems = item => {
    // dipsatch an action here to add an item
    dispatch(buyItem(item))
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header  />
        <AddedFeatures removeFeatures={removeFeatures}/>
      </div>
      <div className="box">
         <AdditionalFeatures buyItems={buyItems}  />
        <Total />
      </div>
    </div>
  );
};

export default App;
