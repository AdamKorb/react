import FormularCard from "../_shared/formularCard";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonTitle,
  IonBackButton,
  IonButtons,
} from "@ionic/react";

const sampleFormular = () => {
  const defaultBussinessActivity = "option1"; // Hodnota "40.Počítačové služby"
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
          value="superfirma s.r.o"
          success={true}
        />

        <FormularCard
          title="Kontaktný údaj"
          description="Zadajte email, cez ktorý sa opätovne prihlásite"
          icon="chatbubbleOutline"
          placeholder="Zadajte Email"
          value="superfirma@superfirma.sk"
          success={true}
        />

        <FormularCard
          title="Kontaktný údaj"
          description="Zadajte svoje tel. číslo, pre poslanie overovacieho kódu"
          icon="chatbubbleOutline"
          placeholder="Tel.číslo"
          value="0900400500"
          success={true}
        />

        <FormularCard
          title="Meno konateľa"
          description="Zadajte celé meno, konateľa vašej spoločnosti"
          icon="chatbubbleOutline"
          placeholder="Meno"
          value="Alojz Konateľ"
          success={true}
        />

        <FormularCard
          title="Predmety podnikania"
          description="Zvolte oblasti podnikania vašej spoločnosti"
          icon="chatbubbleOutline"
          inputType="select"
          placeholder="Vyberte"
          value={defaultBussinessActivity}
          multiple={true}
          success={true}
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
      </IonContent>
    </IonPage>
  );
};

export default sampleFormular;
