import React from 'react'
import PropTypes from 'prop-types'
import { propTypes } from 'react-bootstrap/esm/Image'
import People from './People'
import IndividualDreams from './IndividualDreams'
import { withFirestore } from 'react-redux-firebase'
import { Button } from "react-bootstrap"
import { render } from '@testing-library/react';
import { connect } from 'react-redux';
import Person from './Person'

class DreamControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      selectedPerson: null
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

  selectPerson = (id) => {
    console.log(id)
    const selectedPerson = this.props.mainPeopleList[id];
    this.setState({
      selectedPerson: selectedPerson
    })
  }


  render() {
    let formState = this.state.formVisible
    if (this.state.selectedPerson != null) {
      return (
        <Person />
      )
      } else {
        return (
      <div>
        <p>Welcome to the dream world! Now in color!</p>
        <People 
          shoForm={this.showForm}
          formStatePassedDown={formState}
          onNewPersonCreation={this.handleAddingNewPersonToList}
          onPersonSelection={this.selectPerson}
        />
        {/* <IndividualDreams /> */}
      </div>
    )
    }
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