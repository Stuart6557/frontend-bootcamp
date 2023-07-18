import { useEffect, useState } from "react";

export default function PastEvents() {
  const [pastEventsArr, setPastEventsArr] = useState([]);
  // const [searchInput, setSearchInput] = useState("");
  const [filtered, setFiltered] = useState([]);

  // reference: https://github.com/machadop1407/React-Search-Bar/blob/main/search-bar-code/src/Components/SearchBar.js
  const handleChange = (e) => {
    e.preventDefault();
    // setSearchInput(e.target.value.toLowerCase());
    const wordEntered = e.target.value.toLowerCase();
    // console.log(searchInput);
    const newFilter = pastEventsArr.filter((item) => {
      return item.title.toLowerCase().includes(wordEntered);
    });
    setFiltered(newFilter);
    // console.log(filtered);
  };

  const fetchPastEvents = async () => {
    const response = await fetch("https://api.acmucsd.com/api/v2/event/past");
    console.log(response);
    // console.log("test 1");
    const data = await response.json();
    // console.log("test 2");
    console.log(data.events);
    setPastEventsArr(data.events);
    setFiltered(data.events);
  };

  useEffect(() => {
    fetchPastEvents();
  }, []);

  return (
    <div>
      <form role="search">
        <input
          type="search"
          class="query"
          name="q"
          placeholder="Search..."
          onChange={handleChange}
          // value={searchInput}
        ></input>
      </form>
      <div class="container">
        {filtered.map((item) => {
          return (
            <div class="card">
              <a
                href={
                  "https://acmucsd.com/events/" +
                  item.title.replace(/\s+/g, "-") +
                  "-" +
                  item.uuid
                }
              >
                <img src={item.cover} alt={item.title} />
                <p>{item.title}</p>
                <p>Location: {item.location}</p>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
