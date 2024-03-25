import { BrowserRouter as Router, Route } from "react-router-dom";
import { IonApp, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import HomePage from "./features/HomePage/homePage";
import DetailPage from "./features/DetailPage/detailPage";
import Formular from "./features/Formular/formular";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <Router>
      <IonReactRouter>
        <Route exact path="/home" component={HomePage} />
        <Route path="/detailPage/:id" component={DetailPage} />
        <Route path="/formular" component={Formular} />
      </IonReactRouter>
    </Router>
  </IonApp>
);

export default App;
