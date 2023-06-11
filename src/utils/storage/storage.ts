export function loadState(key: string) {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState) {
      return JSON.parse(serializedState);
    }
    return undefined;
  } catch (err) {
    return undefined;
  }
}

export function saveState<T>(key: string, state: T) {
  const stateAsString = JSON.stringify(state);
  localStorage.setItem(key, stateAsString);
}
