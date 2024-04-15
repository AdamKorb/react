import React, { useState } from "react";
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
import FormularCard from "../_shared/formularCard";

const Formular = () => {
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [owner, setOwner] = useState("");
  const [bussinessActivity, setBussinessActivity] = useState<string[]>([]);
  const [jsonData, setJsonData] = useState<any>(null);

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

  const handleSubmit = () => {
    const data = {
      companyName: companyName,
      email: email,
      phoneNumber: phoneNumber,
      owner: owner,
      bussinessActivity: bussinessActivity,
    };
    const apiUrl = "http://localhost:3000/_api/server";

    axios
      .post(apiUrl, data)
      .then((response) => {
        console.log("Údaje úspešne odoslané:", response.data);
        fetchJsonData();
      })
      .catch((error) => {
        console.error("Chyba pri odosielaní údajov:", error);
      });
  };

  const fetchJsonData = () => {
    axios
      .get("/api/getData")
      .then((response) => {
        console.log("Obsah súboru steps.json:", response.data);
        setJsonData(response.data);
      })
      .catch((error) => {
        console.error("Chyba pri načítaní obsahu súboru steps.json:", error);
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
        <FormularCard
          title="Názov firmy"
          description="Zadajte názov vašej firmy a skontrolujte si, či názov už neexistuje"
          icon="chatbubbleOutline"
          placeholder="Zadajte názov firmy"
          value={companyName}
          handleInputChange={handleInputChange}
          success= {false}
        />

        <FormularCard
          title="Kontaktný údaj"
          description="Zadajte email, cez ktorý sa opätovne prihlásite"
          icon="chatbubbleOutline"
          placeholder="Zadajte Email"
          value={email}
          handleInputChange={handleInputChange}
          success= {false}
        />

        <FormularCard
          title="Kontaktný údaj"
          description="Zadajte svoje tel. číslo, pre poslanie overovacieho kódu"
          icon="chatbubbleOutline"
          placeholder="Tel.číslo"
          value={phoneNumber}
          handleInputChange={handleInputChange}
          success= {false}
        />

        <FormularCard
          title="Meno konateľa"
          description="Zadajte celé meno, konateľa vašej spoločnosti"
          icon="chatbubbleOutline"
          placeholder="Meno"
          value={owner}
          handleInputChange={handleInputChange}
          success= {false}
        />

        <FormularCard
          title="Predmety podnikania"
          description="Zvolte oblasti podnikania vašej spoločnosti"
          icon="chatbubbleOutline"
          inputType="select"
          placeholder="Vyberte"
          value={bussinessActivity}
          handleInputChange={(e) => setBussinessActivity(e.detail.value)}
          multiple={true}
          success= {false}
          selectOptions={[
            { value: "option1", text: "40.Počítačové služby" },
            { value: "option2", text: "27.Sprostretkovateľská činnosť" },
            { value: "option3", text: "28.Kúpa tovaru na účely predaja" },
            { value: "option4", text: "58.Prenájom, úschova a požičanie" },
            { value: "option5", text: "62.Mimoškolská vzdelávacia činnosť" },
            { value: "option6",  text: "41.Služby v oblasti administratívnej správy",},
          ]}
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
