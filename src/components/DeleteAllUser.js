import React from "react";
import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import { deleteUsers } from "../store/slices/UserSlice";

export default function DeleteAllUser() {
  const dispatch = useDispatch();

  const deleteAllUsers = () => {
    dispatch(deleteUsers());
  }
  return (
    <Wrapper>
      <button className="btn" onClick={() => deleteAllUsers()}>Delete All User</button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 1rem;
`;