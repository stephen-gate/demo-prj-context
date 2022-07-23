import { AuthorizationContextProvider as PRJ_CONTEXT_ACP } from "./store/authorization-context";
import AppContext from "./AppContext";
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.div_run_stand_alone}>
    <PRJ_CONTEXT_ACP>
        <AppContext />
      </PRJ_CONTEXT_ACP>
    </div>
  );
}

export default App;