import { RouteComponentProps, Link } from "react-router-dom";
import data from "../_shared/data";
import Formular from "../Formular/formular";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonTitle,
  IonButton,
} from "@ionic/react";

interface DetailPageProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const DetailPage: React.FC<DetailPageProps> = ({ match }) => {
  const itemId = parseInt(match.params.id);
  const filteredItem = data.filter((item) => item.id === itemId)[0];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Slovensko 2.0</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h2>{filteredItem.title}:</h2>
        {filteredItem && (
          <ul>
            <li>
              <p>{filteredItem.tags}</p>
              <p>Cena: {filteredItem.price}</p>
              <p>{filteredItem.tax}</p>
            </li>
          </ul>
        )}
        <Link to="/formular">
          <IonButton expand="block">Formulár</IonButton>
        </Link>
      </IonContent>
    </IonPage>
  );
};

export default DetailPage;
