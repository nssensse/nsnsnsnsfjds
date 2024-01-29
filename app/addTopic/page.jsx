"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import RemoveBtn from "/components/RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

function refreshPage() {
  window.location.reload();
}

async function createTopic({ title, description, winning, chatter }) {
  try {
    const res = await fetch("/api/topics", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ title, description, winning, chatter }),
    });

    if (res.ok) {
      return true;
    } else {
      throw new Error("Failed to create a topic");
    }
  } catch (error) {
    console.log(error);
    return false;
  }
}

const getTopics = async () => {
  const apiUrl = process.env.API_URL;
  try {
    const res = await fetch("/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch topics. Status: ${res.status}`);
    }

    const data = await res.json();

    if (!data || !data.topics) {
      throw new Error("Response data or topics property is undefined");
    }

    return data;
  } catch (error) {
    console.error("Error loading topics: ", error);
    throw error;
  }
};

export default function Toplist() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [winning, setWinning] = useState("");
  const [chatter, setChatter] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    router.refresh();
    if (!title || !description ) {
      alert("Title and description are required and win.");
      return;
    }

    try {
      const res = await fetch("/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description ,winning,chatter}),
      });
      
      if (res.ok) {
        
        router.refresh();
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const [topics, setTopics] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const { topics } = await getTopics();
      setTopics(topics);
    };

    fetchData();
  }, [router]);

  var keyCount = Object.keys(topics).length;


  return (
    <>
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 formpad">
      
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="slot name"
      />

      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="bonus price"
      />
            <input
        onChange={(e) => setChatter(e.target.value)}
        value={chatter}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="chatter"
      />


      <button
        type="submit"
        className="updbutton font-bold text-white py-3 px-6"
      >
        Add Bonus
      </button>
    </form>
      <meta http-equiv="refresh" content="25"></meta>
      <div className="listbox"></div>

      {topics.map((t) => (
        <div key={t._id} className="flex downed">
          <div
            className={
    "grid grid-cols-5 scrolling-message2 downed"
            }
          >
            <div className="textout slname">{t.title}</div>
            <div className="textout otherr">{t.description + "₽"}</div>

            <div className="textout chattername otherr">{t.chatter}</div>
          </div>
          <div className="ml-80 grid grid-cols-4 gap-60 text-[#edeef0] text-xl font-bold box2">
            <div className="">
              {t.title}|{t.chatter}
            </div>
            <div className="">
            <RemoveBtn id={t._id} />
              <Link href={`/editTopic/${t._id}`}>
                <HiPencilAlt size={19} />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}