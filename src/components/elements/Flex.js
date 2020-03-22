import React from "react";
import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : "row"};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "start"};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "start")};
`;
