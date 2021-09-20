import React from 'react'
import PropTypes from 'prop-types'
import { Button } from "react-bootstrap"
import { v4 } from 'uuid';


function People(props) {
  let formState = props.FormStatePassedDown

  function handleNewPersonFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({
      name: event.target.name.value,
      location: event.target.location.value,
      id: v4()
    })
  }

  return(
    <div>
      <p>A list of people will go here.</p>
      <button onClick={() => props.shoForm(formState)} >Add person</button>
      {props.formStatePassedDown ?
      // add person below
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Person Name' />
        <input
          type='text'
          name='location'
          placeholder='Location' />
        <button type='submit'>add person</button>
      </form>

      // add person above
       : "no it doesn't"}
    </div>
  )

}

export default People