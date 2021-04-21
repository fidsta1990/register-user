import React from "react";
import styled from "styled-components";
import Button from "../UI/Button";

const Modal = ({ modalClose, openModal }) => {
  let age = "(>0)";
  return (
    <Wrapper className={`${!openModal ? "hide" : "show"}`}>
      <Card>
        <Header>
          <Title>Invalid Input</Title>
        </Header>
        <Content>
          <p> Please Enter a valid age {age}</p>
          <BtnContain>
            <Button onClick={modalClose}>Okay</Button>
          </BtnContain>
        </Content>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);

  &.show {
    display: block;
  }

  &.hide {
    display: none;
  }
`;
const Card = styled.article`
  position: fixed;
  top: 30vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  overflow: hidden;

  @media (min-width: 768px) {
    left: calc(50% - 20rem);
    width: 40rem;
  }
`;
const Header = styled.header`
  background: #4f005f;
  padding: 1rem;
`;

const Title = styled.h2`
  margin: 0;
  color: white;
`;

const Content = styled.div`
  padding: 1rem;
  background: #fff;
  margin: 0;
`;

const BtnContain = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
`;

export default Modal;
