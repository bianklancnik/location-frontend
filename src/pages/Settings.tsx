import SettingsForm from "../components/forms/settingsForm/SettingsForm";
import {
  SettingsContainer,
  SettingsTitle,
  SettingsWrapper,
} from "../components/style/Settings.styled";
import { GreenFont } from "../styles/Global.styled";

const Settings = () => {
  return (
    <SettingsWrapper>
      <SettingsContainer>
        <SettingsTitle>
          Profile <GreenFont>settings</GreenFont>.
        </SettingsTitle>
        <SettingsForm />
      </SettingsContainer>
    </SettingsWrapper>
  );
};

export default Settings;
