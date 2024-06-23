export const setToLocalStorage = (key: string, value: string) => {
  window.localStorage.setItem(key, value);
};

export const getFromLocalStorage = (key: string) => {
  const value = window.localStorage.getItem(key);
  if (value) return value;
};
