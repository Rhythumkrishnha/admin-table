import styled from "styled-components";
import React from "react";

const Navbar = () => {
  return (
    <Wrapper>
      <div>Welcome to Rhythum Krishnha Hub</div>
      <h1>Admin Table</h1>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 79vw;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem;
  font-size: 24px ;

  h1 {
    text-transform: uppercase;
  }
`;

export default Navbar;
