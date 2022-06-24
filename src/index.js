import { useState } from 'react';

import usePersistedState from './usePersistedState';
import createStorage from './createStorage';

const getProvider = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    return window.localStorage;
  }

  return null;
};

const createPersistedState = (key, provider = getProvider()) => {
  if (provider) {
    const storage = createStorage(provider);
    return (initialState) => usePersistedState(initialState, key, storage);
  }
  return useState;
};

export default createPersistedState;
