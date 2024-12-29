import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background relative items-center overflow-x-hidden">
      <h1
        className="text-[rgba(255,255,255,1)] bg-[linear-gradient(to_right,_#283593,_#512da8)]
             rounded-lg uppercase w-11/12 text-center mt-[40px] ml-[15px] py-2 px-10 text-4xl font-bold "
      >
        Random Gifs
      </h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random />
        <Tag />
      </div>
    </div>
  );
}
