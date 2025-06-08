"use client";

export default function LikeItemButton(props: any) {
  async function LikeButton() {
    const myHeaders = new Headers();
    myHeaders.append(
      "gfg_token_header_key",props.Jwt
  );
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

  return (
    <>
      {props.DidYouLikedIt ? (
        <div>
          <button onClick={LikeButton}>like button</button>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
