import "./styles.css";
import Counter from "./Counter";
import BlogPosts from "./BlogPosts";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <h1>Modified Frontend Bootcamp</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ [<a href="/blog"><button class="path-button">Click here to display blog posts</button></a>,
              <h1>Counter</h1>,
              <Counter counterLabel="Number" />,
              <Counter counterLabel="Count" />,
              <Counter counterLabel="Age" />] } />
          <Route path="/blog" element={[<a href="/"><button class="path-button">Click here to display counts</button></a>,
              <h1>Blog Posts</h1>,
              <BlogPosts />]} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
