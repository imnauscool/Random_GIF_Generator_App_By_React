import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = "DjIJwHtUa5VEz3rxo6jm1VwxxIker4LZ";
const Tag = () => {
  const [tag, setTag] = useState("");
  const { gif, loading, fetchData } = useGif(tag);
  function clickHandler() {
    fetchData(tag);
  }
  function changeHandler(event) {
    setTag(event.target.value);
  }

  return (
    <div className=" w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="mt-[15px] text-2xl underline font-bold uppercase ">
        Random {tag} Gif
      </h1>
      {loading ? <Spinner /> : <img src={gif} width={450} />}
      <input
        className=" w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center"
        onChange={changeHandler}
        type="text"
        value={tag}
      />
      <button
        onClick={clickHandler}
        className=" w-10/12 bg-yellow-500 py-2 rounded-lg text-lg mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
