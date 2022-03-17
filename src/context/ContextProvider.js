import React, { useState } from "react";
import AppContext from "./AppContext";

function ContextProvider({ children }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <AppContext.Provider
      value={{
        showModal,
        setShowModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default ContextProvider;
