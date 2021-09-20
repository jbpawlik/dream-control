import React from 'react';
import PropTypes from 'prop-types';

function EditPerson(props) {
  return (
    <React.Fragment>
      <div>
        <h3>{props.name}</h3>
        <h4>{props.location}</h4>
      </div>
    </React.Fragment>
  )
}

EditPerson.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  id: PropTypes.string
}

export default EditPerson;