export const useLocalStorage = () => {
  const setLocalStorageItem = (itemName, item) => {
    localStorage.setItem(itemName, JSON.stringify(item));
  };
  const getLocalStorageItem = (itemName) => {
    const item = JSON.parse(localStorage.getItem(itemName));
    return item;
  };
  const getItemProperty = (itemName, property) => {
    const item = JSON.parse(localStorage.getItem(itemName));
    return item[property]
  }
  return { setLocalStorageItem, getLocalStorageItem, getItemProperty };
};
