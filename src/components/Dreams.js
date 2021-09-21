import React from 'react'
import PropTypes from 'prop-types'
import { Button } from "react-bootstrap"
import { v4 } from 'uuid';
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import Dream from './Dream'

function Dreams(props) {
  useFirestoreConnect([
    { collection: 'dreams' }
  ])
  const dreams = useSelector(state => state.firestore.ordered.dreams);
  if (isLoaded(dreams)) {
    return (
      <React.Fragment>
        {dreams.map((dream) => {
          return <Dream
          
            />
        })}
      </React.Fragment>
    )
  }


  return(
    <div>
      <p>This is a stand in for the things that will populate when you click a person.</p>
    </div>
  )

}

export default Dreams;

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
        name: event.target.name.value,
        mood: event.target.mood.value, 
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
            name={dream.name}
            mood={dream.mood}
            key={dream.id}
            id={dream.id}
            whenDreamClicked={props.onDreamSelection}
            />
        })}
        <div>
          <button onClick={() => props.shoForm(formState)}>Add Dream</button>
          {props.formStatePassedDown ?
          <form onSubmit={addDreamToFireStore}>
            <input
              type='text'
              name='name'
              placeholder='Dream Name' />
            <input
              type='text'
              name='location'
              placeholder='Location' />
            <button type='submit'>Add Dream</button>
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

Dreams.propTypes = {
  onDreamSelection: PropTypes.func
};

export default Dreams;