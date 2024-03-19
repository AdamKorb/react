import { Link } from "react-router-dom" 
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { RouteComponentProps } from 'react-router-dom';

interface DetailPageProps extends RouteComponentProps<{
  id: string;
}> {}

const DetailPage: React.FC<DetailPageProps> = ({ match }) => {
  const itemId = parseInt(match.params.id);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Detail položky</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h2>Názov položky</h2>
      </IonContent>
    </IonPage>
  );
};

export default DetailPage;