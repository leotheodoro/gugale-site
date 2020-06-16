import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading as HeadingTitle,
  Subheading,
} from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as UserIcon } from "feather-icons/dist/icons/user.svg";
import { ReactComponent as TagIcon } from "feather-icons/dist/icons/tag.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-3.svg";

import OlimpiadaImg from "images/blog/olimpiada.webp";
import MeetbonesImg from "images/blog/meetbones.webp";
import HackathonImg from "images/blog/hackathon.webp";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 lg:w-1/3`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm flex flex-col h-full`;
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-80 lg:h-64 rounded rounded-b-none`,
]);

const Details = tw.div`p-6 rounded border-2 border-t-0 rounded-t-none border-dashed border-primary-100 flex-1 flex flex-col items-center text-center lg:block lg:text-left`;
const MetaContainer = tw.div`flex items-center`;
const Meta = styled.div`
  ${tw`text-secondary-100 font-medium text-sm flex items-center leading-none mr-6 last:mr-0`}
  svg {
    ${tw`w-4 h-4 mr-1`}
  }
`;

const Title = tw.h5`mt-4 leading-snug font-bold text-lg`;
const Description = tw.p`mt-2 text-sm text-secondary-100`;
const Link = styled(PrimaryButtonBase).attrs({ as: "a" })`
  ${tw`inline-block mt-4 text-sm font-semibold`}
`;

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`-z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`-z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`;

export default ({
  subheading = "Blog",
  heading = (
    <>
      Nossa equipe ama <span tw="text-primary-500">escrever.</span>
    </>
  ),
  description = "Veja alguns artigos que nossa equipe já escreveu contando suas histórias ou dando algumas dicas.",
}) => {
  const blogPosts = [
    {
      imageSrc: OlimpiadaImg,
      author: "Leonardo Theodoro",
      category: "História",
      title: "Como foi ser competidor de Web Design",
      description:
        "Algumas vezes vivemos experiências que ficarão eternizadas em nossas vidas.",
      url:
        "https://medium.com/@simplespinheiro/como-foi-ser-competidor-de-web-design-a2531095559d",
    },
    {
      imageSrc: HackathonImg,
      author: "Leonardo Theodoro",
      category: "Hackathon",
      title: "Meu primeiro hackathon",
      description:
        "Me lembro de quando participei em 2018 do meu primeiro Benchmarking Junior com o tema Inovação & Sustentabilidade pela escola SENAI Bauru.",
      url:
        "https://www.linkedin.com/feed/update/urn:li:activity:6646570972407226368/",
    },
    {
      imageSrc: MeetbonesImg,
      author: "Leonardo Theodoro",
      title: "Comunidade de inovadores",
      category: "Projeto Social",
      description:
        "Nossa comunidade consiste em um grupo de desenvolvedores apaixonados por tecnologia e inovação que estão dispostos a troca experiências e conhecimento para fazer com que nos tornemos profissionais melhores.",
      url:
        "https://www.linkedin.com/posts/leonardo-theodoro_desenvolvedores-opensource-voluntaerrios-activity-6643607517542838272-sMVX",
    },
  ];
  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <HeadingTitle>{heading}</HeadingTitle>
          <HeadingDescription>{description}</HeadingDescription>
        </HeadingInfoContainer>
        <ThreeColumn>
          {blogPosts.map((post, index) => (
            <Column key={index}>
              <Card>
                <Image imageSrc={post.imageSrc} />
                <Details>
                  <MetaContainer>
                    <Meta>
                      <UserIcon />
                      <div>{post.author}</div>
                    </Meta>
                    <Meta>
                      <TagIcon />
                      <div>{post.category}</div>
                    </Meta>
                  </MetaContainer>
                  <Title>{post.title}</Title>
                  <Description>{post.description}</Description>
                  <Link href={post.url}>Leia</Link>
                </Details>
              </Card>
            </Column>
          ))}
        </ThreeColumn>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
