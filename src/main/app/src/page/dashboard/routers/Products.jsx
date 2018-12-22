import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { Card, Table, Menu, Dropdown } from 'antd';
import { __ } from '@/util/common';
import styles from './Products.module.less';

class Products extends Component {

  render() {
    const columns = [
      {
        title: __('名称'),
        dataIndex: 'title',
        key: 'title',
        render: (title, record) => {
          return (
            <span>
              <a href="" target="_blank">
                {title}
              </a>
            </span>
          )
        }
      },
      {
        title: __('状态'),
        dataIndex: 'status',
        key: 'status',
        width: 150,
        render: (status, record) => {
          return (
            <span>
              <a href="" target="_blank">
                {status}
              </a>
            </span>
          )
        },
      },
      {
        title: __('分类'),
        dataIndex: 'category',
        key: 'category',
        render: (category, record) => {
          return (
            <span>
              {category}
            </span>
          )
        },
      },
      {
        title: '',
        dataIndex: 'action',
        key: 'action',
        render: (_, record) => {
          return <a href="/edit" target="_blank">{__('编辑')}</a>
        },
      }
    ];
    return (
      <DocumentTitle title={__('我的产品 · 企瑞')}>
        <div className={styles.mytable}>
          <Card
            title="我的产品"
          >
            <Table
              pagination={false}
              columns={columns}
              locale={{ emptyText: '暂无数据' }}
            >
            </Table>
          </Card>
        </div>
      </DocumentTitle>
    )
  }
}

export default Products;