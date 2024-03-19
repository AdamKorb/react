import { IonContent, IonHeader, IonTitle, IonToolbar, IonPage } from '@ionic/react';

const header = () => {
  return (
<IonPage>
    <IonHeader>
        <IonToolbar>
          <IonTitle>Slovensko 2.0</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Slovensko2.0</IonTitle>
          </IonToolbar>
        </IonHeader>
        </IonContent>
    </IonPage>
  )
}

export default header
