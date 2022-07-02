import React, { useEffect, useState } from "react";

const Filter = () => {
  const [search, setSearch] = useState("");
  const [datas, setDatas] = useState(null);
  useEffect(() => {
    if(search === ""){
        
    async function inital() {
        const response = await fetch("https://dummyjson.com/products?limit=10").then(
          (res) => res.json()
        );
        setDatas(response.products);
      }
      inital();
    }
  }, [search]);
  useEffect(() => {
    if (search.trim() !== "") {
      const setFetchTime = setTimeout(() => {
        async function getData() {
          const res = await fetch(`https://dummyjson.com/products/search?q=${search}`).then(
            (res) => res.json()
          );
          console.log(search)
            setDatas(res.products)
        }
        getData()
      }, 700);
      return () => clearTimeout(setFetchTime)
    }
  }, [search]);

  const handleCategories = (type) => {
    async function getCategory(){
        const res = await fetch(`https://dummyjson.com/products/category/${type}`)
            .then((res) => res.json())
            console.log(type, JSON.stringify(res))
        setDatas(res.products)
    }
    getCategory()
  }
  return (
    <div style={{margin:"0px auto", maxWidth:"fit-content"}}>
      <input
        type="text"
        placeholder="search"
        onChange={(e) => setSearch(e.target.value)}
        style={{width:"fit-content"}}
      />
      <button>search</button>
      <div
        style={{
          margin: "20px auto",
          display: "flex",
          maxWidth: "400px",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        <button onClick={() => handleCategories("fragrances") }>Fragrances</button>
        <button onClick={() => handleCategories("skincare")}>Skincare</button>
        <button onClick={() => handleCategories("groceries")}>Groceries</button>
        <button onClick={() => handleCategories("home-decoration")}>Home Decoration</button>
      </div>
        <div style={{ 
                    margin:"auto",
                    maxWidth:"fit-content"}}>
            {datas && datas.map(({title, description, price, category }) => {
            return (
                <div style={{
                    border:"1px solid black",
                    padding:"8px",
                    display:"flex",
                    flexDirection:"column",
                    gap:"7px",
                    maxWidth:"300px",
                }}>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <span>{price}</span>
                    <span>{category}</span>
                </div>
            )
            })}
        </div>
    </div>
  );
};

export default Filter;
