"use client";
import React, { useState, useEffect, useRef } from "react";
import { app } from "../../util/firebaseConfig";
import { getDatabase, ref, get, remove } from "firebase/database";
import AddNewBookToWishlist from "../../components/AddNewBookToWishlist";

const Page = () => {
  const [addBookDisplay, setAddBookDisplay] = useState(false);
  const [currentDisplayBookState, setCurrentDisplayBookState] =
    useState<string>("");
  const [allBooks, setAllBooks] = useState<any[]>([]);

  //* Fetch Data from Database
  const fetchData = async () => {
    const db = getDatabase(app);
    const dataRef = ref(db, "wishlist");
    try {
      const snapshot = await get(dataRef);
      if (snapshot.exists()) {
        const myData = snapshot.val();
        const tempArray = Object.keys(myData).map((myFileId) => {
          return {
            ...myData[myFileId],
            bookId: myFileId,
          };
        });
        setAllBooks(tempArray);
      } else {
        console.log("No data available or user not logged in");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //* Initiate Fetch Data
  useEffect(() => {
    fetchData();
  }, []);

  //* Delete Data
  const deleteBook = async (bookIdPar: any) => {
    const db = getDatabase(app);
    const dataRef = ref(db, `wishlist/${bookIdPar}`);
    await remove(dataRef);
    window.location.reload();
  };

  //* Handle Data from child components
  // To remove modal and add data
  const handleData = (data: React.SetStateAction<any>) => {
    setCurrentDisplayBookState(data);
  };

  //* Open Modal
  const handleAddNewBook = () => {
    setAddBookDisplay(!addBookDisplay);
  };

  //* Close Modal
  useEffect(() => {
    setAddBookDisplay(false);
    fetchData();
  }, [currentDisplayBookState]);

  //* Drag and drop
  const dragPerson = useRef<number>(0);
  const draggedOverPerson = useRef<number>(0);

  const handleSort = () => {
    const clone = [...allBooks];
    const temp = clone[dragPerson.current];
    clone[dragPerson.current] = clone[draggedOverPerson.current];
    clone[draggedOverPerson.current] = temp;
    setAllBooks(clone);
  };

  return (
    <div className="w-full h-screen relative flex gap-10 flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Book Wishlist</h1>
      <ul className="space-y-4">
        {allBooks.map((item, index) => {
          return (
            <div
              key={index}
              draggable
              onDragStart={() => (dragPerson.current = index)}
              onDragEnter={() => (draggedOverPerson.current = index)}
              onDragEnd={handleSort}
              onDragOver={(e) => e.preventDefault()}
              className="cursor-pointer px-2 py-1.5 bg-slate-50 rounded-md text-sm font-medium"
            >
              {item.bookName}
              <span
                className="font-bold px-2"
                onClick={() => deleteBook(item.bookId)}
              >
                X
              </span>
            </div>
          );
        })}
      </ul>
      <button
        onClick={handleAddNewBook}
        className="bg-blue-100 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-200"
      >
        Add Book
      </button>
      <div
        className={`${addBookDisplay ? "absolute w-screen h-screen flex items-center justify-center" : "hidden"}`}
      >
        {addBookDisplay ? <AddNewBookToWishlist onSendData={handleData} /> : ""}
      </div>
    </div>
  );
};

export default Page;
