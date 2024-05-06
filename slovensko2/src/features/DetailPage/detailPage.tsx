import React, { useState, useEffect } from "react";
import axios from "axios";
import { RouteComponentProps, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
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
  const [item, setItem] = useState<any>({});
  const itemId = parseInt(match.params.id);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/mock/GET_1.json`);
        setItem(response.data);
      } catch (error) {
        console.error("Chyba pri načítaní dát:", error);
      }
    };
    fetchData();

    return () => {};
  }, [itemId]);

  const handleFormSubmit = async () => {
    try {
      const response = await axios.post(`http://localhost:8100/POST_create.json`, {
        order_id: itemId,
      });

      if (response.status !== 200) {
        console.error("Chyba pri vytváraní objednávky:", response.statusText);
        return;
      }

      history.push(`/order`);
    } catch (error) {
      console.error("Chyba pri vytváraní objednávky:", error);
    }
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{item.title}</IonTitle>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/products"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonRow>
          <IonCol
            size="8"
            style={{ fontSize: "28px", maxWidth: "220px", padding: "20px" }}
          >
            {item.title}
          </IonCol>
          <IonCol
            size="4"
            style={{ fontSize: "22px", maxWidth: "220px", padding: "20px" }}
            className="ion-text-right"
          >
            {item.price} <br /> {item.tax}
          </IonCol>
        </IonRow>
        <IonCol style={{ fontSize: "15px", color: "grey", padding: "20px" }}>
          {item.tags}
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
        <Link to="/order" style={{ display: "block" }}>
          <IonButton onClick={handleFormSubmit} expand="block">
            <IonIcon slot="start" icon={basketOutline} size="small" />
            POKRAČOVAŤ NA FORMULÁR
          </IonButton>
        </Link>

        <IonButton style={{ fontSize: "15px" }} fill="clear">
          Objednávka 1,
        </IonButton>
        <IonButton style={{ fontSize: "15px" }} fill="clear">
          Objednávka 2,
        </IonButton>
        <IonButton style={{ fontSize: "15px" }} fill="clear">
          Objednávka 3,
        </IonButton>
        <IonButton style={{ fontSize: "15px" }} fill="clear">
          Objednávka 4,
        </IonButton>
        <IonButton style={{ fontSize: "15px" }} fill="clear">
          Objednávka 5,
        </IonButton>
        <IonButton style={{ fontSize: "15px" }} fill="clear">
          Objednávka 6,
        </IonButton>

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
            - názov firmy ktorý nie je použitý <br />- sídlo firmy (trvalé
            bydlisko alebo povolenie na inej adrese) <br />
            - elektronicky podpísané splnomocnenie <br />- vybrať si predmet
            podnikania
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Čo mám robiť ďalej?</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            - v banke si otvoriť firemný účet <br />- nájsť si účtovníčku
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Čo bude výsledkom?</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            - máte založenú SRO <br />
            - dostanete IČO <br />- dostanete DIČ
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default DetailPage;
