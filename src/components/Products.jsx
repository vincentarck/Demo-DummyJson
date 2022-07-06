import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchProducts } from "../features/postSlice";
import { getProducts } from "../features/postSlice";
import { useSearch } from "../hooks/useSearch";
const Products = () => {
  const [search, setSearch] = useState("");
  const [datas, setDatas] = useState(null);
  const [isMount, setIsMount] = useState(true);

  const getData = useSelector(getProducts);
  
  useSearch(search,'products', setDatas,getData, isMount, setIsMount, fetchProducts )

  const handleCategories = (type) => {
    async function getCategory() {
      const res = await fetch(
        `https://dummyjson.com/products/category/${type}`
      ).then((res) => res.json());
      console.log(type, JSON.stringify(res));
      setDatas(res.products);
    }
    getCategory();
  };
  return (
    <div style={{ 
        flex: "1" }}>
            
      <h1>Products</h1>
      <input
        type="text"
        placeholder="search"
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: "fit-content" }}
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
        <button onClick={() => handleCategories("fragrances")}>
          Fragrances
        </button>
        <button onClick={() => handleCategories("skincare")}>Skincare</button>
        <button onClick={() => handleCategories("groceries")}>Groceries</button>
        <button onClick={() => handleCategories("home-decoration")}>
          Home Decoration
        </button>
      </div>
      <div
      >
        {datas &&
          datas.map(({ title, description, price, category }) => {
            return (
              <div
                key={title}
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "7px",
                  marginBottom:"20px"
                }}
              >
                <h1>{title}</h1>
                <p>{description}</p>
                <span>{price}</span>
                <span>{category}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Products;
