import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchUsers } from "../features/postSlice";
import { getUsers } from "../features/postSlice";
import { useSearch } from "../hooks/useSearch";
let Users = () => {
  const [search, setSearch] = useState("");
  const [datas, setDatas] = useState(null);
  const [isMount, setIsMount] = useState(true);
  const getData = useSelector(getUsers);
  
  useSearch(search,'users', setDatas,getData, isMount, setIsMount, fetchUsers)

  return (
    <div style={{ 
      flex: "1" }}>
        <h1>Users</h1>
      <input
        type="text"
        placeholder="search"
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: "fit-content", marginBottom:"60px" }}
      />
      <button>search</button>
      <div
      >{console.log(datas)}
        {datas &&
          datas.map(({ firstName, lastName, address, email }) => {
            return (
              <div
                key={email}
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  display: "flex",
                  flexDirection: "column",
                  marginBottom:"10px"
                }}
              >
                <h1>{firstName} {lastName}</h1>
                <p>{address.address}, {address.city}</p>
                <span>{email}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Users
