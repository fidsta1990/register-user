import React from "react";
import styled from "styled-components";

const UserList = ({ addNewUser }) => {

  return (
    <Wrapper>
      <UserUl>
        {addNewUser.map((user) => {
          const { name, age, id } = user;
          return (
            <UserLi key={id}>
              {name} ({age} years old)
            </UserLi>
          );
        })}
      </UserUl>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 2rem auto;
  width: 90%;
  max-width: 40rem;
  background: #fff;
`;

const UserUl = styled.ul`
  list-style: none;
  padding: 1rem;
`;
const UserLi = styled.li`
  border: 1px solid #ccc;
  margin: 0.5rem 0;
  padding: 0.5rem;
`;

export default UserList;
