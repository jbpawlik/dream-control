import React from 'react'
import PropTypes from 'prop-types'
import { propTypes } from 'react-bootstrap/esm/Image'
import People from './People'
import IndividualMemories from './IndividualMemories'

class DreamControl extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Welcome to the dream world! Now in color!</p>
        <People />
        <IndividualMemories />
      </div>
    )
  }
}

export default DreamControl