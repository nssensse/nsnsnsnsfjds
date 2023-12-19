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
  if (keyCount > 8) {
    variable = 0;
  } else {
    variable = 1;
  }
  let variabledval=1;
  if (keyCount > 12) {
    variabledval = 0;
  } else {
    variabledval = 1;
  }

  let symb="";
  if((wintotalAmount-totalAmount)>0)
  symb="⬈";
 else
 symb="⬊";
  
  return (
    <>
    <meta http-equiv="refresh" content="25"></meta>

 
    <table id="table_fixed">
      
        <thead>
          <tr>
          <th className="border-left leften">Number of bonus</th>
            <th className="border-left righten"> {keyCount} 🎲</th>
          </tr>
          <tr>
          <th className="border-left leften">Cost of bonuses</th>
            <th className="border-left righten"> {totalAmount} 🔘</th>
          </tr>
          <tr>
          <th className="border-left leften">Bonus buy status</th>
            <th className="border-left righten"> {wintotalAmount-totalAmount} {symb}</th>
          </tr>
        </thead>
      </table>
      <table id="table_fixed2">
         
        
        <thead>
          <tr>
            <th className="border-left">Slot Name</th>
            <th>Bonus Cost</th>
            <th>Bonus Win</th>
            <th className="border-right">Chatter</th>
          </tr>
        </thead>
      </table>
      <div className="listbox">
      
      </div>

      {topics.map((t) => (
        
        <div key={t._id} className="flex downed">
          <div
            className={ variabledval?
              (variable
                ? "grid grid-cols-5 defaultgrid downed"
                : "grid grid-cols-5 scrolling-message downed"):(variable
                  ? "grid grid-cols-5 defaultgrid downed"
                  : "grid grid-cols-5 scrolling-message2 downed")
            }
          >

            <div className="textout slname">{t.title}</div>
            <div className="textout otherr">{t.description +"₽" }</div>
            <div  className={((parseInt(t.winning)>parseInt(t.description))&&parseInt(t.winning)>0)?"okyp textout pads":"nokyp textout otherr pads"}>{(t.winning)? (t.winning+ "₽"):("–––––")}<div className={"textout2"}>{(t.winning/(t.description/100)).toFixed(0)+"x"}</div></div>
            <div className="textout chattername otherr">{t.chatter}</div>
          </div>
          <div className="ml-80 grid grid-cols-4 gap-60 text-[#edeef0] text-xl font-bold box2">
            <div className="">{t.title}|{t.chatter}</div>
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