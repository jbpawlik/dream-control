import React from 'react';
import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase'
import Dreams from './Dreams';
import { Container } from 'react-bootstrap'

function EditDream(props) {
  const firestore = useFirestore();


function formEditPerson(event) {
  event.preventDefault();
  props.onEditPerson();
  const propertiesToUpdate = {
    dream: event.target.dream.value,
    mood: event.target.mood.value,
  }
  return firestore.update({collection: 'dreams', doc: props.id }, propertiesToUpdate)
}

  return (
    <div>
      <h4>Edit this Dream</h4>
      <form onSubmit={addDreamToFireStore}>
        <input
          type='text'
          name='dream'
          placeholder='Dream' />
        <input
          type='text'
          name='mood'
          placeholder='Mood' />
        <button type='submit'>Add Dream</button>
      </form>
    </div>
  )
}

export default EditDream