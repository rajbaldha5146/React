import React, { useState } from "react";
import useGif from "../hooks/useGif";
import Spinner from "./Spinner";

const Tag = () => {
  const [tag, setTag] = useState("Dog");
  // const [gif, setGif] = useState("");
  // const [loading, setLoading] = useState(false);

  // async function fetchData() {
  //   setLoading(true)
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

  //   const { data } = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   setGif(imageSource);
  //   console.log(imageSource);
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const { gif, loading, fetchData } = useGif(tag);

  return (
    <div className="w-1/2 bg-[rgba(227,242,253,1)] mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="mt-[15px] text-3xl uppercase underline font-bold text-[rgba(66,66,66,1)]">
        Random {tag} Gif
      </h1>
      {loading ? <Spinner /> : <img src={gif} width="450" />}

      <input
        type="text"
        className="w-10/12 bg-[rgba(21,101,192,0.1)] text-lg py-2 rounded-lg mb-[3px] text-center"
        onChange={(event) => setTag(event.target.value)}
        value={tag}
      />

      <button
        onClick={() => fetchData(tag)}
        className="mb-[20px] w-10/12 bg-[rgba(21,101,192,0.3)] text-xl py-2 rounded-lg font-bold"
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
