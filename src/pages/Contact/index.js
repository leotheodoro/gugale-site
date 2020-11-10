import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import ContactDetails from "components/cards/ThreeColContactDetails.js";

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.a`text-sm mt-0 block text-primary-500`;

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <ContactUsForm />
      <ContactDetails
        cards={[
          {
            title: "Ramon Garcia",
            description: (
              <>
                <Address>
                  {/* <AddressLine>CEO</AddressLine> */}
                  <AddressLine>Bauru, SP</AddressLine>
                </Address>
                <Email>contato@gugale.com.br</Email>
                <Phone
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=5514997525200&text=Olá,%20estou%20entrando%20em%20contato%20através%20do%20site&source=&data=&app_absent=">
                  +55 14 99752-5200
                </Phone>
              </>
            ),
          },
        ]}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
