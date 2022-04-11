const fortunes = [
  "Conquer your fears or they will conquer you",
  "Rivers need springs",
  "Do not fear what you don't know",
  "You will have a pleasant surprise",
  "whenever possible keep it simple",
  "even a broken clock is right twice a day",
  "bigger they are the harder they fall",
];

exports.getFortune = () => {
  const idx = Math.floor(Math.random() * fortunes.length);
  return fortunes[idx];
};
