import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonTitle,
  IonButton,
  IonFooter,
  IonInput,
} from "@ionic/react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";

const formular = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Slovensko 2.0</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Názov firmy</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              Zadajte názov vašej firmy a skontrolujte si, či názov už
              neexistuje
            </p>
            <IonInput placeholder="Zadajte názov firmy" />
          </IonCardContent>
          <IonToolbar color="primary">
            <h5>Zadajte...</h5>
          </IonToolbar>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Kontaktný údaj</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>Zadajte email, cez ktorý sa opätovne prihlásite</p>
            <IonInput placeholder="Zadajte Email"></IonInput>
          </IonCardContent>
          <IonToolbar color="secondary">
            <h5>Zadajte...</h5>
          </IonToolbar>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Kontaktný údaj</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>Zadajte svoje tel. číslo, pre poslanie overovacieho kódu</p>
            <IonInput placeholder="Tel.číslo"></IonInput>
          </IonCardContent>
          <IonToolbar color="tertiary">
            <h5>Zadajte...</h5>
          </IonToolbar>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Meno konateľa</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>Zadajte celé meno, konateľa vašej spoločnosti</p>
            <IonInput placeholder="Meno"></IonInput>
          </IonCardContent>
          <IonToolbar color="success">
            <h5>Zadajte...</h5>
          </IonToolbar>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Predmety podnikania</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>Zadajte oblasti podnikania vašej spoločnosti</p>
            <IonInput placeholder="Kľúčové slová"></IonInput>
          </IonCardContent>
          <IonToolbar color="warning">
            <h5>Zadajte...</h5>
          </IonToolbar>
        </IonCard>
      </IonContent>
      <IonFooter>
        <IonButton expand="block">Odoslať</IonButton>
      </IonFooter>
    </IonPage>
  );
};

export default formular;
