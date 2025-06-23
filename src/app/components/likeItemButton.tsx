"use client";

import { useState } from "react";

export default function LikeItemButton(props: any) {
  let [liked, setLiked] = useState(props.DidYouLikedIt);
  let UserOrNot = false;
  if (props.Jwt != null) {
    UserOrNot = true;
  }

  async function LikeButton() {
    setLiked(true);
    const myHeaders = new Headers();
    myHeaders.append("gfg_token_header_key", props.Jwt);
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      _id: props.Id,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:8080/user/userLikedItem", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  }

  async function DisLikeButton() {
    setLiked(false);
    const myHeaders = new Headers();
    myHeaders.append("gfg_token_header_key", props.Jwt);
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      _id: props.Id,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:8080/user/userDisLikedItem", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  }

  return (
    <>
      {UserOrNot ? (
        liked ? (
          <div>
            <button onClick={DisLikeButton}>
              <img src="/svg/heart-svgrepo-com.svg" alt="Dislike" />
            </button>
          </div>
        ) : (
          <div>
            <button onClick={LikeButton}>
              <img src="/svg/heart-alt-svgrepo-com.svg" alt="like" />
            </button>
          </div>
        )
      ) : (
        <></>
      )}
    </>
  );
}
