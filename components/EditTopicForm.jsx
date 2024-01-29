"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "../app/globals.scss";
import RemoveBtn from "./RemoveBtn";
export default function EditTopicForm({ id, title, description ,winning,chatter}) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newWinning, setNewWinning] = useState(winning);
  const [newChatter, setNewChatter] = useState(chatter);
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
        body: JSON.stringify({ newTitle, newDescription,newWinning,newChatter }),
      });

      if (!res.ok) {
        throw new Error("Failed to update bonus");
      }
      router.refresh();
      router.push("/addTopic");
      refreshPage();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
    <form onSubmit={handleSubmit} className="form-group">
                 
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className="form-group"
        type="text"
        placeholder="bonus name"
      />

      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        className="form-group"
        type="text"
        placeholder="bonus price"
      />
      <input
        onChange={(e) => setNewWinning(e.target.value) }
        value={newWinning}
        className="form-group"
        type="text"
        placeholder="winning"
      />
            <input
        onChange={(e) => setNewChatter(e.target.value) }
        value={newChatter}
        className="form-group"
        type="text"
        placeholder="chatter"
      />
      

      <button className="btn text-dark update">
        Update Bonus
      </button>
    </form>
    </div>
  );
}
