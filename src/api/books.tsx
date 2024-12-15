"use client";
import React, { useState } from "react";

const BookData = () => {
  const [data, setData] = useState<string>("Hello");

  return <div>{data}</div>;
};

export default BookData;
