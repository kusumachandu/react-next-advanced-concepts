/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

export default function Card({ title, author, date, image, content }) {
  return (
    <div className="w-[300px] min-h-[350px] border rounded-lg bg-slate-500 text-slate-100">
      <div className="w-full h-[200px]">
        <img
          className="w-[100%] h-[100%] rounded-t-lg"
          src={image}
          alt="image"
        />
      </div>
      <div className="px-2 py-4">
        <div className="w-1/2 py-1 rounded-2xl bg-red-400">
          <p className="text-gray-700 font-semibold">{author}</p>
        </div>
        <div className="text-left py-2">
          <h1 className="font-bold text-lg">{title}</h1>
        </div>
        <div className="text-left pb-2">
          <p className="font-semibold text-gray-300">{date}</p>
        </div>
        <div className="text-left">
          <p className="text-gray-900">{content}</p>
        </div>
      </div>
    </div>
  );
}
