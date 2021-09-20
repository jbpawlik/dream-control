import React from 'react';
import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase'

function EditPerson(props) {
  const firestore = useFirestore();


function formEditPerson(event) {
  event.preventDefault();
  props.onEditPerson();
  const propertiesToUpdate = {
    name: event.target.name.value,
    location: event.target.location.value,
  }
  return firestore.update({collection: 'people', doc: props.id }, propertiesToUpdate)
}

  return (
    <React.Fragment>
      <div>
        <h3>{props.name}</h3>
        <h4>{props.location}</h4>
        <form onSubmit={formEditPerson}>
            <input
              type='text'
              name='name'
              placeholder='Person Name' />
            <input
              type='text'
              name='location'
              placeholder='Location' />
            <button type='submit'>Add Person</button>
          </form>
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