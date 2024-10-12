import styled from "styled-components";
import { mq } from "../utils/media-query";
import Heading from "./Heading";
import Logo from "./Logo";

const Header = () => {

  return (
    <HeaderElement>
      <Logo />
      <Heading className="visually-hidden">Lauluyhtye Popkorni</Heading>
    </HeaderElement>
  )
}

export default Header

const HeaderElement = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;

  .logo {
    width: 300px;
    margin: 80px 0 30px 0;
    transform: rotate(-4deg);

    @media ${mq.m} {
      width: 500px;
      margin-bottom: 60px;
    }

    @media ${mq.l} {
      width: 700px;
    }
  }
`
