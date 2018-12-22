import React, { Component } from 'react';
import Head from '../Head';
import Foot from '../Foot';

export default (props) => {

  const { headless, children } = props;

  return (
    <div className="qr">
    {
      headless ? (
        <div>
          {children}
        </div>
      ): (
        <React.Fragment>
          <Head {...props} />
          <div className="main-wrapper">
            { props.children }
          </div>
          <Foot />
        </React.Fragment>
      )
    }
    </div>
  )
};