import React from 'react';
import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase'
import Dreams from './Dreams';
import { Container } from 'react-bootstrap'

function ShowPerson(props) {
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
        <Container>
        <h1>Dreams Below</h1>
        <Dreams
        selectDream={props.onDreamSelected}
        onNewDreamCreation={props.onNewDreamCreation}
        personId={props.id}
        />
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
      <button onClick={() => props.deletePerson(props.id)}>Click here to Delete!</button>
      </Container>
      </div>
    </React.Fragment>
  )
}

ShowPerson.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  id: PropTypes.string
}

export default ShowPerson;