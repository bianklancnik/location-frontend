import useWindowDimensions from "../hooks/useWindowDimensions";
import { NavigationContainer } from "./Navigation.styled";
import NavigationDesktop from "./NavigationDesktop";
import NavigationMobile from "./NavigationMobile";

const Navigation = () => {
  const { width } = useWindowDimensions();
  const mobile = width! <= 768;

  return (
    <NavigationContainer>
      {mobile ? <NavigationMobile /> : <NavigationDesktop />}
    </NavigationContainer>
  );
};

export default Navigation;
