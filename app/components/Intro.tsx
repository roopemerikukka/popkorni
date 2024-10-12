import Image from "next/image";
import styled from "styled-components";
import image from "../images/img2.jpeg";
import { mq } from "../utils/media-query";

const Intro = () => {

  return (
    <Container>
      <TextWrap>
        <p>Lauluyhtye Popkorni viihdyttää, yllättää, voimaannuttaa ja ilahduttaa.</p>
        <p>Lauluyhtye Popkorni on vuonna 2020 kuorolaisten itsensä perustama kupliva popkuoro suoraan Helsingin Pasilasta. Popkornin soundia ja suuntaa valmentaa laulupedagogi Anni Järviö.</p>
        <p>Popkorni luottaa vahvaan naisenergiaan toiminnassaan, esiintymisessään sekä ohjelmistovalinnoissaan.</p>
        <p>Ohjelmisto koostuu hittibiiseistä joiden tahtiin Lauluyhtye Popkornilla lentää paukkumaissit kattilaan ja tunnelma läpi kattojen!</p>
      </TextWrap>
      <ImageWrap>
        <Image src={image.src} width={image.width} height={image.height} alt="Lauluyhtye Popkorni" />
      </ImageWrap>
    </Container>
  )
}

export default Intro;

const TextWrap = styled.div`
`

const ImageWrap = styled.div`
  position: relative;

  img {
    max-width: 100%;
    height: auto;
    //box-shadow: 12px 12px 0px var(--pink);
    box-shadow: 5px 5px 20px 2px rgba(0,0,0,0.75);
  }

`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  @media ${mq.m} {
    flex-wrap: nowrap;
    }

  ${TextWrap} {
    width: 100%;
    @media ${mq.m} {
      width: 50%;
    }
  }

  ${ImageWrap} {
    width: 100%;
    @media ${mq.m} {
      width: 50%;
    }
  }
`
