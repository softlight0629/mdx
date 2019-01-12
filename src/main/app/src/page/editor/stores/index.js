import Editor from './editor';

import EditorStore from './editor';

export default root => {
  return {
    editorStore: new EditorStore(root)
  }
}