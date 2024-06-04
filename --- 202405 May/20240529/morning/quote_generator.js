// Function to generate a random quote
function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * dogQuotes.length);
  const randomQuote = dogQuotes[randomIndex];
  return randomQuote;
}

function displayQuote() {
  const quoteElement = document.getElementById("quote");
  const randomQuote = generateRandomQuote();
  quoteElement.textContent = `"${randomQuote.text}"\n- ${randomQuote.author}`;
}

const buttonElement = document.getElementById("generate-button");
buttonElement.addEventListener("click", displayQuote);

const dogQuotes = [
  {
    text: "The better I get to know men, the more I find myself loving dogs.",
    author: "Charles de Gaulle",
  },
  {
    text: "Dogs are not our whole life, but they make our lives whole.",
    author: "Roger Caras",
  },
  {
    text: "The only creatures that are evolved enough to convey pure love are dogs and infants.",
    author: "Johnny Depp",
  },
  {
    text: "A dog is the only thing on earth that loves you more than he loves himself.",
    author: "Josh Billings",
  },
  {
    text: "The average dog is a nicer person than the average person.",
    author: "Andy Rooney",
  },
  {
    text: "Dogs do speak, but only to those who know how to listen.",
    author: "Orhan Pamuk",
  },
  {
    text: "The better I get to know men, the more I find myself loving dogs.",
    author: "Charles de Gaulle",
  },
  {
    text: "Happiness is a warm puppy.",
    author: "Charles M. Schulz",
  },
  {
    text: "If there are no dogs in Heaven, then when I die I want to go where they went.",
    author: "Will Rogers",
  },
  {
    text: "Dogs' lives are too short. Their only fault, really.",
    author: "Agnes Sligh Turnbull",
  },
  {
    text: "Dogs are our link to paradise. They don't know evil or jealousy or discontent.",
    author: "Milan Kundera",
  },
  {
    text: "A dog will teach you unconditional love. If you can have that in your life, things won't be too bad.",
    author: "Robert Wagner",
  },
  {
    text: "The greatest fear dogs know is the fear that you will not come back when you go out the door without them.",
    author: "Stanley Coren",
  },
  {
    text: "No matter how little money and how few possessions you own, having a dog makes you rich.",
    author: "Louis Sabin",
  },
  {
    text: "A dog is the only thing that can mend a crack in your broken heart.",
    author: "Judy Desmond",
  },
];
