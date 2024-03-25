import "./homePage.css";
import data from "../_shared/data";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  IonSearchbar,
  IonButton,
  IonLabel,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
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
      return oneFunction.title
        .toLowerCase()
        .includes(searchingText.toLowerCase());
    });
    setFilteredData(dataAfterFilter);
  }, [searchingText]);

  const handleSearchInput = (e: CustomEvent) => {
    setSearchingText(e.detail.value!);
  };

  const renderFilteredData = () => {
    if (filteredData.length === 0) {
      return (
        <div>
          <h2>{searchingText}</h2>
          <p>
            Budeme pridávať daľšie služby, pokiaľ máte o takúto službu záujem,
            rádi by sme sa vás spýtali na viac informací.
          </p>
          <p>Môžeme vás kontaktovať?</p>
          <button className="call-button">Áno</button>
          <button className="call-button">Nie</button>
        </div>
      );
    } else {
      return (
        <div key={searchingText}>
          {filteredData.map((oneFunction) => {
            const { id, title, tags, price, tax } = oneFunction;

            return (
              <IonButton
                color="light"
                expand="full"
                key={id}
                onClick={() => goToDetailPage(id)}
              >
                <IonLabel>
                  <h2>{title}</h2>
                  <p>{tags}</p>
                  <p style={{ color: "blue" }}>{price}</p>
                  <p style={{ color: "blue" }}>{tax}</p>
                </IonLabel>
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
