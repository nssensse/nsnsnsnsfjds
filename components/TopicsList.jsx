import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import "../app/globals.scss";
const getTopics = async () => {
  const apiUrl=process.env.API_URL;
  try {
    const res = await fetch(`${apiUrl}/api/topics`, {
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
    <meta http-equiv="refresh" content="15" ></meta>

      <table id="table_fixed2">
        <thead>
          <tr>
            <th>Slot Name</th>
            <th>Bonus Cost</th>
            <th>Bonus Win</th>
          </tr>
        </thead>
      </table>
      <table id="table_fixed">
        <thead>
          <tr>
            <th>🎰{keyCount}</th>
            <th>💰{totalAmount} </th>
            <th>🏆{wintotalAmount} </th>
          </tr>
        </thead>
      </table>

      {topics.map((t) => (
        
        <div key={t._id} className="flex">
          <div className='grid grid-cols-3 scrolling-message'>
            <div className="textout">{t.title}</div>
            <div className="textout">{t.description +"₽"}</div>
            <div className="textout">{t.winning +"₽"}</div>
          </div>
          <div className="pl-80 h-6 grid grid-cols-2 gap-40 text-[#edeef0] text-xl font-bold box2">
            <div className="">{t.title}</div>
            <div className="">
            <RemoveBtn id={t._id} />
              <Link href={`/editTopic/${t._id}`}>
                <HiPencilAlt size={18} />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
