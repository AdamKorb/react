import React, { useState } from "react";
import FormularCardWithInput from "../_shared/FormularCardWithInput";
import FormularCard from "../_shared/FormularCard";
import axios from "axios";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonContent,
  IonFooter,
  IonButton,
} from "@ionic/react";

const Formular = () => {
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [owner, setOwner] = useState("");
  const [bussinessActivity, setBussinessActivity] = useState<string[]>([]);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
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
      default:
        break;
    }
  };

  const fetchStepsData = async () => {
    try {
      const response = await axios.get("/POST_steps.json");
      return response.data;
    } catch (error) {
      console.error("Chyba pri načítaní údajov zo súboru steps.json:", error);
      return null;
    }
  };

  const handleSubmit = async () => {
    const data = {
      companyName: companyName,
      email: email,
      phoneNumber: phoneNumber,
      owner: owner,
      bussinessActivity: bussinessActivity,
    };
    const apiUrl = "POST_steps.json";
  
    try {
      await axios.post(apiUrl, data);
      window.alert("Údaje úspešne odoslané");
  
      const stepsData = await fetchStepsData();
      if (stepsData) {
        setCompanyName(stepsData.companyName);
        setEmail(stepsData.email);
        setPhoneNumber(stepsData.phoneNumber);
        setOwner(stepsData.owner);
        setBussinessActivity(stepsData.bussinessActivity);
      }
    } catch (error) {
      console.error("Chyba pri odosielaní údajov:", error);
      window.alert("Chyba pri odosielaní údajov");
    }
  };
  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Slovensko 2.0</IonTitle>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <FormularCardWithInput
          title="Názov firmy"
          description="Zadajte názov vašej firmy a skontrolujte si, či názov už neexistuje"
          icon="chatbubbleOutline"
          placeholder="Zadajte názov firmy"
          value={companyName}
          handleInputChange={handleInputChange}
          success={false}
        />

        <FormularCardWithInput
          title="Kontaktný údaj"
          description="Zadajte email, cez ktorý sa opätovne prihlásite"
          icon="chatbubbleOutline"
          placeholder="Zadajte Email"
          value={email}
          handleInputChange={handleInputChange}
          success={false}
        />

        <FormularCardWithInput
          title="Kontaktný údaj"
          description="Zadajte svoje tel. číslo, pre poslanie overovacieho kódu"
          icon="chatbubbleOutline"
          placeholder="Tel.číslo"
          value={phoneNumber}
          handleInputChange={handleInputChange}
          success={false}
        />

        <FormularCardWithInput
          title="Meno konateľa"
          description="Zadajte celé meno, konateľa vašej spoločnosti"
          icon="chatbubbleOutline"
          placeholder="Meno"
          value={owner}
          handleInputChange={handleInputChange}
          success={false}
        />

        <FormularCardWithInput
  title="Predmety podnikania"
  description="Zvolte oblasti podnikania vašej spoločnosti"
  icon="chatbubbleOutline"
  inputType="select"
  placeholder="Vyberte"
  value={bussinessActivity}
  handleInputChange={(value) => setBussinessActivity(value)}
  success={false}
  selectOptions={[
    { value: "option1", text: "40.Počítačové služby" },
    { value: "option2", text: "27.Sprostretkovateľská činnosť" },
    { value: "option3", text: "28.Kúpa tovaru na účely predaja" },
    { value: "option4", text: "58.Prenájom, úschova a požičanie" },
    { value: "option5", text: "62.Mimoškolská vzdelávacia činnosť" },
    {
      value: "option6",
      text: "41.Služby v oblasti administratívnej správy",
    },
  ]}
/>

        <FormularCard
          title="Budeme vás kontaktovať"
          description="V momente keď budeme mať pre vás potrebné informácie sa s vami spojíme"
          icon="chatbubbleOutline"
        />
      </IonContent>

      <IonFooter>
        <IonToolbar>
          <IonButton onClick={handleSubmit} expand="block">
            Odoslať
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Formular;
