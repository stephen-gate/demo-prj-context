import { useContext } from 'react';
import classes from "./AppointmentDetails.module.css";
import DetailBar from "./DetailBar";
import Button from "../UI/Button";
import AuthorizationContext from "../../store/authorization-context";


const AppointmentDetails = (props) => {
  
  const authorizationCtx = useContext(AuthorizationContext);

  const handleUpdate = (updateId) => {
    if (!authorizationCtx.hasAuthorization){
      authorizationCtx.warningAuthorization('UPDATE');
      return;
    }
    props.onDetailUpdate(updateId);
  };

  const handleDelete = (deleteId) => {
    if (!authorizationCtx.hasAuthorization){
      authorizationCtx.warningAuthorization('DELETE');
      return;
    }
    props.onDetailDelete(deleteId);
  };

  const handleHideDetails = () => {
    props.onHideDetails();
  };

  return (
    <div>
      <div className={classes.div_list_plate}>
        <div className={classes.div_title}>
          <h3>APPOINTMENT DETAILS</h3>
        </div>

        {!props.appointments.length && (
          <div className={classes.div_title}>
            <h3>There are no appointments scheduled for this time slot.</h3>
          </div>
        )}

        {props.appointments.map((appointment) => (
          <DetailBar
            key={appointment.id}
            id={appointment.id}
            label={appointment.label}
            name={appointment.name}
            phone={appointment.phone}
            onDetailUpdate={handleUpdate}
            onDetailDelete={handleDelete}
          />
        ))}

        <div className={classes.div_button_plate}>
          <Button onClick={handleHideDetails}>
            HIDE APPOINTMENT DETAILS
        </Button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetails;
