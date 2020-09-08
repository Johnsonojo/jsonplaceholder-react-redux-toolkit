import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Pagination from "../../components/Pagination";
import { getAllPosts } from "../../redux/reducers/postsReducer";
import { UserContent, UserContentWrapper } from "../Users/style";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line
  const [postsPerPage, setPostsPerPage] = useState(10);

  const dispatch = useDispatch();
  const history = useHistory();

  const { allPosts } = useSelector((state) => state.post);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const fetchedPosts = await dispatch(getAllPosts());
      setPosts(fetchedPosts.payload.data);
      setLoading(false);
    };

    if (!allPosts?.length) {
      fetchPosts();
    }
  }, [dispatch, allPosts]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <UserContentWrapper>
        {currentPosts?.map((post) => (
          <UserContent
            key={post.id}
            onClick={() => {
              history.push(`/posts/${post.id}`);
            }}
          >
            <h3>Title: {post.title}</h3>
            <span>Body: {post.body}</span>
          </UserContent>
        ))}
      </UserContentWrapper>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Posts;
