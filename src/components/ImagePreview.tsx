import React from "react";

export default function ImagePreview(props: any) {
  if (props.fileUrl !== "") {
    return (
      <div>
        <span>Preview</span>
        <br></br>
        <img src={props.fileUrl} width="100px" height="100px" />
        <br></br>
      </div>
    );
  } else {
    return <div></div>;
  }
}
