import React from "react"
import styled from "styled-components"

// the interface needs to explicitly declare which strings are safe to pass
interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

const Heading = ({
  headingLevel = "h1",
  children,
  className,
}: HeadingProps) => {
  return <StyledHeadingElement headingLevel={headingLevel} className={className}>{children}</StyledHeadingElement>
}

export default Heading

const HeadingElement = ({
  headingLevel = "h1",
  children,
  className,
}: HeadingProps) => {
  const Heading = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) =>
    React.createElement(headingLevel, props, children)

  return <Heading className={className}>{children}</Heading>
}

const StyledHeadingElement = styled(HeadingElement)`
  font-family: var(--font-bebas-neue);
`
