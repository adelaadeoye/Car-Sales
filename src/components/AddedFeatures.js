import React from 'react';

import AddedFeature from './AddedFeature';
// import { connect } from 'react-redux';
import { useSelector } from 'react-redux';

const AddedFeatures = props => {
  const car= useSelector(state=>state.car)
  return (
    <div className="content">
      <h6>Added features:</h6>
      {car.features.length ? (
        <ol type="1">
          {car.features.map(item => (
            <AddedFeature key={item.id} removeFeatures={props.removeFeatures} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

// const mapStateToProps= state=>{
//   return {
//     car: state.car
//   }
// }
export default AddedFeatures;
