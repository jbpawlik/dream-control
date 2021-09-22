import React from 'react';
import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase'
import Dreams from './Dreams';
import { Container } from 'react-bootstrap'

function EditDream(props) {
  const firestore = useFirestore();


function formEditDream(event) {
  event.preventDefault();
  props.onEditDream();
  const propertiesToUpdate = {
    dream: event.target.dream.value,
    mood: event.target.mood.value,
  }
  return firestore.update({collection: 'dreams', doc: props.dreamPassed.id }, propertiesToUpdate)
}

  return (
    <div>
      <h2>You are in {props.personPassed.name}'s dreams.</h2>
      <h3>You are looking at this dream: {props.dreamPassed.dream}</h3>
      <h3>Dream mood: {props.dreamPassed.mood}</h3>
      <h4>Edit this Dream</h4>
      <form onSubmit={formEditDream}>
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
      <button onClick={() => props.deleteDream(props.dreamPassed.id)}>Click here to Delete!</button>
    </div>
  )
}

export default EditDream