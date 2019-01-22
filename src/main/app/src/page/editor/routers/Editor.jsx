import React, { Component } from 'react';
import { Row, Col } from 'antd';
import DocumentTitle from 'react-document-title';
import PageList from '../components/PageList';
// import PropInspector from '../components/PropInspector';
import PropertyPanel from '../components/PropertyPanel';
import ResourcePanel from '../components/ResourcePanel';
import EditorHeader from '@/component/Editor/EditorHeader';
import DefaultLayout from '@/component/Layout/Default';
import Container from '@/component/Layout/Container';
import { Santa } from '@/santa'
import { inject, observer } from 'mobx-react';

@inject('editorStore', 'siteStore')
@observer
class Editor extends Component {

  render() {
    const { editPageId } = this.props.editorStore;
    const { inspectedCompModel } = this.props.editorStore.inspector;
    const editPage = this.props.editorStore.getEditPage(editPageId);
    const pageData = this.props.siteStore.getPageData(editPageId);
    const masterPage = this.props.siteStore.getMasterPage();

    console.log(inspectedCompModel, 'xxxxxxasxa');
    return (
      <DocumentTitle title={`Editing · LE`}>
        <DefaultLayout headless>
          <div className="qr-editor-wrapper">
            <EditorHeader />
            <ResourcePanel />
            { inspectedCompModel &&  <PropertyPanel inspectedCompModel={inspectedCompModel} />}
            <Container mode="full">
              <Row>
                <Col sm={3} xs={24}>
                  <PageList />
                </Col>
                <Col sm={21} xs={24}>
                  <div className="qr-editor-preview">
                    <div className="qr-editor-preview-container-wrapper">
                      <div className="qr-editor-preview-container">
                        <Santa
                          masterPage={masterPage}
                          page={pageData}
                          editPage={editPage}
                          className="qr-editor-wrapper"
                          contentClassName="qr-editor-wrapper-content"
                        />
                      </div>
                    </div>
                  </div>
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