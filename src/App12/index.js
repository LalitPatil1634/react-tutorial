import { useEffect, useState } from "react";

import axios from "axios";

const App12 = () => {
  const [posts, setPosts] = useState([]);
  const [currentPostID, setCurrentPostID] = useState(null);

  const [specificPost, setSpecificPost] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setPosts(res.data);
  };

  const fetchPost = async () => {
    console.log("fetching post");

    if (currentPostID === null) {
      return;
    }

    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${currentPostID}`
    );

    setSpecificPost(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    fetchPost();
  }, [currentPostID]);

  if (currentPostID !== null) {
    return (
      <>
        <button onClick={() => setCurrentPostID(null)}>Back</button>
        <h1>{specificPost.title}</h1>
        <p>{specificPost.body}</p>
      </>
    );
  }

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id} onClick={() => setCurrentPostID(post.id)}>
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default App12;
