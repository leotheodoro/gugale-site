import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";

import GapsSoftwareImg from "images/portfolio/gaps-software.webp";
import GapsSiteImg from "images/portfolio/gaps-site.webp";
import BiguaImg from "images/portfolio/bigua.webp";
import YachtImg from "images/portfolio/yacht.webp";
import ConfiancaSiteImg from "images/portfolio/confianca-site.webp";
import GuestierResidencialImg from "images/portfolio/guestier-residencial.webp";
import HappyGourmetImg from "images/portfolio/happy-gourmet.webp";
import OmnigraficaImg from "images/portfolio/omnigrafica.webp";
import TecnogessoImg from "images/portfolio/tecnogesso.webp";
import GuestierImg from "images/portfolio/guestier.webp";



const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Content = tw.div`mt-16`;

const Card = styled.div((props) => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row",
]);
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`,
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const Description = tw.p`mt-2 text-sm leading-loose`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;

export default () => {
  const cards = [
    {
      imageSrc: GapsSoftwareImg,
      subtitle: "Software",
      title: "iGAPS",
      description:
        "Sistema de gestão de carreiras e planos de cargos. Gerenciamento total dos Recursos humanos da empresa.",
    },

    {
      imageSrc: GapsSiteImg,
      subtitle: "Site",
      title: "GAPS Consultoria",
      description:
        "Site institucional desenvolvido para a empresa GAPS Consultoria.",
      link: 'https://gapsconsultoria.com.br',
    },
    {
      imageSrc: BiguaImg,
      subtitle: "Software",
      title: "Biguá Distribuidora",
      description:
        "Sistema de gerenciamento de uma distribuidora de carros, com o intuito de mostrar visualmente para o cliente os acessórios que existem no carro com uma experiência incrível.",
    },
    {
      imageSrc: YachtImg,
      subtitle: "Software",
      title: "Yacht Club At Ventura",
      description:
        "Gestão para síndicos e moradores de condomínio com funcionalidades de criação de tickets, avisos, notícias, etc.",
    },
    {
      imageSrc: GuestierResidencialImg,
      subtitle: "Site",
      title: "Guestier Residencial",
      description:
        "Site institucional para o incorporada Guestier com funcionalidades de Tour Virtual.",
      link: 'https://residencialguestier.com.br',
    },
    {
      imageSrc: GuestierImg,
      subtitle: "Software",
      title: "App Guestier",
      description:
        "Gestão do empreendimento, cadastro de compradores, sistema de gestão de contratos completo.",
    },
    {
      imageSrc: HappyGourmetImg,
      subtitle: "E-commerce",
      title: "Happy Hourmet",
      description:
        "E-commerce para a Happy Gourmet com marketing incluído.",
      link: 'https://happygourmet.com.br',
    },
    {
      imageSrc: OmnigraficaImg,
      subtitle: "Site",
      title: "Omnigráfica",
      description:
        "Site Institucional desenvolvido para a empresa Omnigráfica.",
      link: 'https://omnigrafica.com.br',
    },
    {
      imageSrc: TecnogessoImg,
      subtitle: "Site",
      title: "Tecnogesso",
      description:
        "Site Institucional desenvolvido para a empresa Tecnogesso.",
      link: 'https://tecnogessobauru.com.br',
    },
    {
      imageSrc: ConfiancaSiteImg,
      subtitle: "Site",
      title: "Confiança Supermercados",
      description:
        "Desenvolvimento da tela de cadastro do clube de vantagens do Confiança Supermercados",
    },
  ];

  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle>Nosso Portfólio</HeadingTitle>
          <HeadingDescription>
            Aqui estão alguns dos projetos que já desenvolvemos.
          </HeadingDescription>
        </HeadingInfoContainer>

        <Content>
          {cards.map((card, i) => (
            <Card key={i} reversed={i % 2 === 1}>
              <Image imageSrc={card.imageSrc} />
              <Details>
                <Subtitle>{card.subtitle}</Subtitle>
                <Title>{card.title}</Title>
                <Description>{card.description}</Description>
                <a href={card.link} target="_blank" without rel="noopener noreferrer">{card.link}</a>
              </Details>
            </Card>
          ))}
        </Content>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
    </Container>
  );
};
