import React from 'react'
import PropTypes from 'prop-types'
import { propTypes } from 'react-bootstrap/esm/Image'
import People from './People'
import IndividualDreams from './IndividualDreams'
import { withFirestore } from 'react-redux-firebase'
import { Button } from "react-bootstrap"
import { render } from '@testing-library/react';
import { connect } from 'react-redux';

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

  handleAddingNewPersonToList = (newPerson) => {
    console.log("This happened")
  }


  render() {
    let formState = this.state.formVisible
    return (
      <div>
        <p>Welcome to the dream world! Now in color!</p>
        <People 
          shoForm={this.showForm}
          formStatePassedDown={formState}
          onNewPersonCreation={this.handleAddingNewPersonToList}
        />
        {/* <IndividualDreams /> */}
      </div>
    )
  }
}

DreamControl.propTypes = {
  mainPeopleList: PropTypes.object,
  mainDreamList: PropTypes.object
}
const mapStateToProps = state => {
  return {
  mainPeopleList: state.mainPeopleList,
  mainDreamList: state.mainDreamList
  }
}

DreamControl = connect(mapStateToProps)(DreamControl)

export default DreamControl