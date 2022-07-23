
import { useContext } from 'react';
import classes from "./AddNewButton.module.css";
import Button from "../UI/Button";
import AuthorizationContext from "../../store/authorization-context";



const AddNewButton = (props) => {
 
const authorizationCtx = useContext(AuthorizationContext);

const handleAddNew = () => {
  if (!authorizationCtx.hasAuthorization){
    authorizationCtx.warningAuthorization('ADD');
    return;
  }
    props.onAddNewClick();
  };

  const handleAuthorization = () => {

    if (authorizationCtx.hasAuthorization){
      authorizationCtx.removeAuthorization();
    } else {
      authorizationCtx.obtainAuthorization();
    }
  };

  const authButtonText = authorizationCtx.hasAuthorization ? 'REMOVE AUTHORIZATION' : 'OBTAIN AUTHORIZATION';
  return (
    <div>
      <div className={classes.div_button_plate}>
      <Button 
        onClick={handleAuthorization}>
          {authButtonText}
        </Button>
        <Button 
        onClick={handleAddNew}>
          ADD NEW APPOINTMENT
        </Button>
      </div>
    </div>
  );
};

export default AddNewButton;
