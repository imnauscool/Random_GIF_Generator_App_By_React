import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const API_KEY = "DjIJwHtUa5VEz3rxo6jm1VwxxIker4LZ";
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
  const [gif, setGif] = useState("");
  const [loading, setLoader] = useState("false");
  async function fetchData(tag) {
    setLoader(true);

    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoader(false);
  }
  useEffect(() => {
    fetchData();
  }, []);
  function clickHandler() {
    fetchData();
  }
  return { gif, loading, fetchData };
};

export default useGif;
