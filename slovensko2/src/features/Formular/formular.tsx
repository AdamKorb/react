import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonTitle,
  IonButton,
  IonFooter,
  IonInput,
  IonCol,
} from "@ionic/react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
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
            Zadajte názov vašej firmy a skontrolujte si, či názov už neexistuje
            <IonInput placeholder="Zadajte názov firmy" />
          </IonCardContent>
          <IonFooter>
            <IonToolbar color="primary">
              <IonCol>Zadajte...</IonCol>
            </IonToolbar>
          </IonFooter>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Kontaktný údaj</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Zadajte email, cez ktorý sa opätovne prihlásite
            <IonInput placeholder="Zadajte Email"></IonInput>
          </IonCardContent>
          <IonFooter>
            <IonToolbar color="secondary">
              <IonCol>Zadajte...</IonCol>
            </IonToolbar>
          </IonFooter>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Kontaktný údaj</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Zadajte svoje tel. číslo, pre poslanie overovacieho kódu
            <IonInput placeholder="Tel.číslo"></IonInput>
          </IonCardContent>
          <IonFooter>
            <IonToolbar color="tertiary">
              <IonCol>Zadajte...</IonCol>
            </IonToolbar>
          </IonFooter>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Meno konateľa</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Zadajte celé meno, konateľa vašej spoločnosti
            <IonInput placeholder="Meno"></IonInput>
          </IonCardContent>
          <IonFooter>
            <IonToolbar color="success">
              <IonCol>Zadajte...</IonCol>
            </IonToolbar>
          </IonFooter>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Predmety podnikania</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Zadajte oblasti podnikania vašej spoločnosti
            <IonInput placeholder="Kľúčové slová"></IonInput>
          </IonCardContent>
          <IonFooter>
            <IonToolbar color="warning">
              <IonCol>Zadajte...</IonCol>
            </IonToolbar>
          </IonFooter>
        </IonCard>
      </IonContent>

      <IonFooter>
        <IonButton expand="block">Odoslať</IonButton>
      </IonFooter>
    </IonPage>
  );
};

export default formular;
