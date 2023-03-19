import { PrimaryButton } from "./Button.styled";
import {
  ConformationContainer,
  ConformationText,
  ConformationTitle,
  ConformationWrapper,
} from "./ConformationPage.styled";

type ConformationPageType = {
  title: string;
  text: string;
  onClose: any;
};

const ConformationPage = ({ title, text, onClose }: ConformationPageType) => {
  return (
    <ConformationWrapper>
      <ConformationContainer>
        <ConformationTitle>{title}</ConformationTitle>
        <ConformationText>{text}</ConformationText>
        <PrimaryButton
          type="button"
          onClick={() => {
            onClose();
          }}
        >
          CLOSE
        </PrimaryButton>
      </ConformationContainer>
    </ConformationWrapper>
  );
};

export default ConformationPage;
