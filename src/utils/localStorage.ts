export const saveLocalStorage = <T extends string>(key: string, value: T) => {
  if (typeof value === 'object') localStorage.setItem(key, JSON.stringify(value));
  else localStorage.setItem(key, value);

  window.dispatchEvent(new Event('local-storage'));
}

export const getLocalStorage = (key: string) => {
  const value = localStorage.getItem(key);

  if (value && typeof value === 'object') {
    return JSON.parse(value);
  }

  return value || '';
}

export const removeLocalStorage = (key: string) => {
  localStorage.removeItem(key);
  window.dispatchEvent(new Event('local-storage'));
}
