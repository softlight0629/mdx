export default model => {

  return {
    text: {
      type: 'string',
      label: '文字',
      value: () => model.text,
      onChange: (e) => model.text = e.target.value,
    },
    linkAddr: {
      type: 'string',
      label: '链接',
      value: () => model.linkAddr,
      onChange: (e) => model.linkAddr = e.target.value,
    },
    bgColor: {
      type: 'color',
      label: '背景色',
      value: () => model.bgColor,
      onChange: (color) => model.bgColor = color,
    }
  }
}