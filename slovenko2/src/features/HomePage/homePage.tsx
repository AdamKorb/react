import './homePage.css';
import data from '../_shared/data';
import Header from '../_shared/header';
import { useState, useEffect } from 'react';
import { IonSearchbar, IonButton, IonLabel, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, } from '@ionic/react';
import { useHistory } from 'react-router-dom';


const HomePage: React.FC = () => {
  const [searchingText, setSearchingText] = useState('');
  const [filteredData, setFilteredData] = useState<
    { id: number; title: string; tags: string; price: string; tax: string }[]
  >([]);
  const history = useHistory();
  const goToDetailPage = (itemId: number) => {
    history.push(`/detailPage/${itemId}`);
  };

  useEffect(() => {
    const dataAfterFilter = data.filter((oneFunction) => {
      return oneFunction.title.toLowerCase().includes(searchingText.toLowerCase());
    });
    setFilteredData(dataAfterFilter);
  }, [searchingText]);

  

  if (filteredData.length === 0) {
    return (
      <div>
        <form className='search-bar'>
        <IonSearchbar
            onIonInput={(e) => setSearchingText(e.detail.value!)}
            placeholder='Čo za teba vybavíme?'
          />
        </form>
        <h2>{searchingText}</h2>
        <p>Budeme pridávať daľšie služby, pokiaľ máte o takúto službu záujem, rádi by sme sa vás spýtali na viac informací.</p>
        <p>Môžeme vás kontaktovať?</p>
        <button className='call-button'>Áno</button>
        <button className='call-button'>Nie</button>
      </div>
    );
  }

  return (
      <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Slovensko 2.0</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Slovensko2.0</IonTitle>
          </IonToolbar>
        </IonHeader>
        <form className='search-bar'>
        <IonSearchbar
          onIonInput={(e) => setSearchingText(e.detail.value!)}
          placeholder='Čo za teba vybavíme?'
        />
        </form>
      <div key={searchingText}>
        {filteredData.map((oneFunction) => {
          const { id, title, tags, price, tax } = oneFunction;

          return (
            <IonButton expand='full' key={id} onClick={() => goToDetailPage(id)}>
              <IonLabel>
              <h2>{title}</h2>
              <p>{tags}</p>
              <p>{price}</p>
              <p>{tax}</p>
              </IonLabel>
            </IonButton>
          );
        })}
      </div>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;