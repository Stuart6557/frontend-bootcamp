import { useEffect, useState } from "react";

export default function BlogPosts() {
  const [postArray, setPostArray] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    // console.log(response);
    const data = await response.json();
    console.log(data);
    setPostArray(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      {postArray.map((item) => {
        return <p>{item.title}</p>;
      })}
    </div>
  );
}
