import { useEffect, useState } from "react";

import axios from "axios";

const App12 = () => {
  const [posts, setPosts] = useState([]);

  const [currentPostID, setCurrentPostID] = useState(null);
  const [specificPost, setSpecificPost] = useState({});

  const [isLoading, setIsLoading] = useState(false);
  console.log('isLoading', isLoading);
  

  const fetchPosts = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

    setPosts(res.data);
  };

  const fetchPost = async () => {
    setIsLoading(true);
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${currentPostID}`
    );
    setIsLoading(false);

    setSpecificPost(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    if (currentPostID === null) {
      setSpecificPost({});
      return;
    }

    fetchPost();
  }, [currentPostID]);

  if (currentPostID !== null) {
    return (
      <>
        <button onClick={() => setCurrentPostID(null)}>Back</button>
        {isLoading && <div>Loading...</div>}
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
