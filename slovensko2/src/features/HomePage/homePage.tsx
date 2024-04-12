import "./homePage.css";
import data from "../_shared/data";
import { removeDiacritics } from "../_shared/removeDiacritics";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { chevronForwardOutline } from "ionicons/icons";
import {
  IonSearchbar,
  IonButton,
  IonLabel,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
} from "@ionic/react";

const HomePage: React.FC = () => {
  const [searchingText, setSearchingText] = useState("");
  const [filteredData, setFilteredData] = useState<
    { id: number; title: string; tags: string; price: string; tax: string }[]
  >([]);
  const history = useHistory();

  const goToDetailPage = (itemId: number) => {
    history.push(`/detailPage/${itemId}`);
  };

  useEffect(() => {
    const dataAfterFilter = data.filter((oneFunction) => {
      const normalizedSearchingText = removeDiacritics(
        searchingText.toLowerCase()
      );
      const normalizedTags = removeDiacritics(oneFunction.tags.toLowerCase());
      const normalizedTitle = removeDiacritics(oneFunction.title.toLowerCase());

      return (
        normalizedTags.includes(normalizedSearchingText) ||
        normalizedTitle.includes(normalizedSearchingText)
      );
    });
    setFilteredData(dataAfterFilter);
  }, [searchingText]);
  const handleSearchInput = (e: CustomEvent) => {
    setSearchingText(e.detail.value!);
  };

  const renderFilteredData = () => {
    if (filteredData.length === 0) {
      return (
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>{searchingText}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Budeme pridávať daľšie služby, pokiaľ máte o takúto službu záujem,
            rádi by sme sa vás spýtali na viac informací.
          </IonCardContent>
          <IonCardContent>Môžeme vás kontaktovať?</IonCardContent>
          <IonButton className="call-button">Áno</IonButton>
          <IonButton className="call-button">Nie</IonButton>
        </IonCard>
      );
    } else {
      return (
        <div key={searchingText}>
          {filteredData.map((oneFunction) => {
            const { id, title, tags, price, tax } = oneFunction;

            return (
              <IonButton
                fill="clear"
                expand="block"
                key={id}
                className="ion-text-wrap border"
                onClick={() => goToDetailPage(id)}
              >
                <IonGrid>
                  <IonRow class="ion-justify-content-between">
                    <IonCol
                      className="ion-text-left ion-no-padding"
                      style={{
                        fontSize: "22px",
                        color: "black",
                        maxWidth: "225px",
                      }}
                      size="auto"
                    >
                      {title}
                      <br />
                    </IonCol>
                    <IonCol
                      className="ion-text-right ion-no-padding"
                      style={{ fontSize: "15px" }}
                    >
                      {price}
                      <br />
                      {tax}
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol
                      style={{ fontSize: "15px", color: "grey" }}
                      className="ion-text-left  ion-no-padding"
                    >
                      {tags}
                    </IonCol>
                  </IonRow>
                </IonGrid>
                <IonIcon icon={chevronForwardOutline} size="small" style={{color: "grey",}} />
              </IonButton>
            );
          })}
        </div>
      );
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Slovensko 2.0</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <form className="search-bar">
          <IonSearchbar
            onIonInput={handleSearchInput}
            placeholder="Čo za teba vybavíme?"
          />
        </form>
        {renderFilteredData()}
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
