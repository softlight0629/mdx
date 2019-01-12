
const _cache = {};

class Cache {

  getEditPage(pageId) {
    return _cache[pageId];
  }

  putEditPage(pageId, editPage) {
    _cache[pageId] = editPage;
  }

  getAllPages() {
    return _cache;
  }
}

export default Cache;