"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "../app/globals.scss";
import RemoveBtn from "./RemoveBtn";
export default function EditTopicForm({ id, title, description ,winning}) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newWinning, setNewWinning] = useState(winning);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    router.refresh();
    try {
      const res = await fetch(`/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription,newWinning }),
      });

      if (!res.ok) {
        throw new Error("Failed to update bonus");
      }
      router.refresh();
      router.push("/");
      refreshPage();
    } catch (error) {
      console.log(error);
    }
  };
  return (

    <form onSubmit={handleSubmit} className="flex flex-col gap-3 editheader">
                 
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="bonus name"
      />

      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="bonus price"
      />
      <input
        onChange={(e) => setNewWinning(e.target.value) }
        value={newWinning}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="winning"
      />
      

      <button className="bg-black font-bold text-white py-3 px-6 w-fit">
        Update Bonus
      </button>
    </form>
  );
}
