import React from "react";
import styled from 'styled-components';

const DreamControlHeader = styled.h1`
  font-size: 32px;
  text-align: center;
  color: black;
  `
;

export default function Header() {
  return (
    <React.Fragment>
      <DreamControlHeader>
        <div class="row">
          <div class="col-2">
            <h1>DREAM CONTROL</h1>
          </div>
          <div class="col-10">
            <p>Welcome to the dream world! Now in color!</p>
          </div>
        </div>
      </DreamControlHeader>
    </React.Fragment>
  )
}