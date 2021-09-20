import React from 'react'
import PropTypes from 'prop-types'
import { propTypes } from 'react-bootstrap/esm/Image'
import People from './People'
import IndividualMemories from './IndividualDreams'
import { withFirestore } from 'react-redux-firebase'
import { Button } from "react-bootstrap"

class DreamControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: false
    }
  }

  showForm = (formState) => {
    if (formState) {
    this.setState({
      formVisible: false
    })
    } else {
      this.setState({
        formVisible: true
      })
    }
  }

  render() {
    let formState = this.state.formVisible
    return (
      <div>
        <p>Welcome to the dream world! Now in color!</p>
        <People 
          shoForm={this.showForm}
          formStatePassedDown={formState}
        />
        <IndividualMemories />
      </div>
    )
  }
}

export default DreamControl