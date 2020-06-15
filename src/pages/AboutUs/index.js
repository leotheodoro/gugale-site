import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";

import RespectIcon from "images/respect-icon.svg";
import InnovationIcon from "images/innovation-icon.svg";
import ResultsIcon from "images/results-icon.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading={<Subheading>Sobre Nós</Subheading>}
        heading="Somos uma empresa de inovação e criatividade."
        buttonRounded={false}
        description="Fascinados por tecnologia e por tudo que há de inovador no mercado, somos uma equipe de apaixonados por criação e dispostos a desenvolver e produzir ideias."
        primaryButtonText="See Portfolio"
        imageSrc="https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
      />
      <MainFeature1
        subheading={<Subheading>Nossa Missão</Subheading>}
        heading="Queremos melhorar a vida das pessoas."
        buttonRounded={false}
        primaryButtonText="Contact Us"
        description="Nossa principal missão é fazer com que as pessoas foquem no que realmente é importante na sua vida e deixe a tecnologia realizar os trabalhos manuais."
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        textOnLeft={false}
      />
      <Features
        subheading={<Subheading>Nosso Valores</Subheading>}
        heading="Nosso código de conduta."
        // description="Respeito e transparência são os p"
        cards={[
          {
            imageSrc: RespectIcon,
            title: "Ética e Transparência",
            description:
              "Respeito e amor pelo próximo são essenciais nos relacionamentos com nossa equipe e com o cliente.",
          },
          {
            imageSrc: InnovationIcon,
            title: "Criatividade e Inovação",
            description:
              "Sempre buscando o que existe de melhor em termos de tecnologia para você.",
          },
          {
            imageSrc: ResultsIcon,
            title: "Resultados",
            description:
              "O principal motivo disso tudo é fazer você com que você tenha resultados.",
          },
        ]}
        linkText=""
      />
      <TeamCardGrid subheading={<Subheading>Nosso Time</Subheading>} />
      <Footer />
    </AnimationRevealPage>
  );
};
