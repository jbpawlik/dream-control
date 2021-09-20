import React from 'react';
import PropTypes from 'prop-types';


function Person(props) {
  return (
    <React.Fragment>
      <div onClick = {()=> props.whenPersonClicked(props.id)}>
        <h3>{props.name}</h3>
        <h4>{props.location}</h4>
      </div>
    </React.Fragment>
  )
}

Person.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  whenPersonClicked: PropTypes.func,
  id: PropTypes.string
}

export default Person;