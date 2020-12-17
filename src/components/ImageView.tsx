import React from "react";

export default function ImageView(props: any) {
  if (props.fileUrl !== "") {
    return (
      <div>
        <span>Processed Image</span>
        <br></br>
        <img src={props.fileUrl} />
        <br></br>
      </div>
    );
  } else {
    return <div></div>;
  }
}
