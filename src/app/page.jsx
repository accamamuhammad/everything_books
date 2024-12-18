"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { app } from "../util/firebaseConfig";
import { getDatabase, ref, get } from "firebase/database";

export default function Home() {
  const [bookWishlistList, setBookWishlistList] = useState([]);

  //* Fetch Data from Database
  const fetchData = async () => {
    const db = getDatabase(app);
    const dataRef = ref(db, "wishlist");
    try {
      const snapshot = await get(dataRef);
      if (snapshot.exists()) {
        setBookWishlistList(Object.values(snapshot.val()));
        console.log(Object.values(snapshot.val()));
      } else {
        console.log("No Data Found");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="relative w-[550px] min-h-[100dvh] max-h-fit space-y-3.5 pb-5 bg-white">
      {/* change width to w-full */}
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
          Book Wishlist
        </h1>
        <div className="w-full pl-7 no-scrollbar pb-2 gap-5 grid grid-col-2 grid-flow-col items-start overflow-x-auto">
          {bookWishlistList.map((item, index) => {
            return (
              <div key={index} className="rounded-lg w-48 h-fit space-y-0.5">
                <div className="border rounded-lg mb-2 w-full h-[240px]"></div>
                <h4 className="font-medium text-[15px]">{item.bookName}</h4>
                <p className="opacity-65 text-xs">{item.bookAuthor}</p>
                <p className="opacity-65 text-xs text-pink-500">
                  N{item.bookPrice}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {/* Add new Books */}
      <div className="w-full flex justify-end pt-2.5 pr-5">
        <Link
          href="/bookwishlist"
          className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faPlus} color="white" size="lg" />
        </Link>
      </div>
    </main>
  );
}
