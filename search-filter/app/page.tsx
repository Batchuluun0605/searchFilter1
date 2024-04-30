"use client";
import { mockData } from "./constant";
import { useEffect, useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const searchFilter = mockData.filter((e) => {
    return search == "" ? e : e.name.includes(search) || e.id.includes(search);
  });

  return (
    <div>
      <p>hello my first search filter</p>
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        defaultValue={"neree bichne uu"}
        placeholder="hahhahhas"
        className=" border-2 p-5"
      />
      <div className=" flex flex-col gap-3 items-center">
        {searchFilter.map((e) => {
          return (
            <div className="flex gap-3 ">
              <h1 className="text-yellow-500 text-[30px]">{e.id}</h1>
              <h1 className=" text-pink-700 text-[30px]">{e.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
