"use client";
import React from "react";
import { useState, useEffect } from "react";

const AddNewBookToWishlist = ({ onSendData }) => {
  const [BookName, setBookName] = useState("");
  const [BookCover, setBookCover] = useState(null);
  const [Preview, setPreview] = useState(null);

  //* Handle New Book
  const handleNewBook = () => {
    if (BookCover && BookName) {
      // console.log(BookName, Preview);
      onSendData(BookName, Preview);
    }
  };

  //* Handle File Change
  const handleFileChange = (e) => {
    // console.log(e.target.files[0]);
    const file = e.target.files[0];
    if (file) {
      setBookCover(file); // Save the file in state
      setPreview(URL.createObjectURL(file)); // Generate a preview URL
    }
  };

  //* Handle Book Change
  const handleBookChange = (e) => {
    let currentBook = e.target.value;

    if (currentBook) {
      setBookName(currentBook);
    } else {
      setBookName("Enter a book name");
    }
  };

  return (
    <div className="w-96 h-fit flex flex-col items-center gap-6 bg-slate-100 p-5 rounded-lg">
      <h1 className="font-bold text-xl text-center">Add New Book</h1>
      {Preview && <img src={Preview} alt="File preview" />}
      <input
        type="text"
        placeholder="Enter Book Name"
        onChange={(e) => handleBookChange(e)}
        className="w-full pl-2 py-1.5 rounded-md text-sm"
      />
      <input
        type="file"
        placeholder="Add book cover"
        accept="image/*"
        onChange={(e) => handleFileChange(e)}
        className="w-full"
      />
      <button
        onClick={handleNewBook}
        className="px-2 py-1.5 bg-blue-200 rounded-md font-medium"
      >
        Add
      </button>
    </div>
  );
};

export default AddNewBookToWishlist;
