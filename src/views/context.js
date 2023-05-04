import { createContext, useState } from 'react';

export const StringContext = createContext();

export const StringProvider = ({ children }) => {
  const [stringToSend, setStringToSend] = useState('');

  return (
    <StringContext.Provider value={{ stringToSend, setStringToSend }}>
      {children}
    </StringContext.Provider>
  );
};