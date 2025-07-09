const uri = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "",
  },
};

fetch(uri, options)
  .then((res) => res.json())
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
