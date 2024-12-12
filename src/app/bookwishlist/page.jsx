"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import AddNewBookToWishlist from "../../components/AddNewBookToWishlist";
import BookWhishlist from "../../demoBooksWhishlist";

const page = () => {
  const [addBookDisplay, setAddBookDisplay] = useState(false);
  const [currentDisplayBookState, setCurrentDisplayBookState] = useState("");

  //* Handle Data from child components
  // To remove modal and add data
  const handleData = (data) => {
    setCurrentDisplayBookState(data);
  };

  //* Open Modal
  const handleAddNewBook = () => {
    if (!addBookDisplay) {
      setAddBookDisplay(true);
    }
  };

  //* Close Modal
  useEffect(() => {
    setAddBookDisplay(false);
  }, [currentDisplayBookState]);

  return (
    <div className="w-full h-screen flex gap-10 flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Book Whishlist</h1>
      <ul className="space-y-4">
        {BookWhishlist.map((item, index) => {
          return (
            <li
              key={index}
              className="cursor-pointer px-2 py-1.5 bg-slate-50 rounded-md text-sm font-medium"
            >
              {item.name} <span>{item.price}</span>
            </li>
          );
        })}
      </ul>
      <button
        onClick={handleAddNewBook}
        className="bg-blue-100 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-200"
      >
        Add Book
      </button>
      {addBookDisplay ? <AddNewBookToWishlist onSendData={handleData} /> : ""}
    </div>
  );
};

export default page;
