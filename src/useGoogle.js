import { useState, useEffect } from "react";
import API_KEY from "./key";
const CONTEXT_KEY = "6a07d6eed6d6ad825";
function useGoogle(term) {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((res) => res.json())
        .then((res) => setData(res));
    };
    fetchData();
  }, [term]);

  return { data };
}

export default useGoogle;