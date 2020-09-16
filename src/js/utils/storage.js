



class Storage {
  setItem(key, value) {
    if (!value) return null;
    const sValue = JSON.stringify(value);
    localStorage.setItem(key, sValue);
    return this;
  }

  getItem(key) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : {};
  }
}

export default new Storage();
