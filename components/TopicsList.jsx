import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt,HiGift,HiCurrencyDollar,HiOutlineChartPie,HiOutlineFastForward,HiFire ,HiViewList,HiOutlineDatabase,HiX} from "react-icons/hi";
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

 
  ///////////  ///////////  ///////////  ///////////  ///////////  ///////////  ///////////  ///////////  ///////////  ///////////  ///////////  ///////////  ///////////  ///////////
  let suum=12;
  let sum = (a) => a.reduce((x, y) => x + y);
  let totalAmount = sum(topics.map((x) => Number(x.winning)));
  
  let profit = (a) => a.reduce((x, y) => x + y);
  let  totalprofit= profit(topics.map((x) => Number(x.description)));





  function countObjectsWithNegativeOrEmptyWinning(data) {
    let count = 0;
  
    for (const obj of data) {
      // Проверяем, является ли поле winning пустым или меньшим нуля
      if (obj.winning || parseInt(obj.winning) > 0) {
        count++;
      }
    }
  
    return count;
  }
  
  const result = countObjectsWithNegativeOrEmptyWinning(topics);
  ///////////
  function findNearestObjectWithEmptyValue(users, key) {
    let nearestObject = null;
    let distance = Infinity;
  
    for (let i = 0; i < users.length; i++) {
      const object = users[i];
      if (object.hasOwnProperty(key) && object[key] == 0) {
        const currentDistance = Math.abs(i - users.indexOf(object));
        if (currentDistance < distance) {
          distance = currentDistance;
          nearestObject = object;
        }
      }
    }
  
    return nearestObject;
  }
  const nearestObject = findNearestObjectWithEmptyValue(topics, "winning");
 
 
 
 const min = 0;
 const max = 570;
 
 // Clamp number between two values with the following line:
 const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
 
 clamp(-50, min, max); // Will return: 0
 clamp(50, min, max);  // Will return: 50
 let progrbaar;
 progrbaar=clamp(totalAmount/totalprofit*550, min, 570); // Will return: 100
  ///////////
  function changeColor(value) {
    // Нормализуем значение в диапазоне от 0 до 1
    var normalizedValue = (value - 0) / (570 - 0);
    
    // Используем градиент от красного к зеленому
    var red = Math.floor(235 * (1 - normalizedValue));
    var green = Math.floor(180 * normalizedValue);
    
    // Формируем CSS цвет в формате RGB
    var color = 'rgba(' + red + ',' + green + ',0,0.25)';
    return color;
}
let color1=changeColor(progrbaar);
  const firstObjectWithEmptyWinning = topics.find(obj => !obj.winning);

// Извлекаем title первого объекта с пустым winning
const titleOfFirstObjectWithEmptyWinning = firstObjectWithEmptyWinning ? firstObjectWithEmptyWinning.title : null;
const titleOfFirstObjectWithEmptyWinning21 = firstObjectWithEmptyWinning ? firstObjectWithEmptyWinning.description : null;
  ///////////
  const objectWithMaxWinning = topics.reduce((max, obj) => (parseInt(obj.winning) > parseInt(max.winning) ? obj : max), topics[0]);

// Извлекаем title объекта с наибольшим winning
const titleOfObjectWithMaxWinning = objectWithMaxWinning.title;

const titleOfObjectWithMaxWinning1 = objectWithMaxWinning.description;
const maxWinning = Math.max(...topics.map(user => parseInt(user.winning) || 0));
 ///////////  ///////////  ///////////  ///////////  ///////////  ///////////  ///////////  ///////////  ///////////  ///////////  ///////////  ///////////  ///////////  ///////////  
  ///////////
  
  return (
    <>


      <>
      <meta http-equiv="refresh" content="11"></meta>
        <div className="contcont nft">
          <div className="main-header">
            <div className="header-info">
              <div className="bbtittle">
                <div className="pic-logo"></div>
                <ul className="aff">BONUSBUY</ul>
              </div>
              <div className="topslot"><HiFire size={26}style={{ marginBottom: "-5px" }} /> {titleOfObjectWithMaxWinning1}{titleOfObjectWithMaxWinning1?"₽ | ":""}{titleOfObjectWithMaxWinning}</div>
              <div className="nowslot"><HiOutlineFastForward size={26}style={{ marginBottom: "-5px" }} /> {titleOfFirstObjectWithEmptyWinning21}{titleOfFirstObjectWithEmptyWinning21?"₽ | ":""}{titleOfFirstObjectWithEmptyWinning}</div>
              
              <table id="table_fixed">
                <thead>
                  <tr>
                    <th>Balance</th>
                    <th style={{ textAlign: 'right' }}>{totalprofit} <HiCurrencyDollar size={26}style={{ marginBottom: "-5px" }} /></th>
                  </tr>
                  <tr>
                    <th>Bonuses</th>
                    <th style={{ textAlign: 'right' }}> {result}/{topics.length} <HiGift size={26}style={{ marginBottom: "-5px" }} /></th>
                    
                  </tr>
                  <tr>
                    <th>Profit</th>
                    <th style={{ textAlign: 'right' }}> {(totalAmount-totalprofit)>0?(totalAmount-totalprofit):(totalAmount-totalprofit)} <HiOutlineDatabase size={26}style={{ marginBottom: "-5px" }} /></th>
                  </tr>
                  <tr>
                    <th>Status</th>
                    <th style={{ textAlign: 'right' }}>{(totalAmount/totalprofit).toFixed(1)}x <HiX size={26}style={{ marginBottom: "-6px" }} /></th>
                  </tr>
    
                </thead>
              </table>
            </div>
          </div>

          <table className="table tbdsfsd">
            <thead className="thead-dark1"> 
              <tr>
                <th width="10px"></th>
                <th style={{textAlign: 'left'}} width="550px">Slot name</th>
                <th width="30px">Bonus cost</th>
                <th width="40px">Bonus win</th>

              </tr>
            </thead>

            <tbody>
  
              {/* Add your user table here */}
              {topics.map((user, index) => (
                
  <tr key={index} className={topics.length > 10 ? 'tech-slideshow' : ''}>
    <td>{index + 1}.</td>
    <td style={{textAlign: 'left'}}>{user.title}</td>
    <td>{user.description}₽</td>
    <td>{user.winning}₽</td>
  </tr>
))}

            </tbody>
          </table>
          
          <div className="container-bar">       
            <div className="progress2 progress-moved">
            <div style={{ width: `${progrbaar}px`,background: `${color1}` }} className="progress-bar2">  </div>
            <div className="valueokyp">Bonusbuy winning {totalAmount}₽</div>
            </div>
          </div>
        </div>
      </>

    </>
  );
}