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

/*
<div id="loginForm1">

<br></br>
<input placeholder="Введите пароль:" className="form-group1" type="password" id="password" />
<br></br>
<button className="btn text-dark update" onClick={checkPassword}>Войти</button>
</div>*/
const correctPassword = "pupupu";

function checkPassword() {
  const passwordInput = document.getElementById("password");
  const protectedArea = document.getElementById("protectedArea");
  if (passwordInput.value === correctPassword) {
    passwordInput.value = "";
    document.getElementById("loginForm").style.display = "none";
    protectedArea.style.display = "block";
  } else {
    alert("Неверный пароль! Попробуйте еще раз.");
  }
}

export default function Toplist() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [winning, setWinning] = useState("");
  const [chatter, setChatter] = useState("");
  const [suggestions, setSuggestions] = useState([
    "Christmas Big Bass Bonanz...",
    "Pragmatic Play",
    "Eye of the Panda",
    "HacksawGaming",
    "Boss Bear",
    "Push Gaming",
    "In Jazz",
    "Endorphina",
    "Top Dawg$",
    "Relax Gaming",
    "The Dog House Multihold",
    "Mega Heist",
    "Drop'em",
    "Cleocatra",
    "Royal Xmass 2",
    "Fortune of Giza",
    "Stormforged",
    "Wild West Gold",
    "Gates of Olympus 1000",
    "Bigger Bass Bonanza",
    "Xmas Drop",
    "Starlight Princess 1000",
    "Midas Golden Touch Christ...",
    "Thunderkick",
    "Big Bass Christmas Bash",
    "Zeus vs Hades - Gods of W...",
    "Money Train 3",
    "ITERO",
    "The Dog House Megaways",
    "Net Gains",
    "Sugar Rush Xmas",
    "Santa’s Puzzle",
    "Starlight Christmas",
    "Candy Jar Clusters™",
    "Bigger Bass Blizzard - Ch...",
    "Road Rage",
    "Nolimit City",
    "The Crypt",
    "RIP City",
    "Hellapeños",
    "Jingle Balls",
    "Sweet Bonanza Xmas",
    "DJ Fox",
    "Aussies vs Emus",
    "San Quentin xWays",
    "Folsom Prison",
    "Dark Summoning",
    "Release the Kraken 2",
    "Bounty Hunters",
    "Sweet Powernudge",
    "Candy Blitz",
    "Rotten",
    "Gates of Olympus",
    "Shark Wash",
    "Twerk",
    "Fireborn",
    "Sword of Ares",
    "King Carrot",
    "Lucky Streak 3",
    "Wild Chapo 2",
    "Wanted Dead or a Wild",
    "Sky Bounty",
    "Bones & Bounty",
    "Pink Elephants 2 – Reborn",
    "Dino P.D.",
    "Zap Attack!",
    "Almighty Sparta",
    "Book of Time",
    "John Hunter and the Book ...",
    "Horror Hotel",
    "Big Bass Splash",
    "Devil’s Crossroad",
    "Pine of Plinko 2",
    "Goat Getter",
    "Floating Dragon New Year ...",
    "Santa's Wonderland",
    "Fat Banker",
    "Feel The Beat",
    "Blade Master",
    "Banana Town",
    "Jammin Jars",
    "Juicy Fruits Multihold",
    "Santa's Great Gifts",
    "Blade & Fangs",
    "Loki’s Riches",
    "Jewel Rush",
    "Hellcatraz",
    "Bill & Coin",
    "Fire Stampede",
    "The Big Dawgs",
    "Castle of Fire",
    "2 Wild 2 Die",
    "Toshi Video Club",
    "Blazing Wilds Megaways",
    "Land of the Free",
    "Good Luck & Good Fortune",
    "Hot Puzzle",
    "Year of the Dragon King",
    "Royal Xmass Dice",
    "Big Bamboo",
    "Time Spinners",
    "Mongol Treasures",
    "Pug Life",
    "Joker Split",
    "Book of Santa",
    "The Vampires II",
    "Titan Strike",
    "Cursed Seas",
    "Chaos Crew II",
    "Money Train 4",
    "Razor Returns",
    "Minotaurus",
    "Deadwood",
    "Mental",
    "Iron Bank",
    "Densho",
    "Sugar Supreme Powernudge",
    "Lure of Fortune",
    "Retro Tapes",
    "Dork Unit",
    "Das xBoot",
    "Release the Kraken",
    "Fire Hopper",
    "The Wildos",
    "Gladiator Legends",
    "Twilight Princess",
    "Great Pigsby Megaways",
    "Pyramyth – Reborn",
    "Wild West Gold Megaways",
    "Hot Fiesta",
    "Stack 'Em",
    "Mad Cars",
    "Misery Mining",
    "Midas Golden Touch – Rebo...",
    "10 Swords",
    "Madame Destiny Megaways",
    "Big Bass Bonanza",
    "Sword of Khans",
    "Starlight Princess",
    "Disturbed",
    "The Dog House",
    "Giga Jar",
    "Floating Dragon Hold & Sp...",
    "Joker Ra",
    "Mystery Museum",
    "Sweet Bonanza",
    "Fire In The Hole xBomb",
    "Hand of Anubis",
    "Deadly 5",
    "Fish ‘n’ Nudge",
    "Slotomoji",
    "Jammin' Jars 2",
    "Midnight Marauder",
    "Beast Below",
    "Dinopolis",
    "Hot Potato!",
    "Razor Shark",
    "Serial",
    "Cyber Wolf",
    "The Dog House Dice Show",
    "Immortal Desire",
    "Gluttony!",
    "Rex the Hunt!",
    "Gravity Bonanza",
    "Fat Santa",
    "Geisha",
    "The Hand of Midas",
    "Benny the Beer",
    "Roadkill",
    "Torii Tumble",
    "Big Bass Hold & Spinner M...",
    "Red Cap",
    "The Cage",
    "Crystal Catcher",
    "Gods of Rock! – Reborn",
    "The Bowery Boys",
    "Fruit Party",
    "Money Train 2",
    "Floating Dragon - Dragon ...",
    "Rat King",
    "The Wild Gang",
    "Temple of Torment",
    "Sugar Rush",
    "Lord of the Seas",
    "xWays Hoarder xSplit",
    "Book of Vlad",
    "Tombstone R.I.P",
    "Monster Superlanche",
    "Curse of the Werewolf Meg...",
    "Taboo",
    "Big Bass - Hold & Spinner...",
    "Cluster Tumble",
    "Fury of Odin Megaways",
    "Sword of Shoguns",
    "True Grit Redemption",
    "Fat Drac",
    "Dead Riders Trail",
    "Nile Fortune",
    "Le Bandit",
    "Pirates Pub",
    "Wisdom of Athena",
    "5 Frozen Charms Megaways",
    "Mafia Clash",
    "Darkness",
    "Mayan Stackways",
    "Karen Maneater",
    "Dead Canary",
    "Hell Hot 100",
    "Bison Battle",
    "Timber Stacks",
    "21 Thor Lightning Ways",
    "Abrakadabra",
    "Kiss My Chainsaw",
    "Esqueleto Explosivo 2- Re...",
    "Royal Potato 2",
    "Fruit Party 2",
    "True Kult",
    "Benji Killed In Vegas",
    "Spellbinding Mystery",
    "Outlaws Inc.",
    "Book of Shadows",
    "Floating Dragon",
    "Bloodaxe",
    "Napoleon vs Rabbits",
    "Big Bass Bonanza - Keepin...",
    "Book of Power",
    "Ugliest Catch",
    "Shinobi Spirit",
    "Fear the Dark",
    "Legion X",
    "Wild Yield",
    "Tundra’s Fortune",
    "Tombstone",
    "Book of Fallen",
    "Mochimon",
    "Holy Hand Grenade",
    "Infective Wild",
    "Big Bass Amazon Xtreme",
    "Temple Tumble",
    "Bloodthirst",
    "Dia de Los Muertos 2",
    "PIZZA! PIZZA? PIZZA!",
    "Dead Man's Trail",
    "Nine To Five",
    "Voodoo",
    "Forge of Olympus",
    "Space Donkey",
    "Diamond Cascade",
    "Cyclops Smash",
    "Gates of Valhalla",
    "Mystic Spells",
    "Excalibur Unleashed",
    "Book of Lady",
    "Mighty Masks",
    "Wolf Gold",
    "Rocket Reels",
    "Xpander",
    "Generous Jack",
    "Ronin Stackways",
    "Mystery Stacks",
    "Power of Merlin Megaways",
    "Viking Forge",
    "Piggy Bankers",
    "Evil Goblins xBomb",
    "Wild Hop & Drop",
    "Grand Melee",
    "Warrior Ways",
    "Big Bass Bonanza Megaways",
    "Sweet Bonanza Dice",
    "Buffalo King Megaways",
    "Wild Hike",
    "Cash Defense",
    "Hop'n'Pop",
    "Extra Juicy MEGAWAYS",
    "Pinup Girls",
    "Demon Pots",
    "Mammoth Gold Megaways",
    "Wild Wild Riches",
    "Chaos Crew",
    "Knight Hot Spotz",
    "Cyber Wolf Dice",
    "Big Bass Halloween",
    "Cash Chips",
    "The Money Men Megaways",
    "Cubes 2",
    "Templar Tumble",
    "Lucky Cloverland",
    "Sloth Tumble",
    "Rocket Blast Megaways",
    "Commander of Tridents",
    "Magic Piggy",
    "Gold Oasis",
    "Heist for the Golden Nugg...",
    "Power of Thor Megaways",
    "5 Lions Megaways",
    "Sticky Bees",
    "2023 Hit Slot",
    "Frozen Tropics",
    "Chase for Glory",
    "Rainbow Reels",
    "Fortunes of Aztec",
    "Hellvis Wild",
    "Lord Venom",
    "Booty Bay",
    "Magikspell",
    "Mystery Stacks Deluxe",
    "Undead Fortune",
    "Gods of Giza",
    "Joker Loot",
    "Vending Machine",
    "Goblin Heist Powernudge",
    "Hot Rod Racers",
    "Phoenix Up Cash",
    "Punk Rocker xWays",
    "The Emirate II",
    "Kingdom of the Dead",
    "Terracotta Army",
    "Mustang Trail",
    "Harvest Wilds",
    "Buffalo Stack'n'Sync",
    "Stick'em",
    "Fire Strike 2",
    "Chilli Heat MEGAWAYS",
    "Royal Xmass",
    "Fishin Reels",
    "Wild Wild Riches Megaways",
    "Hot Pepper",
    "Fresh Crush",
    "5 Doggy Dollars",
    "Country Farming",
    "Urartu",
    "Wild Beach Party",
    "Safari Sun",
    "3 Buzzing Wilds",
    "Punk Toilet",
    "Wild Bison Charge",
    "Jiggly Cash",
    "Beat the Beast: Griffin's...",
    "Cash Quest",
    "Looney Pop",
    "Legendary Sumo",
    "DJ Psycho",
    "Joker's Jewels",
    "Samarkand's Gold",
    "Rich Raptors",
    "Baron Bloodmore and the C...",
    "Yum Yum Powerways",
    "The Border",
    "Lamp Of Infinity",
    "Sleepy Grandpa",
    "Pearl Harbor",
    "Wild Celebrity Bus Megawa...",
    "Ultra Fresh",
    "Book of Oil",
    "Whacked!",
    "Green Slot",
    "Cubes",
    "Peak Power",
    "Infectious 5 xWays",
    "Great Rhino Deluxe",
    "Chance Machine 5 Dice",
    "The Rave",
    "Pub Kings",
    "Royal Potato",
    "Fat Panda",
    "The Red Queen",
    "Barbarian Fury",
    "9k Kong in Vegas",
    "Jane Hunter and the Mask ...",
    "Hell Hot 20",
    "8 Golden Dragon Challenge",
    "Lobster Bob's Crazy Crab ...",
    "Silk Road",
    "Hi-Lo",
    "Late Night Win",
    "Argonauts",
    "Lucky Streak X",
    "Gronk's Gems",
    "El Paso Gunfight xNudge",
    "Tiki Bonanza",
    "Warrior Graveyard xNudge",
    "Snakes & Ladders - Snake ...",
    "Diamonds of Egypt",
    "Break Bones",
    "Gems Bonanza",
    "Cash Patrol",
    "Cash Bonanza",
    "Rock Bottom",
    "Cash Box",
    "Mystery Mission - To The ...",
    "Money Cart 3",
    "Multistar Fruits",
    "Walk Of Shame",
    "Beast Mode",
    "Nightfall",
    "Wild Streak",
    "Fish Eye",
    "Space Stacks",
    "Clover Gold",
    "Candy Stars",
    "Bushido Ways xNudge",
    "Blue Slot",
    "Rabbit Garden™",
    "Blaze of Ra",
    "Joker Stoker",
    "Divine Lotus",
    "Reapers",
    "Wild Wild Bananas",
    "Spring Heeled Jack",
    "Lost City of the Djinn",
    "Leprechaun Heist",
    "Keep 'em Cool",
    "Magic Money Maze",
    "Crystal Skull",
    "Ice Ice Yeti",
    "Tomb of Akhenaten",
    "Midas Golden Touch",
    "Cash Streak",
    "Pyramyth",
    "Rabbits Rabbits Rabbits",
    "Dynamite Miner",
    "Day of Dead",
    "Muertos Multiplier Megawa...",
    "Cash Compass",
    "Eye of Cleopatra",
    "The Wild Machine",
    "Santa’s Gift",
    "Gaelic Gold",
    "Huntress Wild Vengeance",
    "Gems of Serengeti",
    "Snake Arena",
    "Secret City Gold",
    "Remember Gulag",
    "Golden Genie and the Walk...",
    "Gods of Rock",
    "Mongol Treasures II: Arch...",
    "Ramses Revenge",
    "Spin & Score Megaways",
    "Towering Fortunes",
    "Heroes Hunt 2",
    "Fire Archer",
    "Dragon Hero",
    "Riches Of Caliph",
    "Greedy Wolf",
    "Little Bighorn",
    "Rooster Fury",
    "Football: 2022",
    "King of Ghosts",
    "Mount Magmas",
    "Phoenix Paradise",
    "Shield Of Sparta",
    "Giant Wild Goose Pagoda",
    "Aztec Blaze",
    "East Coast vs West Coast",
    "Voodoo Magic",
    "Wild Chapo",
    "Pink Elephants 2",
    "Wheel of Wonders",
    "Beat the Beast: Mighty Sp...",
    "Juicy Fruits",
    "TNT Tumble",
    "Babushkas",
    "Big Fin Bay",
    "Money Train",
    "Mustang Gold",
    "Rock Vegas",
    "2022 Hit Slot",
    "Ticket to Fortune",
    "3 Dancing Monkeys",
    "Gorilla Mayhem",
    "Club Tropicana",
    "Born Wild",
    "Fruit Duel",
    "Tasty Treats",
    "Triple Christmas Gold",
    "Water Tiger",
    "Flame Busters",
    "Jin Chan's Pond of Riches",
    "African Elephant",
    "The Knight King",
    "Octobeer Fortunes",
    "John Hunter and the Aztec...",
    "Lumber Jack",
    "Fisher King",
    "Madame Destiny",
    "Lava Lava",
    "Otterly Amazing",
    "Alpha Eagle",
    "Hot 4 Cash",
    "Reel Banks",
    "Fat Rabbit",
    "Land of Zenith",
    "Colossal Cash Zone",
    "Bomb Bonanza",
    "Daruma's Wealth",
    "The Rise of AI",
    "Dragon Horn",
    "Fortune Llama",
    "Ding Dong Christmas Bells",
    "Jasmine Dreams",
    "Cowboy Coins",
    "Wild West Duels",
    "Snakes and Ladders Megadi...",
    "Drill That Gold",
    "Glory of Egypt",
    "Blood and Shadow",
    "2023 Hit Slot Dice",
    "Kamchatka",
    "Chip Spin",
    "Hot to Burn Hold and Spin",
    "Crystal Caverns MEGAWAYS",
    "Hex",
    "Zombie Carnival",
    "Akbar Birbal",
    "Medallion Megaways",
    "Odin´s Gamble Mímirs Well",
    "Pink Elephants",
    "Tower Tumble",
    "North Guardians",
    "Mystery Motel",
    "Esqueleto Explosivo 2",
    "Hazakura Ways",
    "Cash Tank",
    "5 Monsters",
    "Super X",
    "Joker's Jewels Dice",
    "Aztec Twist",
    "Forest Fortune",
    "Frutz",
    "Joker Bombs",
    "Miami Multiplier",
    "The Emirate",
    "Leprechaun Carol",
    "Book of Golden Sands",
    "The Ultimate 5",
    "Chicken Chase",
    "Down the Rails",
    "Buffalo Hunter",
    "Might of Ra",
    "Cosmic Cash",
    "Tropical Tiki",
    "Hot Nudge",
    "Shifting Seas",
    "Crystal Quest: Frostlands",
    "Hot To Burn Extreme",
    "Monkey's Gold xPays",
    "Tractor Beam",
    "Rise of Giza PowerNudge",
    "Super 7s",
    "Mysterious Egypt",
    "Magician's Secrets",
    "Fruletta",
    "Wild Love",
    "Black Bull",
    "Rainbow Gold",
    "Chicken Drop",
    "Caveman Bob",
    "The Great Pigsby",
    "John Hunter and the Quest...",
    "Aztec Bonanza",
    "Da Vinci’s Treasure",
    "The Respinners",
    "Wild Depths",
    "Extra juicy",
    "Wild Walker",
    "Spirit of Adventure",
    "Dragon Tribe",
    "OmNom",
    "Yeti Battle of Greenhat p...",
    "7 Bonus Up!",
    "Wins of Winter",
    "Firebird Spirit - Connect...",
    "Pirate Golden Age",
    "Crown of Fire",
    "Happy Hooves",
    "Treasure Wild",
    "Smugglers Cove",
    "Wild Donuts",
    "Mysterious",
    "Fire Hot 5",
    "Fire Hot 20",
    "Fire Hot 40",
    "Fire Hot 100",
    "Queen of Gods",
    "Lucky, Grace & Charm",
    "The Magic Cauldron - Ench...",
    "Shining Hot 5",
    "Shining Hot 20",
    "Shining Hot 40",
    "Shining Hot 100",
    "Starstruck",
    "Little Gem Hold and Spin",
    "Barn Festival",
    "Elemental Gems Megaways",
    "Mystic Chief",
    "Piggy Bank Bills",
    "Empty the Bank",
    "Bounty Gold",
    "The Great Stick-Up",
    "Tic Tac Take",
    "Book of Vikings",
    "Star Pirates Code",
    "Panda's Fortune 2",
    "Cash Elevator",
    "Wild Booster",
    "Heart of Rio",
    "Phoenix Forge",
    "Amazing Money Machine",
    "Hot Chilli",
    "Let It Snow",
    "100 Zombies",
    "Striking Hot 5",
    "Casino Win Spin",
    "Tiki Tumble",
    "Viking Clash",
    "Triple Royal Gold",
    "Fortune Cats Golden Stack...",
    "Wilds of the West",
    "Golden Calaveras",
    "4 Deals With The Devil",
    "Wild Buccaneers Megaways",
    "Animal Carnival",
    "Lucky Money",
    "4 Secret Pyramids",
    "Flower Fortunes Supreme",
    "Curse of the Mummies",
    "Solar Eclipse",
    "Arto and the Seven Deadly...",
    "3 Thunders",
    "Blender Blitz",
    "Sherlock Bones",
    "Magnum Opus",
    "Out of the Ice",
    "Alchemy",
    "Hell Hot 40",
    "Jurassic Party",
    "Alice in Adventureland",
    "Payday Megaways",
    "Tiger Kingdom",
    "Star Pops",
    "2021 Hit Slot",
    "Around the World",
    "Gem Blast",
    "Caravan of Riches",
    "Cupid",
    "Golden Gods",
    "Golden Ox",
    "Chance Machine 5",
    "Chance Machine 20",
    "Chance Machine 40",
    "Chance Machine 100",
    "Diamond Chance",
    "The Golden Sail",
    "Mega Mine",
    "Buffalo 50",
    "Hades River of Souls",
    "Elemento",
    "Crystal Golem",
    "Helios' Fury",
    "Book of Destiny",
    "Volatile Vikings",
    "Megaways Mob",
    "7 Elements",
    "Ninja",
    "Clover Fortunes",
    "Troll's Gold",
    "Deep Descent",
    "Poison Eve",
    "Spirit of the Beast",
    "Immortal Fruits",
    "Milky Ways",
    "3 Secret Cities",
    "Bonus Bunnies",
    "Sails of Fortune",
    "Golden Castle",
    "Emerald's Infinity Reels",
    "Harlequin Carnival",
    "Tomb of Nefertiti",
    "Manhattan Goes Wild",
    "Pixies vs Pirates",
    "The Creepy Carnival",
    "Mayan Magic Wildfire",
    "Kitchen Drama Sushi Mania",
    "Kitchen Drama Bbq Frenzy",
    "Dungeon Quest",
    "Fruits",
    "Oktoberfest",
    "Coins Of Fortune",
    "John Hunter and the Tomb ...",
    "Tribe",
    "The Vampires",
    "Riders of the Storm",
    "Thor: Hammer Time",
    "Wixx",
    "Tesla Jolt",
    "Owls",
    "Crystal Quest: Arcane Tow...",
    "Kluster Krystals Megaclus...",
    "Maze Escape",
    "Christmas Santa",
    "Frequent Flyer",
    "1 2 3 BOOM!",
    "Cowboys Gold",
    "Crystal Quest 1: DEEP JUN...",
    "John Hunter And The Mayan...",
    "Spartan King",
    "Book Of Kingdoms",
    "The Dragon Tiger",
    "Joker King",
    "Eye of the Storm",
    "Rocket Fellas Inc",
    "Magicious",
    "Emerald King Rainbow Road",
    "Frog Grog",
    "Return of the Dead",
    "5 Lions Dance",
    "Emerald King",
    "Serpent Shrine",
    "Beat the Beast: Quetzalco...",
    "Ultra Hold and Spin",
    "Cosmic Voyager",
    "Multiplier Odyssey",
    "Buffalo King",
    "Congo Cash",
    "Star Bounty",
    "Twisted Turbine",
    "Super Boost",
    "6 Wild Sharks",
    "Aztec Gems Deluxe",
    "Street Racer",
    "Cerberus' Inferno",
    "Electric Wilds",
    "Asgardians",
    "Windy City",
    "Pyramid King",
    "Three Star Fortune",
    "Ultra Burn",
    "Troll Haven",
    "Mega Flip",
    "Aurora",
    "Splendour Forest",
    "Rocky's Gold",
    "Fruit Strike",
    "Hot to Burn",
    "Fruit Rainbow",
    "2020 Hit Slot",
    "Aus Dem Tal",
    "Heroes Hunt",
    "Dance Party",
    "Beat the Beast: Kraken’s ...",
    "Desert Shark",
    "Magic Journey",
    "Ravens Eye",
    "Well of Wonders",
    "Tiger Rush",
    "The Rift",
    "Sunset Delight",
    "Spectra",
    "Not Enough Kittens",
    "Luchadora",
    "Jaguar Temple",
    "Full Moon Romance",
    "Flux",
    "Esqueleto Explosivo",
    "Money Mouse",
    "Zoom",
    "Wild Heist at Peacock Man...",
    "Turning Totems",
    "The Falcon Huntress",
    "Birds On A Wire",
    "Honey Honey Honey",
    "Greek Gods",
    "Hercules and Pegasus",
    "Aladdin and the Sorcerer",
    "Heroes' Gathering",
    "It's Time!!",
    "Let's get ready to Rumble",
    "Wildchemy",
    "Fire Strike",
    "Vampires vs Wolves",
    "Super Joker",
    "Powerspin",
    "The Great Chicken Escape",
    "Mystery of Eldorado",
    "Monkey Warrior",
    "Ignite the Night",
    "La Fiesta",
    "Trail Blazer",
    "Starz Megaways",
    "Arcader",
    "Mega Masks",
    "Ancient Troy",
    "Egyptian Fortunes",
    "5 Lions Gold",
    "Caishen's Cash",
    "Triple Jokers",
    "Pirate Gold",
    "Wild Gladiators",
    "Wild Pixies",
    "Drago - Jewels of Fortune",
    "King of Kings",
    "Carnival Queen",
    "More Fresh Fruits",
    "Treasure Horse",
    "Safari King",
    "Great Rhino",
    "Fresh Fruits",
    "Jetsetter",
    "The King",
    "Sparkling Fresh",
    "Master Chen’s Fortune",
    "7 piggies",
    "Dragon Kingdom",
    "3 Genie Wishes",
    "Hot Safari",
    "Asgard",
    "Wild Spells",
    "Double Rainbow",
    "Frank's Farm",
    "5 Lions",
    "Temple Cats",
    "Wild Fruits",
    "#luxurylife",
    "Lucky Streak 2",
    "Lucky Lands",
    "Lucky Streak 1",
    "DIA DE LOS MUERTOS",
    "Football Superstar",
    "Diamond Vapor",
    "Sushi",
    "Satoshi's Secret",
    "Retromania",
    "Macarons",
    "Gladiators",
    "Gems & Stones",
    "Football",
    "Chimney Sweep",
    "4 of a King",
    "2016 Gladiators",
    "Undine's Deep",
    "Sugar Glider",
    "Little Panda",
    "Goddess of War",
    "2027 ISS",
    "Chunjie",
    "Chilli Heat",
    "Safari",
    "The Champions",
    "Leprechaun Song",
    "Ancient Egypt Classic",
  ]);
  const [updateTrigger, setUpdateTrigger] = useState(false);

  const router = useRouter();
  const handleRemove = async () => {
    // Fetch the updated topics after removing a bonus
    const { topics: updatedTopics } = await getTopics();
    setTopics(updatedTopics);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Title and description are required and win.");
      return;
    }

    try {
      const res = await fetch("/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description, winning, chatter }),
      });

      if (res.ok) {
        // After successfully adding a bonus, fetch the updated topics
        const { topics: updatedTopics } = await getTopics();
        setTopics(updatedTopics);

        // Clear the input fields
        setTitle("");
        setDescription("");
        setWinning("");
        setChatter("");
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


    <div className="container" >/*id="protectedArea"*/ 
      
      <form onSubmit={handleSubmit} className="form-group" id="add_user">
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="form-group"
          type="text"
          placeholder="slot name"
          list="suggestionsList"
        />
        <datalist id="suggestionsList">
          {suggestions.map((suggestion, index) => (
            <option key={index} value={suggestion} />
          ))}
        </datalist>

        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="form-group"
          type="text"
          placeholder="bonus price"
        />
        <input
          onChange={(e) => setChatter(e.target.value)}
          value={chatter}
          className="form-group"
          type="text"
          placeholder="chatter"
        />

        <button type="submit" className="btn text-dark update">
          Add Bonus
        </button>
      </form>

      <div className="listbox-admin"></div>
      <table className="table2">
        <thead className="thead-dark2">
          <tr>
            <th width="10px"></th>
            <th width="350px">Slot name</th>
            <th width="30px">Bonus cost</th>
            <th width="40px">Bonus win</th>
            <th width="40px">Action</th>
          </tr>
        </thead>

        <tbody>
          {topics.map((user, index) => (
            <tr>
              <td>{index + 1}.</td>
              <td>{user.title}</td>
              <td>{user.description}₽</td>
              <td>{user.winning}₽</td>
              <td>
                <Link href={`/editTopic/${user._id}`}>
                  <HiPencilAlt size={35} />
                </Link>
                <RemoveBtn id={user._id} updateTrigger={updateTrigger} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}
