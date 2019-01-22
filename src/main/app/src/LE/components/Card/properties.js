
export default model => {

  return {
    title: {
      type: 'string',
      label: '标题',
      onChange: (e) => model.title = e.target.value,
    },
    img: {
      type: 'string',
      label: '配图',
      onChange: (e) => model.img = e.target.value,
    },
    description: {
      type: 'string',
      label: '描述',
      onChange: (e) => model.description = e.target.value,
    }
  }
}