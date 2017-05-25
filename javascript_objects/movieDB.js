let movies = [
  {
    title: "Holes",
    rating: 2.5,
    watched: true
  },
  {
    title: "Fast and Furious, Tokyo Drift",
    rating: 3,
    watched: true
  },
  {
    title: "Fast10: Your Seatbelts",
    rating: "n/a",
    watched: false
  },
  {
    title: "Moonlight",
    rating: 4.5,
    watched: false
  }
]

for (let movie of movies) {
  let str = "";
  movie.watched ? str += "You have watched " : str += "You have not seen ";
  str += '"' + movie.title + '" - ';
  str += movie.rating + " stars";
  console.log(str);
}