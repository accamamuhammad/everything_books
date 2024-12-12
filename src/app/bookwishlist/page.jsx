import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen flex gap-10 flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Book Whishlist</h1>
      <ul className="space-y-3">
        <li className="w-96 font-medium text-sm px-2 py-1.5 flex justify-between rounded-md bg-slate-100">
          The Little prince <span>N4,500</span>
        </li>
        <li className="w-96 font-medium text-sm p-1.5 flex justify-between rounded-md bg-slate-100">
          Nigeria and its criminal justice system <span>N7,000</span>
        </li>
        <li className="w-96 font-medium text-sm p-1.5 flex justify-between rounded-md bg-slate-100">
          The Kite runner <span>N5,500</span>
        </li>
      </ul>
      <button className="bg-blue-100 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-200">
        Add Book
      </button>
    </div>
  );
};

export default page;
