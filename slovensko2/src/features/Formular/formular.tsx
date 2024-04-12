import React, { useState } from 'react';
import axios from 'axios';
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
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [owner, setOwner] = useState('');
  const [bussinessActivity, setBussinessActivity] = useState('');

  const handleInputChange = (e: CustomEvent) => {
    const inputElement = e.target as HTMLInputElement;
    if (inputElement !== null) {
      const { name, value } = inputElement;
      switch (name) {
        case "companyName":
          setCompanyName(value);
          break;
        case "email":
          setEmail(value);
          break;
        case "phoneNumber":
          setPhoneNumber(value);
          break;
        case "owner":
          setOwner(value);
          break;
        case "bussinessActivity":
          setBussinessActivity(value);
          break;
        default:
          break;
      }
    }
  };
  const handleSubmit = () => {
    const data = {
      companyName: companyName,
      email: email,
      phoneNumber: phoneNumber,
      owner: owner,
    };
    const apiUrl = 'my_api';

    axios.post(apiUrl, data)
      .then(response => {
        console.log('Údaje úspešne odoslané na API:', response.data);
      })
      .catch(error => {
        console.error('Chyba pri odosielaní údajov na API:', error);
      });
    };
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
            <IonInput placeholder="Zadajte názov firmy" value={companyName} onIonChange={handleInputChange}/>
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
            <IonInput type="email" placeholder="Zadajte Email" value={email} onIonChange={handleInputChange}></IonInput>
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
            <IonInput type="tel" placeholder="Tel.číslo" value={phoneNumber} onIonChange={handleInputChange}></IonInput>
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
            <IonInput placeholder="Meno"value={owner} onIonChange={handleInputChange}></IonInput>
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
            <IonInput placeholder="Kľúčové slová" value={bussinessActivity} onIonChange={handleInputChange}></IonInput>
          </IonCardContent>
          <IonFooter>
            <IonToolbar style={{ '--background': '#fec89a' }}>
              <IonCol style={{fontSize: "15px", color:'#bc6c25'}}>Vyplnte...</IonCol>
            </IonToolbar>
          </IonFooter>
        </IonCard>
      </IonContent>

      <IonFooter>
        <IonButton onClick={handleSubmit} expand="block">Odoslať</IonButton>
      </IonFooter>
    </IonPage>
  );
};

export default formular;
