import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonIcon,
  IonFooter,
  IonCol,
  IonToolbar,
} from "@ionic/react";
import { chatbubbleOutline } from "ionicons/icons";

interface FormularCardProps {
  title: string;
  description: string;
  icon: string;
}

const FormularCard: React.FC<FormularCardProps> = ({
  title,
  description,
  icon,
}) => {
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
      <IonCardContent>{description}</IonCardContent>
      <IonFooter>
        <IonToolbar
          style={{
            "--background": "var(--ion-color-success)",
          }}
        >
          <IonCol
            style={{
              fontSize: "15px",
              color: "var(--ion-color-dark-green)",
            }}
          >
            V poriadku
          </IonCol>
        </IonToolbar>
      </IonFooter>
    </IonCard>
  );
};

export default FormularCard;
