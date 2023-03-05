import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailsAction";

const Game = ({ name, released, image, id }) => {
  const dispatch = useDispatch();

  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame onClick={loadDetailHandler}>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={name} />
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5);
  max-height: 264px;
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  border: 2px solid #333;
  background: #000;
  h3,
  p {
    color: #fff;
  }
  &:hover {
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.35);
  }
  img {
    width: 100%;
  }
`;

export default Game;