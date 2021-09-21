import React from 'react';
import PropTypes from 'prop-types';


function Dream(props) {
  return (
    <React.Fragment>
      <div onClick = {()=> props.whenDreamClicked(props.id)}>
        <h3>{props.name}</h3>
        <h4>{props.mood}</h4>
      </div>
    </React.Fragment>
  )
}

Dream.propTypes = {
  name: PropTypes.string,
  mood: PropTypes.string,
  whenDreamClicked: PropTypes.func,
  id: PropTypes.string
}

export default Dream;