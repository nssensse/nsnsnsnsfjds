import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import "../app/globals.scss";

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

    <main className="main">
      <>
      <meta http-equiv="refresh" content="11"></meta>
        <div className="contcont">
          <div className="main-header">
            <div className="header-info">
              <div className="bbtittle">
                <div className="pic-logo"></div>
                <ul className="aff">BONUSBUY</ul>
              </div>
              <div className="nowslot">⭐ </div>
              <div className="topslot">🏆</div>
              <table id="table_fixed">
                <thead>
                  <tr>
                    <th>Balance</th>
                    <th style={{ textAlign: 'right' }}>{}💰</th>
                  </tr>
                  <tr>
                    <th>Bonuses</th>
                    <th style={{ textAlign: 'right' }}> {}/{}🎁</th>
                  </tr>
                  <tr>
                    <th>Profit</th>
                    <th style={{ textAlign: 'right' }}> 1</th>
                  </tr>
                  <tr>
                    <th>Status</th>
                    <th style={{ textAlign: 'right' }}>x📋</th>
                  </tr>
                  <tr>
                    <th>Status</th>
                    <th style={{ textAlign: 'right' }}>x📋</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>

          <table className="table tbdsfsd">
            <thead className="thead-dark"> 
              <tr>
                <th width="10px"></th>
                <th width="350px">Slot name</th>
                <th width="30px">Bonus cost</th>
                <th width="40px">Bonus win</th>
              </tr>
            </thead>

            <tbody>
  
              {/* Add your user table here */}
              {topics.map((user, index) => (
                
  <tr key={index} className={topics.length > 10 ? 'tech-slideshow' : ''}>
    <td>{index + 1}.</td>
    <td>{user.title}</td>
    <td>{user.description}₽</td>
    <td>{user.winning}₽</td>
  </tr>
))}

            </tbody>
          </table>
          <div className="container-bar">
            <div className="progress2 progress-moved">
              <div  className="progress-bar2"></div>
            </div>
          </div>
        </div>
      </>
    </main>
    </>
  );
}