import styled from "styled-components";
import { mq } from "../utils/media-query";

const Footer = () => {

  return (
    <FooterElement>
      <ul>
        <li><a href="https://www.instagram.com/lauluyhtye_popkorni/">Instagram</a></li>
        <li><a href="https://www.facebook.com/profile.php?id=100083360881363">Facebook</a></li>
        <li><a href="mailto:lauluyhtye.popkorni@gmail.com">Sähköposti</a></li>
      </ul>
    </FooterElement>
  )
}

export default Footer

const FooterElement = styled.footer`
  background-color: var(--red);
  padding: 24px;
  margin-top: 120px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;

    @media ${mq.s} {
      flex-direction: row;
    }
  }

  li {
    padding: 24px;
    display: flex;
    justify-content: center;
  }

  a {
    font-family: var(--font-bebas-neue);
    color: var(--foreground);
    font-size: 1.5rem;
    text-decoration: none;
    transition: all 200ms ease-in-out;

    &:hover {
      text-decoration: underline;
      filter: brightness(0.85);
    }
  }
`
