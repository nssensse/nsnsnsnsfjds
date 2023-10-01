import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import "../app/globals.scss";
import { stringify } from "postcss";
const getTopics = async () => {
  const apiUrl = process.env.API_URL;
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
function findElementWithWinningValue(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i.winning] === "") {
      return arr[i];
    }
  }
  return null; // Если нихера нету
}

export default async function TopicsList() {
  const { topics } = await getTopics();
  var keyCount = Object.keys(topics).length;
  var topics1 = Object.keys(topics);
  var a = topics1;
  var b = a.map(function (item) {
    return parseFloat(item);
  });
  

  var obj = topics;
  var last = Object.keys(obj).pop();
  console.log(last);
  console.log(obj[last]);

 

  let sum = (a) => a.reduce((x, y) => x + y);
  let totalAmount = sum(topics.map((x) => Number(x.description)));

  let sumwin = (a) => a.reduce((x, y) => x + y);
  let wintotalAmount = sum(topics.map((x) => Number(x.winning)));
  var variable = 1;
  if (keyCount > 6) {
    variable = 0;
  } else {
    variable = 1;
  }

const func1 = () => {
  const name = document.getElementById("name").value;
  const lastname = document.getElementById("lastname").value;
  const link = document.getElementById("link").value;
  console.log(`Name: ${name}\nLast Name: ${lastname}\n Link: ${link}`)
}
function calc(){
  const a = Number(document.getElementById('inpa').value);
  const b = Number(document.getElementById('inpb').value);
  alert(a+b);
}
  return (
    <>
    
      <table id="table_fixed2">
        
        <thead>
          <tr>
            <th className="border-left">Slot Name</th>
            <th>Bonus Cost</th>
            <th className="border-right">Bonus Win</th>
          </tr>
        </thead>
      </table>
      <table id="table_fixed">
        <thead>
          <tr>
            <th className="border-left">{keyCount} 🎁</th>
            <th>{totalAmount} 💰</th>
            <th className="border-right">{wintotalAmount} 🏆</th>
          </tr>
        </thead>
      </table>

      {topics.map((t) => (
        <div key={t._id} className="flex">
          <div
            className={
              variable
                ? "grid grid-cols-3 defaultgrid"
                : "grid grid-cols-3 scrolling-message"
            }
          >
            <meta http-equiv="refresh" content="10"></meta>
            <div className="textout">{t.title}</div>
            <div className="textout">{t.description + "₽"}</div>
            <div className="textout">{t.winning + "₽"}</div>
          </div>
          <div className="pl-80 grid grid-cols-2 gap-40 text-[#edeef0] text-xl font-bold box2">
            <div className="">{t.title}</div>
            <div className="">
              <RemoveBtn id={t._id} />
              
              <Link href={`/editTopic/${t._id}`}>
                <HiPencilAlt size={19} />
              </Link>
            </div>
          </div>
        </div>
      ))}
      <table id="table_fixed3">
        <thead>
          <tr>
          <th className="textout">{}</th>
          </tr>
        </thead>
      </table>




    </>
  );
}
