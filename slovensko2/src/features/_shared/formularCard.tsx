import React, { useState } from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonIcon,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonFooter,
  IonCol,
  IonToolbar,
} from "@ionic/react";
import { chatbubbleOutline } from "ionicons/icons";

interface FormularCardProps {
  title: string;
  description: string;
  icon: string;
  placeholder?: string;
  value: string | string[];
  handleInputChange?: (e: any) => void;
  inputType?: "text" | "email" | "password" | "number" | "tel" | "select";
  selectOptions?: { value: string; text: string }[];
  success: boolean;
}

const FormularCard: React.FC<FormularCardProps> = ({
  title,
  description,
  icon,
  inputType,
  placeholder,
  value: initialValue,
  handleInputChange,
  selectOptions,
  success: initialSuccess,
}) => {
  const [value, setValue] = useState(initialValue ?? '');
  const [success, setSuccess] = useState(initialSuccess ?? false); 

  const handleChange = (e: any) => {
    if (!success) {
      setSuccess(true);
    }
    setValue(e.detail.value);
    if (handleInputChange) {
      handleInputChange(e);
    }
  };

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle style={{ display: "flex", alignItems: "center" }}>
          <span>{title}</span>
          <span style={{ marginLeft: "auto", marginRight: "5px" }}>
            <IonIcon icon={chatbubbleOutline} style={{ color: "dodgerblue" }} />
          </span>
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        {description}
        {inputType === "select" ? (
          <IonSelect
            placeholder={placeholder}
            value={value}
            onIonChange={handleChange}
          >
            {selectOptions &&
              selectOptions.map((option, index) => (
                <IonSelectOption key={index} value={option.value}>
                  {option.text}
                </IonSelectOption>
              ))}
          </IonSelect>
        ) : (
          <IonInput
            type={inputType}
            placeholder={placeholder}
            value={value as string}
            onIonChange={handleChange}
          />
        )}
      </IonCardContent>
      <IonFooter>
        <IonToolbar
          style={{
            "--background": success ? "var(--ion-color-success)" : "#fec89a",
          }}
        >
          <IonCol
            style={{
              fontSize: "15px",
              color: success ? "var(--ion-color-dark-green)" : "#bc6c25",
            }}
          >
            {success ? "V poriadku" : "Vyplňte..."}
          </IonCol>
        </IonToolbar>
      </IonFooter>
    </IonCard>
  );
};

export default FormularCard;
