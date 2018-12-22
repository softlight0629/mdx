import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { Card, Table } from 'antd';
import { __ } from '@/util/common';

import styles from './Customers.module.less';

class Customers extends Component {

  render() {
    const columns = [
      {
        title: __('客户名称'),
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
        title: __('来源'),
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
        title: __('联系电话'),
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
        title: __('微信'),
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
        title: __('创建时间'),
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
          return <a href="/edit" target="_blank">{__('沟通')}</a>
        },
      }
    ];
    return (
      <DocumentTitle title={__('我的客户 · 企瑞')}>
        <div className={styles.mytable}>
          <Card
            title="我的客户"
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

export default Customers;