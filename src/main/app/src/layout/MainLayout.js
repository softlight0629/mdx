import React from 'react';
import DefaultLayout from '../component/Layout/Default';
import H5Layout from '../page/h5web/common/layout';

export default (props) => {

  if (window.h5) {
    return <H5Layout {...props} />
  }

  return <DefaultLayout {...props} />
}