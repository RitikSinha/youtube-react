import React from "react";
import { Card } from "../components";
import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;

  flex-wrap: wrap;
  justify-content: space-between;
`;
export const Home = () => {
  return (
    <Wrapper>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Wrapper>
  );
};
