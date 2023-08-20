import { createContext, useState } from "react";

const ContentContext = createContext(null);

export const ContentContextProvider = ({ children, value }) => {
  const [data, setData] = useState({
    ...value
  });

  return <ContentContext.Provider value={{
    contextData: data,
    setContextData: setData,
  }}>
    {children}
  </ContentContext.Provider>
}

export default ContentContext;