import React from 'react';
import PropTypes from 'prop-types';
import { propTypes } from 'react-bootstrap/esm/Image';
import People from './People';
import Dreams from './Dreams';
import { Button } from "react-bootstrap";
import { render } from '@testing-library/react';
import { connect } from 'react-redux';
import ShowPerson from './ShowPerson';
import { withFirestore, isLoaded } from 'react-redux-firebase';

class DreamControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      selectedPerson: null,
      selectedDream: null
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

  resetState= () => {
    this.setState({})
  }

  selectPerson = (id) => {
    this.props.firestore.get({collection: 'people', doc: id}).then((person) => {
      const firestorePerson = {
        name: person.get("name"),
        location: person.get("location"),
        id: person.id
      }
      this.setState({selectedPerson: firestorePerson });
    });
  }

  selectDream = (id) => {
    console.log("it's here")
    this.props.firestore.get({collection: 'dreams', doc: id}).then((dream) => {
      const firestoreDream = {
        dream: dream.get("dream"),
        mood: dream.get('mood'),
        id: dream.id
      }
      this.setState({selectedDream: firestoreDream})
    });
  }

  handleEditingTicketInList = () => {
    this.setState({
      selectedPerson: null
    });
  }

  deletePerson = (id) => {
    this.props.firestore.delete({collection: 'people', doc: id})
    this.setState({
      selectedPerson: null
    })
  }


  render() {
    let formState = this.state.formVisible
    const auth = this.props.firebase.auth();
    if (!isLoaded(auth)) {
      return (
        <React.Fragment>
          <h1>Remembering...</h1>
        </React.Fragment>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser == null)) {
      return (
        <React.Fragment>
          <h1>Log In To Meet the Dreamers</h1>
        </React.Fragment>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser != null)) {
      if (this.state.selectedDream != null) {
        return (
          <EditPerson />
        )
        } else if { (this.state.selectedPerson != null) {
        let person = this.state.selectedPerson
        return (
          <ShowPerson 
          name={person.name}
          id={person.id}
          location={person.location}
          onEditPerson={this.handleEditingTicketInList} 
          deletePerson={this.deletePerson}
          onNewDreamCreation={this.resetState}
          onDreamSelected={this.selectDream}
          />
        )
        } else {
        return (
        <div>
          <People 
            shoForm={this.showForm}
            formStatePassedDown={formState}
            onNewPersonCreation={this.resetState}
            onPersonSelection={this.selectPerson}
          />
        </div>
      )
    }
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

export default withFirestore(DreamControl);