import "./styles.css";
import Counter from "./Counter";
import BlogPosts from "./BlogPosts";

export default function App() {
  return (
    <div className="App">
      <h1>Counter</h1>
      <BlogPosts />
      <Counter counterLabel="Number" />
      <Counter counterLabel="Count" />
      <Counter counterLabel="Age" />
    </div>
  );
}
