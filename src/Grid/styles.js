import styled from "styled-components";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: ${({ $templateColumns }) => $templateColumns};
  grid-template-rows: ${({ $templateRows }) => $templateRows};
  gap: ${({ $gap }) => $gap};
  justify-items: ${({ $justifyItems }) => $justifyItems};
  align-items: ${({ $alignItems }) => $alignItems};
  justify-content: ${({ $justifyContent }) => $justifyContent};
  align-content: ${({ $alignContent }) => $alignContent};
  grid-auto-columns: ${({ $autoColumns }) => $autoColumns};
  grid-auto-rows: ${({ $autoRows }) => $autoRows};
  grid-auto-flow: ${({ $autoFlow }) => $autoFlow};
  margin: ${({ $margin }) => $margin};
  padding: ${({ $padding }) => $padding};
  height: ${({ $height }) => $height};
  width: ${({ $width }) => $width};
`;

export { StyledGrid };
