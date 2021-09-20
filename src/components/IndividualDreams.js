import React from 'react'
import PropTypes from 'prop-types'
import { Button } from "react-bootstrap"
import { v4 } from 'uuid';
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import Dream from './Dream'

function IndividualDreams(props) {
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

export default IndividualDreams;