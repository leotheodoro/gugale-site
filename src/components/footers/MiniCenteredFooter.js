import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Container as ContainerBase } from "components/misc/Layouts.js";
import logo from "../../images/logo.svg";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as InstagramIcon } from "../../images/instagram-icon.svg";
import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";

const Container = tw(ContainerBase)`bg-gray-900 text-gray-100 -mx-8 -mb-8`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`;
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`;
export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={logo} alt="logo" />
            <LogoText>Gugale</LogoText>
          </LogoContainer>
          <LinksContainer>
            <Link href="/">Home</Link>
            <Link href="/about">Sobre Nós</Link>
            <Link href="/portfolio">Portfólio</Link>
            <Link href="/contact">Contato</Link>
          </LinksContainer>
          <SocialLinksContainer>
            <SocialLink
              href="https://www.facebook.com/gugalesolutions"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/gugalesolutions"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </SocialLink>
            <SocialLink
              href="https://www.youtube.com/channel/UCldZf7EhjlMQcx8V-qynfew/?guided_help_flow=5"
              aria-label="Youtube"
            >
              <YoutubeIcon />
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText style={{ color: "#fff" }}>
            Av. Nações Unidas, Qd 16-47, Sala 605. Edifício Lumina.
            <br /> Bauru - SP, Brasil.
          </CopyrightText>
          <CopyrightText style={{ color: "#fff" }}>
            <a href="https://api.whatsapp.com/send?phone=5514997525200&text=Olá,%20estou%20entrando%20em%20contato%20através%20do%20site&source=&data=&app_absent=" rel="noopener noreferrer" target="_blank" >+55 (14) 99752-5200</a> | <a href="mailto:contato@gugale.com.br"> contato@gugale.com.br</a>
          </CopyrightText>
          <CopyrightText style={{ color: "#fff" }}>
            &copy; Copyright 2021, Gugale Ltda. Todos os direitos reservados.
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
