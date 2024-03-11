import './homePage.css';
import data from '../_shared/data';
import { useState, useEffect } from 'react';
import { IonSearchbar } from '@ionic/react';

const HomePage: React.FC = () => {
  const [searchingText, setSearchingText] = useState('');
  const [filteredData, setFilteredData] = useState<
    { id: number; title: string; tags: string; price: string; tax: string }[]
  >([]);

  useEffect(() => {
    const dataAfterFilter = data.filter((oneFunction) => {
      return oneFunction.title.toLowerCase().includes(searchingText.toLowerCase());
    });
    setFilteredData(dataAfterFilter);
  }, [searchingText]);
  window.location.reload()

  

  if (filteredData.length === 0) {
    return (
      <div>
        <form className='search-bar'>
        <IonSearchbar
            onIonChange={(e) => setSearchingText(e.detail.value!)}
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
    <div>
      <form className='search-bar'>
      <IonSearchbar
          onIonChange={(e) => setSearchingText(e.detail.value!)}
          placeholder='Čo za teba vybavíme?'
        />
      </form>
      <div key={searchingText}>
        {filteredData.map((oneFunction) => {
          const { id, title, tags, price, tax } = oneFunction;

          return (
            <div className='one-function' key={id}>
              <h2>{title}</h2>
              <p>{tags}</p>
              <p>{price}</p>
              <p>{tax}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;