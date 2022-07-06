import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
export function useSearch(
  key,
  initial,
  setData,
  products,
  isMount,
  setIsMount,
  typeDispatch
) {
  const dispatch = useDispatch();
  React.useEffect(() => {
    console.count("dijalankan");
    if (key.trim() !== "") {
      const setFetchTime = setTimeout(() => {
        async function getData() {
          const res = await fetch(
            `https://dummyjson.com/${initial}/search?q=${key}`
          ).then((res) => res.json());
          console.log(res[initial]);
          setData(res[initial]);
        }
        getData();
        setIsMount(true);
      }, 500);
      return () => clearTimeout(setFetchTime);
    } else if (!products.length || isMount) {
      dispatch(typeDispatch(initial));
      setData(products);
    }
    if (products.length) setIsMount(false);
  }, [key, products]);
}
