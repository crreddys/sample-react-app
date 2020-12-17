import React, { Component } from "react";
import ImagePreview from "./ImagePreview";
import ImageView from "./ImageView";

class ImageForm extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      file: null,
      fileUrl: "",
      fileProcessedUrl: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: any) {
    console.log(event);
    this.setState({ file: event.target.files[0] });
    this.setState({ fileUrl: URL.createObjectURL(event.target.files[0]) });
  }

  handleSubmit(event: any) {
    console.log(event);

    event.preventDefault();

    const formData = new FormData();
    formData.append("file", this.state.file);

    fetch("http://localhost:8080/processImage", {
      method: "post",
      body: formData,
    })
      .then((res) => {
        if (res.ok) {
          console.log(res);
          return res.blob();
        }
      })
      .then((responseAsBlob) => {
        var imgUrl = URL.createObjectURL(responseAsBlob);
        this.setState({ fileProcessedUrl: imgUrl });
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="file" onChange={this.handleChange} />
          <br></br>
          <ImagePreview fileUrl={this.state.fileUrl}></ImagePreview>
          <input type="submit" value="Submit" />
          <br></br>
          <ImageView fileUrl={this.state.fileProcessedUrl}></ImageView>
        </form>
      </div>
    );
  }
}

export default ImageForm;
