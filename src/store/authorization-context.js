import React, { useState } from "react";

const AuthorizationContext = React.createContext({
  hasAuthorization: false,
  obtainAuthorization: () => {},
  removeAuthorization: () => {},
  warningText: "",
  warningAuthorization: (warning) => {},
});

export const AuthorizationContextProvider = (props) => {
  const [hasAuthorization, setHasAuthorization] = useState(false);
  const [warningText, setWarningText] = useState("");

  const obtainHandler = () => {
    setHasAuthorization(true);
    setWarningText("");
  };

  const removeHandler = () => {
    setHasAuthorization(false);
  };

  const warningHandler = (warning) => {
    const timerId = setTimeout(() => {
      setWarningText("");
      clearTimeout(timerId);
    }, 5000);
    setWarningText(warning);
  };

  return (
    <AuthorizationContext.Provider
      value={{
        hasAuthorization: hasAuthorization,
        obtainAuthorization: obtainHandler,
        removeAuthorization: removeHandler,
        warningText: warningText,
        warningAuthorization: warningHandler,
      }}
    >
      {props.children}
    </AuthorizationContext.Provider>
  );
};

export default AuthorizationContext;
