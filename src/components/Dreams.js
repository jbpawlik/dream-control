import React from 'react'
import PropTypes from 'prop-types'
import { Button } from "react-bootstrap"
import { useSelector } from 'react-redux'
import { useFirestoreConnect, useFirestore, isLoaded, isEmpty } from 'react-redux-firebase'
import Dream from './Dream'

function Dreams(props) {
  const firestore = useFirestore();

  let formState = props.FormStatePassedDown

  function addDreamToFireStore(event) {
    event.preventDefault();
    props.onNewDreamCreation();
    return firestore.collection('dreams').add(
      {
        dream: event.target.dream.value,
        mood: event.target.mood.value,
        pId: props.personId 
      }
    );
  }

  useFirestoreConnect([ { collection: 'dreams' } ])
  const dreams = useSelector(state => state.firestore.ordered.dreams);
  if (isLoaded(dreams)) {
    return (
      <React.Fragment>
        {dreams.map((dream) => {
          return <Dream
            dream={dream.dream}
            mood={dream.mood}
            key={dream.id}
            id={dream.id}
            pId={dream.pId}
            whenDreamClicked={props.selectDream}
            />
        })}
        <div>
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

Dreams.propTypes = {
  onDreamSelection: PropTypes.func
};

export default Dreams;