import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings";
import { SectionDescription } from "components/misc/Typography";
import { ReactComponent as LinkedinIcon } from "images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "images/github-icon.svg";

import GustavoImg from "images/team/gustavo.jpg";
import GabrielImg from "images/team/gabriel.jpg";
import LeonardoImg from "images/team/leonardo.jpg";

const HeadingContainer = tw.div``;
const Heading = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`mx-auto text-center`;

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`;
const Card = tw.div`mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center`;
const CardImage = styled.div`
  ${(props) => css`background-image: url("${props.imageSrc}");`}
  ${tw`w-64 h-64 bg-contain bg-center rounded`}
`;
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-primary-500`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-900`}
  }
`;

const CardLinks = styled.div`
  ${tw`mt-6 flex`}
  .link {
    ${tw`mr-8 last:mr-0 text-gray-400 hocus:text-primary-500 transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`;

export default ({
  heading = "Conheça nossa bela equipe.",
  subheading = "Nosso Time",
  description = "Estamos sempre buscando as melhores soluções para que nosso cliente atinja seu objetivo final. Somos uma equipe profissional e com anos de experiência na área.",
  cards = [
    {
      imageSrc: GustavoImg,
      position: "Sócio-fundador",
      name: "Gustavo Henrique",
      links: [
        {
          url: "https://www.linkedin.com/in/gustavo-henrique-silva-2923b525/",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com/simplesgustavo",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: GabrielImg,
      position: "Sócio-fundador",
      name: "Gabriel Guimarães",
      links: [
        {
          url:
            "https://www.linkedin.com/in/gabriel-rocha-guimar%C3%A3es-13aaa5182/",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com/grlgmrs",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: LeonardoImg,
      position: "Sócio-fundador",
      name: "Leonardo Theodoro",
      links: [
        {
          url: "https://www.linkedin.com/in/leonardo-theodoro/",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com/leotheodoro",
          icon: GithubIcon,
        },
      ],
    },
  ],
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          {heading && <Heading>{heading}</Heading>}
          {description && <Description>{description}</Description>}
        </HeadingContainer>
        <Cards>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <CardContent>
                <span className="position">{card.position}</span>
                <span className="name">{card.name}</span>
                <CardLinks>
                  {card.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      className="link"
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="social-media"
                    >
                      <link.icon className="icon" />
                    </a>
                  ))}
                </CardLinks>
              </CardContent>
            </Card>
          ))}
        </Cards>
      </ContentWithPaddingXl>
    </Container>
  );
};
