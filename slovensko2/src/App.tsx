import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { IonApp, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import HomePage from "./features/HomePage/homePage";
import DetailPage from "./features/DetailPage/detailPage";
import Formular from "./features/Formular/formular";
import sampleFormular from "./features/SampleFormular/sampleFormular";
import Error from "./features/_shared/Error";

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
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/products" component={HomePage} />
          <Route path="/product" component={DetailPage} />
          <Route path="/order" component={Formular} />
          <Route path="/sample-formular" component={sampleFormular} />
          <Route path="/error" component={Error} />
        </Switch>
      </IonReactRouter>
    </Router>
  </IonApp>
);

export default App;
