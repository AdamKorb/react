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
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonBackButton,
  IonButtons,
  IonIcon,
  IonAlert,
} from "@ionic/react";
import { chatbubbleOutline } from "ionicons/icons";

const formular = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Slovensko 2.0</IonTitle>
          <IonButtons slot="start">
            <IonBackButton defaultHref="Back"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle style={{ display: "flex", alignItems: "center" }}>
              Názov firmy
              <IonIcon
                icon={chatbubbleOutline}
                style={{ color: "dodgerblue", marginLeft: "150px" }}
              />
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Zadajte názov vašej firmy a skontrolujte si, či názov už neexistuje
            <IonInput placeholder="Zadajte názov firmy" />
          </IonCardContent>
          <IonFooter>
            <IonToolbar style={{ '--background': '#fec89a' }}>
              <IonCol style={{fontSize: "15px", color:'#bc6c25'}}>Vyplnte...</IonCol>
            </IonToolbar>
          </IonFooter>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle style={{ display: "flex", alignItems: "center" }}>
              Kontaktný údaj
              <IonIcon
                icon={chatbubbleOutline}
                style={{ color: "dodgerblue", marginLeft: "110px" }}
              />
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Zadajte email, cez ktorý sa opätovne prihlásite
            <IonInput placeholder="Zadajte Email"></IonInput>
          </IonCardContent>
          <IonFooter>
            <IonToolbar style={{ '--background': '#fec89a' }}>
              <IonCol style={{fontSize: "15px", color:'#bc6c25'}}>Vyplnte...</IonCol>
            </IonToolbar>
          </IonFooter>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle style={{ display: "flex", alignItems: "center" }}>
              Kontaktný údaj
              <IonIcon
                icon={chatbubbleOutline}
                style={{ color: "dodgerblue", marginLeft: "110px" }}
              />
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Zadajte svoje tel. číslo, pre poslanie overovacieho kódu
            <IonInput placeholder="Tel.číslo"></IonInput>
          </IonCardContent>
          <IonFooter>
            <IonToolbar style={{ '--background': '#fec89a' }}>
              <IonCol style={{fontSize: "15px", color:'#bc6c25'}}>Vyplnte...</IonCol>
            </IonToolbar>
          </IonFooter>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle style={{ display: "flex", alignItems: "center" }}>
              Meno konateľa
              <IonIcon
                icon={chatbubbleOutline}
                style={{ color: "dodgerblue", marginLeft: "110px" }}
              />
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Zadajte celé meno, konateľa vašej spoločnosti
            <IonInput placeholder="Meno"></IonInput>
          </IonCardContent>
          <IonFooter>
            <IonToolbar style={{ '--background': '#fec89a' }}>
              <IonCol style={{fontSize: "15px", color:'#bc6c25'}}>Vyplnte...</IonCol>
            </IonToolbar>
          </IonFooter>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle style={{ display: "flex", alignItems: "center" }}>
              Predmety podnikania
              <IonIcon
                icon={chatbubbleOutline}
                style={{ color: "dodgerblue", marginLeft: "25px" }}
              />
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Zadajte oblasti podnikania vašej spoločnosti
            <IonInput placeholder="Kľúčové slová"></IonInput>
          </IonCardContent>
          <IonFooter>
            <IonToolbar style={{ '--background': '#fec89a' }}>
              <IonCol style={{fontSize: "15px", color:'#bc6c25'}}>Vyplnte...</IonCol>
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
