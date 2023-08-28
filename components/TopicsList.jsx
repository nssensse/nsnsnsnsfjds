import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import "../app/globals.scss";
const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default async function TopicsList() {
  const { topics } = await getTopics();
  var keyCount = Object.keys(topics).length;
  var topics1 = Object.keys(topics);
  var a = topics1;
  var b = a.map(function (item) {
    return parseFloat(item);
  });

     
   let sum = a => a.reduce((x, y) => x + y);
     
   let totalAmount = sum(topics.map(x => Number(x.description)));

   let sumwin = a => a.reduce((x, y) => x + y);
     
   let wintotalAmount = sum(topics.map(x => Number(x.winning)));
  return (
    <>
      <table id="table_fixed">
        <thead>
          <tr>
            <th>💎{keyCount}💎</th>
            <th>💰 {totalAmount}💰</th>
            <th>🏆{wintotalAmount}🏆 </th>
          </tr>
        </thead>
      </table>
      <table id="table_fixed2">
        <thead>
          <tr>
            <th>Slot Name</th>
            <th>Bonus Cost</th>
            <th>Bonus Win</th>
          </tr>
        </thead>
      </table>

      {topics.map((t) => (
        <div key={t._id} className="p-2 flex justify-between items-start">
          <div className="pl-10 grid grid-cols-3 my-2 flex text-[#edeef0] scrolling-message">
            <div className="textout">{t.title}</div>
            <div className="textout">{t.description + ".₽"}</div>
            <div className="textout">{t.winning + ".₽"}</div>
          </div>
          <div className="pl-80 h-6 grid grid-cols-4 gap-40 text-[#edeef0] text-xl text-gray-300 font-bold box2">
            <div className="">{t.title}</div>
            <div className="">
              <Link href={`/editTopic/${t._id}`}>
                <HiPencilAlt size={20} />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}