/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import movies from "../data/movies";
export function Displaymovies() {
  return movies.map((item) => (
    <div
      key={item.title}
      css={css`
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-items: start;
        width: 500px;
        height: 300px;
        flex-shrink: 0;
        border-radius: 10px;
        background: #fff;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px;
        color: #181818;
        box-shadow: 0px 4px 40px 0px rgba(145, 124, 124, 0.25);
        
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: left;
          align-items: flex-start;
          border-radius: 10px;
          background: #fff;

        `}
      >
        <img
          css={css`
            width: 102px;
            height: 100px;
            flex-shrink: 0;
            margin: 18px;
            border-radius: 10px;
          `}
          src={item.image}
          alt={item.title}
        />
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: space-between;
          height: 100%;
          padding: 15px;
          gap: 30px;
          background: #fff;
        `}
      >
        <p>Title: {item.title}</p>
        <p>Year: {item.year.slice(0, 4)}</p>
        <p>Runtime : {item.runtime.slice(0, 3)} Mins</p>
        <p
          css={css`
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 1px;
          `}
        >
          Genres:
          {item.genres.map((genre, index) => {
            return (
              <p
                key={index}
                css={css`
                  width: max-content;
                  height: 27px;
                  border-radius: 10px;
                  background: #eaac99;
                  padding: 5px;
                `}
              >
                {genre}
              </p>
            );
          })}
        </p>
        <p>IMDB Ratings : {item.imdbRating}</p>
        <p>IMDB Votes : {item.imdbVotes}</p>
      </div>
    </div>
  ));
}
