import { RouteComponentProps, Link } from "react-router-dom";
import data from "../_shared/data";
import {
  arrowDownOutline,
  basketOutline,
  chevronForwardOutline,
  locationOutline,
} from "ionicons/icons";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonTitle,
  IonButton,
  IonIcon,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonRow,
  IonLabel,
  IonList,
  IonButtons,
  IonBackButton,
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
          <IonTitle>{filteredItem.title}</IonTitle>
          <IonButtons slot="start">
            <IonBackButton defaultHref="Back"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonRow>
          <IonCol
            size="8"
            style={{ fontSize: "28px", maxWidth: "220px", padding: "20px" }}
          >
            {filteredItem.title}
          </IonCol>
          <IonCol
            size="4"
            style={{ fontSize: "22px", maxWidth: "220px", padding: "20px" }}
            className="ion-text-right"
          >
            {filteredItem.price} <br /> {filteredItem.tax}
          </IonCol>
        </IonRow>
        <IonCol style={{ fontSize: "15px", color: "grey", padding: "20px" }}>
          {filteredItem.tags}
        </IonCol>

        <IonLabel
          style={{ fontSize: "20px", padding: "20px", display: "block" }}
        >
          Súvisiace služby
        </IonLabel>

        <IonList>
          <IonButton
            fill="clear"
            expand="block"
            className="ion-text-wrap border"
            style={{
              color: "black",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            
            <IonIcon icon={locationOutline} />
            <span style={{ flex: "1", textAlign: "center" }}>
              Výročná správa SRO
            </span>
            <IonIcon
              icon={chevronForwardOutline}
              size="small"
              style={{ color: "grey" }}
            />
          </IonButton>

          <IonButton
            fill="clear"
            expand="block"
            className="ion-text-wrap border"
            style={{
              color: "black",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            
            <IonIcon icon={locationOutline} />
            <span style={{ flex: "1", textAlign: "center" }}>
              Zmena sídla SRO
            </span>
            <IonIcon
              icon={chevronForwardOutline}
              size="small"
              style={{ color: "grey" }}
            />
          </IonButton>
          <IonButton
            fill="clear"
            expand="block"
            className="ion-text-wrap border"
            style={{
              color: "black",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            
            <IonIcon icon={locationOutline} />
            <span style={{ flex: "1", textAlign: "center" }}>
              Výročná správa SRO
            </span>
            <IonIcon
              icon={chevronForwardOutline}
              size="small"
              style={{ color: "grey" }}
            />
          </IonButton>
        </IonList>

        <Link to="/formular" style={{ display: "block" }}>
          <IonButton expand="block">
            <IonIcon slot="start" icon={basketOutline} size="small" />
            POKRAČOVAŤ NA FORMULÁR
          </IonButton>
        </Link>

        <IonButton style={{ fontSize: "15px"}} fill="clear">Objednávka 1,</IonButton> 
        <IonButton style={{ fontSize: "15px"}} fill="clear">Objednávka 2,</IonButton> 
        <IonButton style={{ fontSize: "15px"}} fill="clear">Objednávka 3,</IonButton> 
        <IonButton style={{ fontSize: "15px"}} fill="clear">Objednávka 4,</IonButton> 
        <IonButton style={{ fontSize: "15px"}} fill="clear">Objednávka 5,</IonButton> 
        <IonButton style={{ fontSize: "15px"}} fill="clear">Objednávka 6,</IonButton> 

        <Link to="/sample-formular" style={{ display: "block" }}>
          <IonButton expand="block">
            <IonIcon slot="start" icon={arrowDownOutline} size="small" />
            AKO TO PREBIEHA?
          </IonButton>
        </Link>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Čo budem potrebovať?</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            - názov firmy ktorý nie je použitý <br />
            - sídlo firmy (trvalé
            bydlisko alebo povolenie na inej adrese) <br />
            - elektronicky podpísané splnomocnenie <br />
            - vybrať si predmet
            podnikania
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Čo mám robiť ďalej?</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            - v banke si otvoriť firemný účet <br />
            - nájsť si účtovníčku
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Čo bude výsledkom?</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            - máte založenú SRO <br />
            - dostanete IČO <br />
            - dostanete DIČ
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default DetailPage;
