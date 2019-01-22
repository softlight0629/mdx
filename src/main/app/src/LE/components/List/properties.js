
export default model => {

  return {
    listItems: {
      type: 'array',
      label: '列表',
      items: {
        type: 'object',
        titleKey: 'title',
        properties: {
          title: {
            type: 'string',
            label: '标题',
            value: (item) => item.title,
            onChange: (e, item) => item.title = e.target.value,
          },
          img: {
            type: 'string',
            label: '封面',
            value: (item) => item.img,
            onChange: (e, item) => item.img = e.target.value,
          },
          label: {
            type: 'string',
            label: '标签',
            value: (item) => item.label,
            onChange: (e, item) => item.label = e.target.value,
          },
        }
      },
      onNewItem: () => model.newItem(),
      onDelItem: (item) => model.delItem(item),
    }
  }
}