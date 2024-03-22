import styled from "styled-components";

import { inube } from "@inubekit/foundations";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: ${({ $templateColumns }) => $templateColumns};
  grid-template-rows: ${({ $templateRows }) => $templateRows};
  gap: ${({ $gap }) => {
    const gapValue = $gap.split(" ");
    return gapValue.map((value) => inube?.spacing?.[value]).join(" ");
  }};
  justify-items: ${({ $justifyItems }) => $justifyItems};
  align-items: ${({ $alignItems }) => $alignItems};
  justify-content: ${({ $justifyContent }) => $justifyContent};
  align-content: ${({ $alignContent }) => $alignContent};
  grid-auto-columns: ${({ $autoColumns }) => $autoColumns};
  grid-auto-rows: ${({ $autoRows }) => $autoRows};
  grid-auto-flow: ${({ $autoFlow }) => $autoFlow};
  margin: ${({ $margin }) => {
    const marginValue = $margin.split(" ");
    return marginValue.map((value) => inube?.spacing?.[value]).join(" ");
  }};
  padding: ${({ $padding }) => {
    const paddingValue = $padding.split(" ");
    return paddingValue.map((value) => inube?.spacing?.[value]).join(" ");
  }};
  height: ${({ $height }) => $height};
  width: ${({ $width }) => $width};
`;

export { StyledGrid };
