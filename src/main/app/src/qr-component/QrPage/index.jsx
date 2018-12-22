import React from 'react';
import { __ } from '@/util/common';

const QrPage = {};


QrPage.getFormalTitle = (qrPage) => {
  return qrPage.title;
}

QrPage.getDefaultTitle = () => {
  return __('无标题');
}

QrPage.Title = (props) => {
  const title = QrPage.getFormalTitle(props.qrPage);
  return <span className="qr-page-title">{title}</span>
}

export default QrPage;