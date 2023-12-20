/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import teams from "../data/teams";
export function Displayteams() {
  return teams.map((team) => (
    <div>
      <div
        key={team.id}
        css={css`
          display: flex;
          width: 381px;
          height: 69px;
          flex-shrink: 0;
          border-radius: 10px;
          background: #fff;
          box-shadow: 0px 4px 40px 0px rgba(145, 124, 124, 0.25);
        `}
      >
        <p
          css={css`
            color: #181818;
            font-family: Kanit;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 18px; /* 90% */
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 0 0 0 20px;
          `}
        >
          {team.name} Team {team.id}
        </p>
      </div>
      {team.children.map((child) => (
        <div
          key={child.id}
          css={css`
            width: 381px;
            height: 69px;
            flex-shrink: 0;
            border-radius: 10px;
            background: #fff;
            box-shadow: 0px 4px 40px 0px rgba(145, 124, 124, 0.25);
            margin: 20px 0 0 100px;
          `}
        >
          <p
            css={css`
              color: #181818;
              font-family: Kanit;
              font-size: 20px;
              font-style: normal;
              font-weight: 400;
              line-height: 18px; /* 90% */
              display: flex;
              flex-direction: row;
              justify-content: start;
              align-items: center;
              padding: 25px 0 0 20px;
            `}
          >
            {child.name} Team {child.id}
          </p>
        </div>
      ))}
    </div>
  ));
}
