export default (src, width, height = width) => (
  `${src}?x-oss-process=image/resize,m_fill,w_${width * 2},h_${height * 2}/format,png`
);