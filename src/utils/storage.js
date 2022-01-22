function save(key, value) {
  localStorage.setItem(key, value);
}

function remove(key) {
  localStorage.removeItem(key);
}

function get(key) {
  return localStorage.getItem(key);
}

function clear() {
  return localStorage.clear();
}

module.exports = {
  save,
  remove,
  get,
  clear
};
