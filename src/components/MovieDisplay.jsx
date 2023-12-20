/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import movies from "../data/movies";
function MoviesDisplay() {
  return movies.map((items, index) => {
    return (
      <div
        key={index}
        css={css`
          width: 450px;
          height: 250px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 15px;
          border-radius: 10px;
          background: #fff;
          box-shadow: 0px 4px 40px 0px rgba(145, 124, 124, 0.25);
        `}
      >
        <div
          css={css`
            padding: 15px;
            display: flex;
            align-self: flex-start;
          `}
        >
          <img
            src={items.image}
            alt=""
            css={css`
              width: 102px;
              height: 100px;
              flex-shrink: 0;
              border-radius: 10px;
            `}
          />
        </div>
        <div
          css={css`
            display: flex;
            height: 100%;
            flex-direction: column;
            justify-content: space-around;
            color: #181818;
            font-family: Kanit;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 15px;
          `}
        >
          <p> title : {items.title}</p>
          <p> years: {items.years}</p>
          <p> runtime : {items.runtime}</p>
          <div
            css={css`
              flex-shrink: 0;
              display: flex;
              align-items: center;
            `}
          >
            genres
            <div
              css={css`
                flex-shrink: 0;
                display: flex;
                align-items: center;
                margin: 0 auto;
              `}
            >
              {items.genres.map((genre, index) => {
                return (
                  <p
                    key={index}
                    css={css`
                      padding: 5px 10px;
                      margin-right: 5px;
                      flex-shrink: 0;
                      border-radius: 10px;
                      background: #eaac99;
                      text-align: center;
                    `}
                  >
                    {genre}
                  </p>
                );
              })}
            </div>
          </div>
          <p>IMDB Rating: {items.imdbRating}</p>
          <p>IMDB Votes : {items.imdbVotes}</p>
        </div>
      </div>
    );
  });
}
export default MoviesDisplay;
