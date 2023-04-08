export const useLocalStorage = () => {
  const setLocalStorageItem = (itemName, item) => {
    localStorage.setItem(itemName, JSON.stringify(item));
  };
  const getLocalStorageItem = (itemName) => {
    const item = JSON.parse(localStorage.getItem(itemName));
    return item;
  };
  return { setLocalStorageItem, getLocalStorageItem };
};
