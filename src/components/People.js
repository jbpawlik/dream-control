import React from 'react'
import PropTypes from 'prop-types'
import { Button } from "react-bootstrap"
import { v4 } from 'uuid';
import { useSelector } from 'react-redux'
import { useFirestoreConnect, useFirestore, isLoaded, isEmpty } from 'react-redux-firebase'
import Person from './Person'

function People(props) {
  const firestore = useFirestore();

  let formState = props.FormStatePassedDown

  function addPersonToFireStore(event) {
    event.preventDefault();
    props.onNewPersonCreation();
    return firestore.collection('people').add(
      {
        name: event.target.name.value,
        location: event.target.location.value, 
      }
    );
  }

  useFirestoreConnect([ { collection: 'people' } ])
  const people = useSelector(state => state.firestore.ordered.people);
  if (isLoaded(people)) {
    return (
      <React.Fragment>
        {people.map((person) => {
          return <Person
            name={person.name}
            location={person.location}
            key={person.id}
            id={person.id}
            whenPersonClicked={props.onPersonSelection}
            />
        })}
        <div>
          <button onClick={() => props.shoForm(formState)}>Add person</button>
          {props.formStatePassedDown ?
          <form onSubmit={addPersonToFireStore}>
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
          : "Add form hidden"}
        </div>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <p>Remembering...</p>
      </React.Fragment>
    )
  }
}

People.propTypes = {
  onPersonSelection: PropTypes.func
};

export default People;