import React from 'react';
import { __ } from '@/util/common';

const LePage = {};


LePage.getFormalTitle = (qrPage) => {
  return qrPage.title;
}

LePage.getDefaultTitle = () => {
  return __('无标题');
}

LePage.Title = (props) => {
  const title = LePage.getFormalTitle(props.qrPage);
  return <span className="le-page-title">{title}</span>
}

export default LePage;