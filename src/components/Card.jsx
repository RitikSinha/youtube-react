import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 360px;
  cursor: pointer;
  margin-bottom: 45px;
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 202px;
  background-color: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
  flex: 1;
`;
const ChannelImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Text = styled.div``;
export const Card = () => {
  return (
    <Container>
      <Image />
      <Details>
        <ChannelImg />
        <Text>
          <Title>How I made million at age of 25</Title>
          <ChannelName>Ritik Sinha</ChannelName>
          <Info>843k views • 6 day ago</Info>
        </Text>
      </Details>
    </Container>
  );
};
