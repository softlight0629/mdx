
export default model => {

  return {
    img: {
      type: 'string',
      label: '图片',
      value: () => model.img,
      onChange: e => model.img = e.target.value,
    },
    linkAddr: {
      type: 'string',
      label: '链接',
      value: () => model.linkAddr,
      onChange: e => model.linkAddr = e.target.value,
    },
  }
}