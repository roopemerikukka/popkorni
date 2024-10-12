import styled from "styled-components"
import image from '../images/popcorn.jpg'
import { mq } from "../utils/media-query"

const BackgroundStripe = () => {

  return (
    <Container></Container>
  )
}

export default BackgroundStripe

const Container = styled.div`
  background-color: black;
  margin: 48px 0;
  height: 200px;
  background-image: url(${image.src});
  background-size: cover;
  background-position: 50% 50%;
  box-shadow: 0px 0px 30px 5px rgba(0,0,0,0.75);

  @media ${mq.m} {
    height: 400px;
  }
`
