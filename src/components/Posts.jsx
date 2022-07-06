import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchPosts } from "../features/postSlice";
import { getPosts } from "../features/postSlice";
import { useSearch } from "../hooks/useSearch";
let Posts = () => {
  const [search, setSearch] = useState("");
  const [datas, setDatas] = useState(null);
  const [isMount, setIsMount] = useState(true);
  const getData = useSelector(getPosts);
  
  useSearch(search,'posts', setDatas,getData, isMount, setIsMount, fetchPosts)

  return (
    <div style={{ 
      flex: "1" }}>
        <h1>Posts</h1>
      <input
        type="text"
        placeholder="search"
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: "fit-content", marginBottom:"60px" }}
      />
      <button>search</button>
      <div
      >
        {datas &&
          datas.map(({ title, body, userId }) => {
            return (
              <div
                key={title}
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  display: "flex",
                  flexDirection: "column",
                  marginBottom:"10px"
                }}
              >
                <h1>{title}</h1>
                <p>{body}</p>
                <span>{userId}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
};
 
export default Posts
