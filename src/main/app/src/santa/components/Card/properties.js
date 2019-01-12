
export default qmodel => {

  return {
    title: {
      type: 'string',
      label: '标题',
      onChange: (e) => qmodel.title = e.target.value,
    },
    img: {
      type: 'string',
      label: '配图',
      onChange: (e) => qmodel.img = e.target.value,
    },
    description: {
      type: 'string',
      label: '描述',
      onChange: (e) => qmodel.description = e.target.value,
    }
  }
}