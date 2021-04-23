import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { getPosts } from "../../redux/search/actions";
import selector from "../../redux/search/selectors";
import { InfoWindow } from "../SinglePost/SinglePost";

const Wrapper = styled.div`
  padding: 15px;
  font-size: 18px;
  line-height: 20px;
`;

const Search = styled.input`
  padding: 10px 5px;
  width: 300px;
  font-size: 18px;
  line-height: 20px;
  outline: none;
  margin: 0;
`;

const DropDown = styled.ul`
  background-color: #fff;
  width: 300px;
  padding: 5px 7px;
  margin: 0;
`;

const Skeleton = styled.div`
  font-size: 18px;
  line-height: 20px;
`;

const Post = styled.li`
  margin-bottom: 5px;
  list-style: none;
  padding: 3px;
  &:hover {
    color: blue;
  }
  cursor: pointer;
  border-bottom: 1px solid #000;
`;

const AutoSearch = () => {
  const [display, setDisplay] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const { posts, isLoading, error } = useSelector(selector);

  const openSinglePost = (event) => {
    history.push(`/post/${event.target.value}`);
    setDisplay(false);
  };

  const onChangeInput = (event) => {
    dispatch(getPosts(event.target.value));
  };

  return error ? (
    <InfoWindow>{error}</InfoWindow>
  ) : (
    <Wrapper>
      <Search
        onClick={() => setDisplay(!display)}
        placeholder="Type to search"
        onChange={onChangeInput}
      />
      {display && (
        <DropDown>
          {isLoading ? (
            <Skeleton>Loading</Skeleton>
          ) : (
            posts.map((post, i) => {
              return (
                <Post onClick={openSinglePost} key={i} value={post.id}>
                  {post.title}
                </Post>
              );
            })
          )}
        </DropDown>
      )}
    </Wrapper>
  );
};

export default AutoSearch;
