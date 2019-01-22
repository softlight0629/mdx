import React from 'react';
import { List } from 'antd';
import './index.less';

const LeList = (props) => {
  const {
    className = '',
    dataSource = [],
    renderItem,
    loading = false,
    children,
    ...otherProps,
  } = props;
  
  return (
    <List
      className={`le-list ${className}`}
      loading={false}
      dataSource={(() => {
        if (dataSource.length > 0) {
          return dataSource;
        }
      
        return props.emptyView ? ['empty'] : [];
      })()}
      renderItem={(item, index) => {
        if (item === 'empty') {
          return (
            <div className="blankslate">
              {emptyView}
            </div>
          );
        }

        const listItem = renderItem(item, index);
        if (listItem) {
          return (
            <List.Item key={item.id}>
              {listItem}
            </List.Item>
          )
        }
      }}
    >
      {children}
    </List>
  )
}

export default LeList;