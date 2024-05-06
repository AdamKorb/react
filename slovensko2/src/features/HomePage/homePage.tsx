import "./homePage.css";
import { removeDiacritics } from "../_shared/removeDiacritics";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { chevronForwardOutline } from "ionicons/icons";
import axios from "axios";
import {
  IonSearchbar,
  IonButton,
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
  const [data, setData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const history = useHistory();

  const fetchData = async () => {
    try {
      const response = await axios.get("/mock/GET_products.json");
      setData(response.data);
    } catch (error) {
      console.error("Chyba pri načítaní dát:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const goToDetailPage = (itemId: number) => {
    if (itemId === 1) {
      history.push(`/product`);
    } else {
      history.push(`/error`);
    }
  };
  
  useEffect(() => {
    const dataAfterFilter = data.filter((oneFunction: any) => {
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
  }, [searchingText, data]);

  const handleSearchInput = (e: CustomEvent) => {
    setSearchingText(e.detail.value!);
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
        {filteredData.length === 0 ? (
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
        ) : (
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
                  <IonIcon
                    icon={chevronForwardOutline}
                    size="small"
                    style={{ color: "grey" }}
                  />
                </IonButton>
              );
            })}
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
