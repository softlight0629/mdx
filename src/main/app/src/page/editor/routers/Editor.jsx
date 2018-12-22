import React, { Component } from 'react';
import { Row, Col } from 'antd';
import DocumentTitle from 'react-document-title';
import QrPageList from '../components/QrPageList';
import PropInspector from '../components/PropInspector';
import EditorHeader from '@/component/Editor/EditorHeader';
import DefaultLayout from '@/component/Layout/Default';
import Container from '@/component/Layout/Container';
import { Santa } from '@/santa'

class Editor extends Component {

  render() {
    return (
      <DocumentTitle title={`Editing · 企瑞`}>
        <DefaultLayout headless>
          <div className="qr-editor">
            <EditorHeader />
            <Container mode="full">
              <Row>
                <Col sm={3} xs={24}>
                  <QrPageList />
                </Col>
                <Col sm={18} xs={24}>
                  <Santa
                    className="qr-editor-wrapper"
                    contentClassName="qr-editor-wrapper-content"
                  />
                </Col>
                <Col sm={3} xs={24}>
                  <PropInspector />
                </Col>
              </Row>              
            </Container>
          </div>
        </DefaultLayout>
      </DocumentTitle>
    )
  }
}

export default Editor;