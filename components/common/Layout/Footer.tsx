import StartYourProject from "../CTA/StartYourProject";
import { LContainer } from "../ui/Containers";

interface Props {
  withCTABanner?: boolean;
}

export default function Footer({ withCTABanner = false }: Props) {
  return (
    <LContainer>
      {withCTABanner && <StartYourProject />}
      <p>Footerrr</p>
    </LContainer>
  );
}

//###########################################################
//###########################################################
//##########           SUBCOMPONENTS           ##############
//###########################################################
//###########################################################

// const ContentForSmScreen = () => {
//   return (

//   );
// }
