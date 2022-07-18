import React from "react";
import { Card } from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Wrapper = styled.div`
  display: flex;

  flex-wrap: wrap;
  justify-content: space-between;
`;
export const Home = () => {
  return (
    <Wrapper>
      <Link to="/video/12">
        <Card />
      </Link>
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
