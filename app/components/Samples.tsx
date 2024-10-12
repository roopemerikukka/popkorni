import styled from "styled-components"
import Heading from "./Heading"

const Samples = () => {
  return (
    <>
      <Heading headingLevel="h2">Kuuntele ääninäytteitä</Heading>
      <p>Lauluvalikoimamme kattaa niin ihastuttavat suomalaiset klassikot kuin kansainväliset hitit. Laulamme pilke silmäkulmassa ja rohkeasti flirttaillen.</p>
      <p>Kuuntele laulunäytteitä tästä:</p>
      <Figure>
        <FigCaption>Jolene</FigCaption>
        <Audio controls src="/audio/jolene.mp3"></Audio>
      </Figure>
      <Figure>
        <FigCaption>Bad Guy</FigCaption>
        <Audio controls src="/audio/bad_guy.mp3"></Audio>
      </Figure>
      <Figure>
        <FigCaption>Syntisten pöytä / Cicciolina</FigCaption>
        <Audio controls src="/audio/syntisten_poyta_cicciolina.mp3"></Audio>
      </Figure>
    </>
  )
}

export default Samples

const Figure = styled.figure`
  margin: 24px 0;

  audio::-webkit-media-controls-panel {
    background-color: var(--red);
  }
`

const FigCaption = styled.figcaption`
  font-style: italic;
  font-size: 0.9em;
`

const Audio = styled.audio`
  width: 100%;
  margin: 12px 0;
`
