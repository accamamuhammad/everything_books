"use client";
import Nav from "../components/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [newBookDisplay, setNewBookDisplay] = useState(false);

  const testData = [
    { name: "The little prince", author: "Antotne De Saint-Exuprry" },
    { name: "The Kite Runner", author: "Khaleed Hussaini" },
    { name: "Catcher in the Rye", author: "J.D. Salinger" },
    { name: "Someone Like you", author: "Roald Dahi" },
  ];

  const testData2 = [
    { name: "The little prince", author: "Antotne De Saint-Exuprry" },
    { name: "The Kite Runner", author: "Khaleed Hussaini" },
    { name: "Catcher in the Rye", author: "J.D. Salinger" },
    { name: "Someone Like you", author: "Roald Dahi" },
  ];

  const handleOpenAddNewWishlist = () => {
    setNewBookDisplay(!newBookDisplay);
  };

  const handlePassBookData = (item: { name: string; author: string }) => {};

  return (
    <main className="relative w-full h-[100dvh] space-y-3.5 pb-10">
      <div className="space-y-3.5">
        {/* Navigation */}
        <Nav />
        {/* Header */}
        <div className="space-y-1 px-7 text-left">
          <p className="opacity-65 font-medium text-sm">Welcome back, Alamin</p>
          <h1 className="font-medium text-2xl">
            What would you like to add
            <br /> to read today?
          </h1>
        </div>
        {/* Search Bar */}
        <div className="w-full px-7 relative py-5">
          <FontAwesomeIcon
            icon={faSearch}
            color="grey"
            className="absolute top-9 left-12"
          />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-12 py-3 rounded-md bg-slate-100"
          />
        </div>
      </div>
      {/* Book Recommendations */}
      <div className="space-y-3.5">
        <h1 className="pl-7 font-medium text-[22px] underline underline-offset-4 decoration-pink-500">
          Book Recommendations
        </h1>
        <div className="w-full pl-7 no-scrollbar pb-2 gap-5 grid grid-col-2 grid-flow-col items-start overflow-x-auto">
          {testData.map((item, index) => {
            return (
              <div
                onClick={() => handlePassBookData(item)}
                key={index}
                className="rounded-lg w-44 h-fit space-y-[1px]"
              >
                <div className="border rounded-lg mb-2 w-full h-[220px]"></div>
                <h4 className="font-medium">{item.name}</h4>
                <p className="opacity-65 text-xs">{item.author}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* Book Wishlist */}
      <div className="space-y-3.5 pt-3">
        <h1 className="pl-7 font-medium text-[22px] underline underline-offset-4 decoration-pink-500">
          Book Wishlist
        </h1>
        <div className="w-full pl-7 no-scrollbar pb-2 gap-5 grid grid-col-2 grid-flow-col items-start overflow-x-auto">
          {testData2.map((item, index) => {
            return (
              <div
                onClick={() => handlePassBookData(item)}
                key={index}
                className="rounded-lg w-44 h-fit space-y-[1px]"
              >
                <div className="border rounded-lg mb-2 w-full h-[220px]"></div>
                <h4 className="font-medium">{item.name}</h4>
                <p className="opacity-65 text-xs">{item.author}</p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
