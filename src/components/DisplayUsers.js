import React from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import { removeUser } from "../store/slices/UserSlice";
import { useDispatch } from "react-redux";

const DisplayUsers = () => {
  const data = useSelector((state) => {
    return state.users;
  });

  const dispatch = useDispatch();
  const deleteUser = (user) => {
    dispatch(removeUser(user));
  };
  return (
    <Wrapper>
      {data.map((user, id) => {
        return (
          <li key={id}>
            {user}
            <button className="btn-delete" onClick={() => deleteUser(user)}>
              <i className="fa-solid fa-trash"></i>
            </button>
          </li>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;

  li {
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid grey;
    padding: 1rem;
  }

  button {
    cursor: pointer;
    background: white;
    border: none;
    color: red;
  }
`;

export default DisplayUsers;
