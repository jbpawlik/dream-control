import React from 'react';
import PropTypes from 'prop-types';


function Dream(props) {
  return (
    <React.Fragment>
      {/* <div onClick = {()=> props.whenDreamClicked(props.id)}> */}
      <div>
        <h3>{props.dream}</h3>
        <h4>{props.mood}</h4>
      </div>
    </React.Fragment>
  )
}

Dream.propTypes = {
  dream: PropTypes.string,
  mood: PropTypes.string,
  whenDreamClicked: PropTypes.func,
  id: PropTypes.string
}

export default Dream;