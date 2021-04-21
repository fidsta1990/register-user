import React from "react";
import styled from "styled-components";

const Card = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

const Wrapper = styled.div`
  margin: 2rem auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
  background: #fff;
  box-shadow: 0 0 5px #fff;
`;

export default Card;
