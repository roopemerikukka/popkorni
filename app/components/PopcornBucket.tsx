import { createRef, MouseEventHandler } from "react";
import styled from "styled-components";
import popcornImg from "../images/single-popcorn.png";
import { mq } from "../utils/media-query";

const ANIMATION_LENGTH = 3
let COUNTER = 1

const createPopcorn = (container: HTMLDivElement | null, xpos = 500, ypos = 200) => {
  if (!container) return;
  const p = document.createElement('div')
  const even = COUNTER % 2 === 0;
  COUNTER++;
  p.className = 'popcorn'
  const scale = (Math.random() * 20) + 20
  p.style.width = scale + 'px'
  p.style.height = scale + 'px'

  if (even) {
    p.style.left = (xpos + Math.random() * 100) + 'px'
  } else {
    p.style.left = (xpos + -Math.random() * 100) + 'px'
  }
  p.style.top = (ypos - 100) + 'px'
  if (even) {
    p.style.animation = `pop-even ${ANIMATION_LENGTH}s linear forwards`
  } else {
    p.style.animation = `pop-odd ${ANIMATION_LENGTH}s linear forwards`
  }
  container.appendChild(p)

  //remove excess kernals
  setTimeout(() => {
    const pop = document.querySelector('.popcorn')
    if (pop) {
      pop.remove()
    }
  }, 1000 * ANIMATION_LENGTH)
}

const PopcornBucket = () => {
  const containerRef = createRef<HTMLDivElement>();
  const buttonRef = createRef<HTMLSpanElement>();

  const handleClick: MouseEventHandler<HTMLSpanElement> = () => {
    if (buttonRef.current) {
      createPopcorn(containerRef.current, buttonRef.current.offsetLeft, buttonRef.current.offsetTop);
      buttonRef.current.style.transform = "scale(1.2)";
      setTimeout(() => {
        if (buttonRef.current) {
          buttonRef.current.style.transform = "scale(1)";
        }
      }, 100)
    }
  }


  return (
    <Container ref={containerRef}>
      <Bucket onClick={handleClick} ref={buttonRef}>🍿</Bucket>
    </Container>
  )
}

export default PopcornBucket;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .popcorn {
    z-index: 999;
    width:20px;
    height:20px;
    position:absolute;
    top:-50px;
    background: url(${popcornImg.src});
    background-size: 100% 100%;
    filter:drop-shadow(0px 0px 5px rgba(0,0,0,.25));
    pointer-events: none;
  }

  @keyframes pop-odd {
    0% { transform:scale(.1); }
    3% { transform:scale(2); }
    6% { transform:scale(1) translateY(-100px) translateX(-20px) rotate(-1deg); }
    100% { transform:scale(1) translateY(-100px) translateX(-20px) rotate(-720deg); top: 150%; }
  }

  @keyframes pop-even {
    0% { transform:scale(.1); }
    3% { transform:scale(2); }
    6% { transform:scale(1) translateY(-100px) translateX(20px) rotate(1deg); }
    100% { transform:scale(1) translateY(-100px) translateX(20px) rotate(720deg); top: 150%; }
  }
`

const Bucket = styled.span`
  margin: 24px;
  cursor: pointer;
  transition: cubic-bezier(0, 2.28, 0.95, 0.69) 0.5s;
  font-size: 3rem;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  @media ${mq.m} {
    font-size: 4rem;
  }
`
