  const uri =
    "https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",

    },
  };

  fetch(uri, options)
    .then((res) => res.json())
    .then((data) => {
      const movies = data.results;
      const container = document.getElementById("movies-container");

      movies.forEach((movie) => {
        const card = document.createElement("div");
        card.className = "card";
        card.style.width = "18rem";

        card.innerHTML = `
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="card-img-top" alt="${movie.title}" />
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">${movie.overview.substring(0, 100)}...</p>
            <a href="#" class="btn btn-primary">Detalhes</a>
          </div>
        `;

        container.appendChild(card);
      });
    })
    .catch((err) => console.error(err));