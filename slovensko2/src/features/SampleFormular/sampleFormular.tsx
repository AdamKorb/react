import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonTitle,
  IonIcon,
  IonFooter,
  IonInput,
  IonCol,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonBackButton,
  IonButtons,
} from "@ionic/react";
import { chatbubbleOutline } from "ionicons/icons";

const sampleFormular = () => {
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
            <IonCardTitle style={{ display: "flex", alignItems: "center" }}>Názov firmy
                <IonIcon icon={chatbubbleOutline} style={{ color: "dodgerblue", marginLeft: "150px" }}/>
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Zadajte názov vašej firmy a skontrolujte si, či názov už neexistuje{" "}
            <br />
            <br />
            Názov&nbsp;&nbsp;&nbsp;superfirma s.r.o.
          </IonCardContent>
          <IonFooter>
            <IonToolbar color="success">
              <IonCol style={{ color: "darkgreen", fontSize: "15px" }}>
                V poriadku
              </IonCol>
            </IonToolbar>
          </IonFooter>
        </IonCard>

        <IonCard>
        <IonCardHeader>
            <IonCardTitle style={{ display: "flex", alignItems: "center" }}>Kontaktný údaj
                <IonIcon icon={chatbubbleOutline} style={{ color: "dodgerblue", marginLeft: "110px" }}/>
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Zadajte email, cez ktorý sa opätovne prihlásite <br />
            <br />
            Email&nbsp;&nbsp;&nbsp;superfirma@superfirma.sk
          </IonCardContent>
          <IonFooter>
            <IonToolbar color="success">
              <IonCol style={{ color: "darkgreen", fontSize: "15px" }}>
                V poriadku
              </IonCol>
            </IonToolbar>
          </IonFooter>
        </IonCard>

        <IonCard>
        <IonCardHeader>
            <IonCardTitle style={{ display: "flex", alignItems: "center" }}>Kontaktný údaj
                <IonIcon icon={chatbubbleOutline} style={{ color: "dodgerblue", marginLeft: "110px" }}/>
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Zadajte svoje tel. číslo, pre poslanie overovacieho kódu <br />
            <br />
            Tel.číslo&nbsp;&nbsp;&nbsp;0900800700
          </IonCardContent>
          <IonFooter>
            <IonToolbar color="success">
              <IonCol style={{ color: "darkgreen", fontSize: "15px" }}>
                V poriadku
              </IonCol>
            </IonToolbar>
          </IonFooter>
        </IonCard>

        <IonCard>
        <IonCardHeader>
            <IonCardTitle style={{ display: "flex", alignItems: "center" }}>Meno konateľa
                <IonIcon icon={chatbubbleOutline} style={{ color: "dodgerblue", marginLeft: "110px" }}/>
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Zadajte celé meno, konateľa vašej spoločnosti <br />
            <br />
            Meno&nbsp;&nbsp;&nbsp;Alojz Podnikateľ
          </IonCardContent>
          <IonFooter>
            <IonToolbar color="success">
              <IonCol style={{ color: "darkgreen", fontSize: "15px" }}>
                V poriadku
              </IonCol>
            </IonToolbar>
          </IonFooter>
        </IonCard>

        <IonCard>
        <IonCardHeader>
            <IonCardTitle style={{ display: "flex", alignItems: "center" }}>Predmety podnikania
                <IonIcon icon={chatbubbleOutline} style={{ color: "dodgerblue", marginLeft: "25px" }}/>
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Zadajte oblasti podnikania vašej spoločnosti <br />
            <br />
            Predmety&nbsp;&nbsp;&nbsp;Verejné obstarávanie
          </IonCardContent>
          <IonFooter>
            <IonToolbar color="success">
              <IonCol style={{ color: "darkgreen", fontSize: "20px" }}>
                V poriadku
              </IonCol>
            </IonToolbar>
          </IonFooter>
        </IonCard>

        <IonCard>
        <IonCardHeader>
            <IonCardTitle style={{ display: "flex", alignItems: "center" }}>Skontrolujeme údaje
                <IonIcon icon={chatbubbleOutline} style={{ color: "dodgerblue", marginLeft: "35px" }}/>
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <br />
            <br />
          </IonCardContent>
          <IonFooter>
            <IonToolbar color="success">
              <IonCol style={{ color: "darkgreen", fontSize: "15px" }}>
                V poriadku
              </IonCol>
            </IonToolbar>
          </IonFooter>
        </IonCard>

        <IonCard>
        <IonCardHeader>
            <IonCardTitle style={{ display: "flex", alignItems: "center" }}>Stiahnite si súbory
                <IonIcon icon={chatbubbleOutline} style={{ color: "dodgerblue", marginLeft: "60px" }}/>
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Vytvorili sme pre vás súbory na založenie živnosti, podpíšte
            elektronickým podpisom...
            <br />
            <br />
          </IonCardContent>
          <IonFooter>
            <IonToolbar color="success">
              <IonCol style={{ color: "darkgreen", fontSize: "15px" }}>
                V poriadku
              </IonCol>
            </IonToolbar>
          </IonFooter>
        </IonCard>

        <IonCard>
        <IonCardHeader>
            <IonCardTitle style={{ display: "flex", alignItems: "center" }}>Podpíšte a nahrajte súbory
                <IonIcon icon={chatbubbleOutline} style={{ color: "dodgerblue" }}/>
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Podpíšte súbory pomocou aplikácie autogram od sk digital tu - potom
            ich sme nahrajte podpísané
            <br />
            <br />
          </IonCardContent>
          <IonFooter>
            <IonToolbar color="success">
              <IonCol style={{ color: "darkgreen", fontSize: "15px" }}>
                V poriadku
              </IonCol>
            </IonToolbar>
          </IonFooter>
        </IonCard>

        <IonCard>
        <IonCardHeader>
            <IonCardTitle style={{ display: "flex", alignItems: "center" }}>Vaša SRO je vytvorená
                <IonIcon icon={chatbubbleOutline} style={{ color: "dodgerblue", marginLeft: "20px" }}/>
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Tu si môžete pozrieť výpis z orsr - IČO príde do 14 dní
            <br />
            <br />
          </IonCardContent>
          <IonFooter>
            <IonToolbar color="success">
              <IonCol style={{ color: "darkgreen", fontSize: "15px" }}>
                V poriadku
              </IonCol>
            </IonToolbar>
          </IonFooter>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default sampleFormular;
