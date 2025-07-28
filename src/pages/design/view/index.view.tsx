import React, { useEffect } from "react";
import Header from "../../../components/header";
import {
  useScreenReaderAnnouncer,
  useFocusManagement,
} from "../../../hooks/useAccessibility";
import Subtitle from "../../../components/.global/subtitle";
import Text from "../../../components/.global/text";
import Title from "../../../components/.global/title";
import ImageDesign from "../../../assets/image-design.png";
import ImageDesign2 from "../../../assets/Image-design2.png";
import Card from "../../../components/card";
import Button from "../../../components/.global/button";
import { HeaderLink } from "../../../components/header/types";
import { FooterProps } from "../../../components/footer/types";
import Footer from "../../../components/footer";

interface DesignViewProps {
  headerLinks: HeaderLink[][];
  footerLinks: FooterProps["links"];
  footerLinks2?: FooterProps["links2"];
  footerLinks3?: FooterProps["links"];
  socialLinks: FooterProps["socialLinks"];
  copyright: FooterProps["copyright"];
}

const DesignView: React.FC<DesignViewProps> = ({
  headerLinks,
  footerLinks,
  footerLinks2,
  footerLinks3,
  socialLinks,
  copyright,
}) => {
  const { announce } = useScreenReaderAnnouncer();
  const { focusMainContent } = useFocusManagement();

  // Set page title for screen readers
  useEffect(() => {
    document.title = "Design System - Sou Junior";

    // Add meta description if not present
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Sistema de design da Sou Junior com componentes e diretrizes visuais"
      );
    }

    // Announce page change to screen readers
    announce("Página de Design System carregada");

    // Focus main content for better navigation
    setTimeout(() => {
      focusMainContent();
    }, 100);
  }, [announce, focusMainContent]);

  return (
    <div className="design-page">
      <Header links={headerLinks} />

      <main
        className="design-content"
        role="main"
        aria-label="Conteúdo principal da página de design"
      >
        <section aria-labelledby="design-heading">
          <Subtitle marginBottom={36} marginTop={16}>Áreas de Atuação</Subtitle>
          <Title size={40}>Design</Title>

          <Text size={20} color="#323232" weight={400}>
            Na área de Design, o foco está em criar experiências que sejam
            bonitas, intuitivas e centradas nas pessoas. Aqui, design não é só
            aparência, é sobre resolver problemas, facilitar jornadas e gerar
            conexões reais com quem usa o projeto.
          </Text>

          <Text size={20} color="#323232" weight={400}>
            Se você é uma pessoa criativa, curiosa e gosta de pensar em como as
            coisas funcionam para os outros, essa área tem muito a te oferecer.
          </Text>

          <Text size={20} color="#323232" weight={400}>
            Dentro do nosso projeto, temos cargos específicos para diferentes
            etapas e perfis do design.
          </Text>

          <Button variant="primary">Faça parte!</Button>

          {/* Placeholder for future content */}
          <div aria-live="polite" aria-atomic="true">
            {/* Dynamic content will be announced to screen readers */}
          </div>
        </section>
        <img src={ImageDesign} alt="" />
      </main>

      <Title as="h2" size={32} width={510}>
        Conheça os cargos de Design que você pode explorar com a gente:
      </Title>

      <Card
        padding="2rem 1rem"
        imageSrc={ImageDesign2}
        title="UX - User Experience"
        titleAs="h3"
        titleSize={24}
        titleWidth={36}
        marginTop={45}
        description="Aqui, você vai investigar dores e necessidades das pessoas usuárias,
            mapear jornadas, criar fluxos e wireframes. É uma área muito
            colaborativa, que conversa com Produto, Tech e Pesquisa."
        descriptionLineHeight={1.6}
        descriptionSize={16}
        descriptionColor="#000000"
        descriptionWeight={400}
        descriptionWidth={500}
        list={[
          "Criar fluxos e mapas de navegação.",
          "Fazer entrevistas e testes de usabilidade (junto da pesquisa).",
          "Prototipar soluções de forma iterativa.",
          "Garantir acessibilidade e clareza na experiência.",
        ]}
        listSize={16}
        listColor="#000000"
        listWeight={400}
      />

      <Card
        title="Por que atuar com Design na SouJunior?"
        list={[
          "Participar de entregas de verdade, com contexto e propósito.",
          "Trabalhar com pessoas de Produto, Tech, Marketing e Pesquisa.",
          "Desenvolver seu portfólio com segurança e acompanhamento.",
          "Aprender a colaborar, iterar e defender ideias com base em dados.",
        ]}
        listSize={16}
        listColor="#000000"
        listWeight={400}
      />

      <div style={{ margin: "auto", textAlign: "center" }}>
        <Card
          title="Junte-se a nós e faça parte dessa jornada transformadora!"
          description="Sua contribuição pode ser um passo importante para impulsionar
      carreiras e transformar o futuro de muitos profissionais da área
      tech."
          descriptionWidth={670}
          buttonText="Faca parte!"
          buttonVariant="primary"
        />
      </div>

      <Footer
        links={footerLinks}
        links2={footerLinks2}
        links3={footerLinks3}
        socialLinks={socialLinks}
        copyright={copyright}
      />
    </div>
  );
};

export default DesignView;
