import React from 'react';
import { connect } from 'react-redux';
import {useSelector} from 'react-redux';

const Total = props => {
  const {car,additionalPrice }=useSelector(({car,additionalPrice})=>({car,additionalPrice}))
  return (
    <div className="content">
      <h4>Total Amount: ${car.price + additionalPrice}</h4>
    </div>
  );
};

// const mapStateToProps= state=>{
//   return {
//     car: state.car,
//     additionalPrice:state.additionalPrice
//   }
// }
export default Total;
