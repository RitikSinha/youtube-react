import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background-color: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;

const ChannelImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;

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
export const Card = ({ type }) => {
  return (
    <Container type={type}>
      <Image
        type={type}
        src="https://i.ytimg.com/vi/QhuRWwPPids/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAnaJkUjuKbjmPNVU6gmDIG4E3DZQ"
      />
      <Details type={type}>
        <ChannelImg
          type={type}
          src="https://yt3.ggpht.com/EnqDJKAXGTaSMuplaTqlWhry_PJq-DSi5w3YrWjnp-AYFa-kwlYLkxP3MvXhC-tc_30NQCgNQP8=s176-c-k-c0x00ffffff-no-rj"
        />
        <Text>
          <Title>How I made million at age of 25</Title>
          <ChannelName>Ritik Sinha</ChannelName>
          <Info>843k views • 6 day ago</Info>
        </Text>
      </Details>
    </Container>
  );
};
