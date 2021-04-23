import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import selector from "../../redux/post/selectors";
import { getPost } from "../../redux/post/actions";

const Wrapper = styled.div`
  padding: 15px;
`;

const Title = styled.h1`
  font-size: 40px;
  line-height: 40px;
  text-align: center;
  font-weight: 500px;
  margin: 0;
  padding-top: 20px;
  color: #fff;
`;

export const InfoWindow = styled.div`
  padding: 50px;
  margin: 100px auto;
  background: #000;
  color: #f8ff13;
  width: 250px;
  text-align: center;
  font-weight: 700;
  font-size: 25px;
  border: 2px solid red;
`;

const WrapperPost = styled.div`
  padding: 10px;
  margin: 100px auto;
  background: #000;
  color: #c4c4c4;
  max-width: 600px;
`;

const TitlePost = styled.h2`
  font-size: 25px;
  text-align: center;
  color: #f8ff13;
`;

const TextPost = styled.p`
  font-size: 20px;
  line-height: 25px;
`;

const SinglePost = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { post, isLoading, error } = useSelector(selector);

  useEffect(() => {
    dispatch(getPost(id));
  }, []);

  return isLoading ? (
    <InfoWindow>Loading</InfoWindow>
  ) : (
    <Wrapper>
      {error ? (
        <InfoWindow>{error}</InfoWindow>
      ) : (
        <>
          <Title>Post Page</Title>
          <WrapperPost>
            <TitlePost>{post.title}</TitlePost>
            <TextPost>{post.body}</TextPost>
          </WrapperPost>
        </>
      )}
    </Wrapper>
  );
};

export default SinglePost;
