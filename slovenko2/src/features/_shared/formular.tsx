import { IonContent, IonHeader, IonPage, IonToolbar, IonTitle,IonButton, IonFooter, IonInput } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
const formular = () => {
  return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Slovensko 2.0</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
        <IonCard color="primary">
        <IonCardHeader>
          <IonCardTitle>Názov firmy</IonCardTitle>
          <IonCardSubtitle>Zadajte</IonCardSubtitle>
        </IonCardHeader>

        <IonInput placeholder="Zadajte názov firmy"></IonInput>
      </IonCard>

      <IonCard color="secondary">
        <IonCardHeader>
          <IonCardTitle>Kontaktný údaj</IonCardTitle>
          <IonCardSubtitle>Zadajte</IonCardSubtitle>
        </IonCardHeader>

        <IonInput placeholder="Zadajte Email"></IonInput>
      </IonCard>

      <IonCard color="tertiary">
        <IonCardHeader>
          <IonCardTitle>Kontaktný údaj</IonCardTitle>
          <IonCardSubtitle>Zadajte</IonCardSubtitle>
        </IonCardHeader>

        <IonInput placeholder="Tel.číslo"></IonInput>
      </IonCard>

      <IonCard color="success">
        <IonCardHeader>
          <IonCardTitle>Meno konateľa</IonCardTitle>
          <IonCardSubtitle>Zadajte</IonCardSubtitle>
        </IonCardHeader>

        <IonInput placeholder="Meno"></IonInput>
      </IonCard>

      <IonCard color="warning">
        <IonCardHeader>
          <IonCardTitle>Card Title</IonCardTitle>
          <IonCardSubtitle>Vyberte</IonCardSubtitle>
        </IonCardHeader>

        <IonInput label="Zadajte Názov" placeholder="Názov firmy"></IonInput>
      </IonCard>
        </IonContent>
        <IonFooter>
            <IonButton expand="block">Odoslať</IonButton>
        </IonFooter>
      </IonPage>
  )
}

export default formular
