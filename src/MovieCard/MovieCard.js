import React from "react";

const MovieCard = ({film}) => {
  return (
    <div>
      <div class="card shadow  bg-body rounded" width="18rem">
        <img
          src={film.poster}
          class="card-img-top"
          height="200px"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{film.title}</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-warning">
            Watch Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
