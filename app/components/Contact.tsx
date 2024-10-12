import styled from "styled-components";
import Heading from "./Heading";

const Contact = () => {

  return (
    <>
      <Heading headingLevel="h2">Tilaa meidät keikalle!</Heading>
      <p>Tilaa laulua - saat ikimuistoisen elämyksen!</p>
      <p>Lauluyhtye Popkorni viihdyttää, yllättää, voimaannuttaa ja ilahduttaa eikä jätä yhtäkään juhlijaa kylmäksi.</p>
      <p>Edessä synttärit, pikkujoulut, polttarit, tuparit, häät tai vaikkapa ero-juhlat?</p>
      <p>Ota yhteyttä ja juonitaan juuri teille räätälöity kokonaisuus.</p>
      <LinkButton href="#">Ota yhteyttä</LinkButton>
      <p>
        <small>Hinta muodostuu paikalle tulevan kokoonpanon koon sekä keikkasetin pituuden mukaan. Lähtöhinta 300 € / 3 biisin setti pienellä kokoonpanolla.</small>
      </p>
    </>
  )
}

export default Contact;

const LinkButton = styled.a`
  display: inline-block;
  max-width: 250px;
  padding: 12px 24px;
  margin: 12px 0;
  background-color: var(--red);
  color: var(--foreground);
  text-decoration: none;
  text-align: center;
  border-radius: 3px;
  transition: all 200ms ease-in-out;

  &:hover {
    filter: brightness(0.85);
  }


  &:active {
    filter: brightness(1);
  }
`
