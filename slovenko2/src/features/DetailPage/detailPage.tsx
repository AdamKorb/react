import { IonContent, IonHeader, IonPage,IonToolbar,IonTitle } from '@ionic/react';
import { RouteComponentProps } from 'react-router-dom';
import data from '../_shared/data';


interface DetailPageProps extends RouteComponentProps<{
  id: string;
}> {}

const DetailPage: React.FC<DetailPageProps> = ({ match }) => {
  const itemId = parseInt(match.params.id);

  return (
    <IonPage>
    <IonHeader>
        
        </IonHeader>
    <IonContent>
      <h2>Názov položky</h2>
    </IonContent>
  </IonPage>
  );
};

export default DetailPage;