import { useContext } from "react";
import classes from "./Warning.module.css";
import AuthorizationContext from "../../store/authorization-context";

const Warning = (props) => {
  
  const authorizationCtx = useContext(AuthorizationContext);

  return (
    <div className={classes.div_warning}>
      <div>
        <h3>Authorization is required to {authorizationCtx.warningText}.</h3>
      </div>
      <div>
        <h3>Click  OBTAIN AUTHORIZATION  to continue.</h3>
      </div>
    </div>
  );
};

export default Warning;
