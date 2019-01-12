
export default qmodel => {

  return {
    cards: {
      type: 'array',
      label: '卡片列表',
      items: {
        type: 'object',
        properties: {
          title: {
            type: 'string',
            label: '标题',
            value: (item) => item.title,
            onChange: (e, item) => item.title = e.target.value,
          },
          img: {
            type: 'string',
            label: '配图',
            value: (item) => item.img,
            onChange: (e, item) => item.img = e.target.value,
          },
          description: {
            type: 'string',
            label: '描述',
            value: (item) => item.description,
            onChange: (e, item) => item.description = e.target.value,
          },
        },
      },
      onAdd: e => qmodel.newCard(),
      onDel: e => qmodel.deleteCard(),
    }
  }
}