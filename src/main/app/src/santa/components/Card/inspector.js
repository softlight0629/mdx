import React from 'react';

export default qmodel => {

  return {
    title: {
      type: 'Input',
      label: '卡片标题写什么?',
      value: qmodel && qmodel.title,
      onChange: e => qmodel.title = e.target.value,
    },
    description: {
      type: 'Input',
      label: '卡片描述写什么?',
      value: qmodel && qmodel.description,
      onChange: e => qmodel.description = e.target.value,
    }
  }
}