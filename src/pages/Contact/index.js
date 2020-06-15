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
            title: "Gustavo Henrique",
            description: (
              <>
                <Address>
                  {/* <AddressLine>CEO</AddressLine> */}
                  <AddressLine>Bauru, SP</AddressLine>
                </Address>
                <Email>gustavo@gugale.com.br</Email>
                <Phone
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=5514981348117&text=Contato%20do%20Site&source=&data=&app_absent="
                >
                  +55 14 98134-8117
                </Phone>
              </>
            ),
          },
          {
            title: "Gabriel Guimarães",
            description: (
              <>
                <Address>
                  {/* <AddressLine>602 Annadale Drive</AddressLine> */}
                  <AddressLine>Bauru, SP</AddressLine>
                </Address>
                <Email>gabriel@gugale.com.br</Email>
                <Phone
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=5511995593377&text=Contato%20do%20Site&source=&data=&app_absent="
                >
                  +55 11 99559-3377
                </Phone>
              </>
            ),
          },
          {
            title: "Leonardo Theodoro",
            description: (
              <>
                <Address>
                  {/* <AddressLine>602 Annadale Drive</AddressLine> */}
                  <AddressLine>Bauru, SP</AddressLine>
                </Address>
                <Email>leonardo@gugale.com.br</Email>
                <Phone
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=5514981024031&text=Contato%20do%20Site&source=&data=&app_absent="
                >
                  +55 14 98102-4031
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
