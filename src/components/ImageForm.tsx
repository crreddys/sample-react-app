import React, { Component } from "react";

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

  renderPreview() {
    if (this.state.fileUrl !== "") {
      return (
        <div>
          <span>Preview</span>
          <br></br>
          <img src={this.state.fileUrl} width="100px" height="100px" />
          <br></br>
        </div>
      );
    }
  }

  renderProcessedImage() {
    if (this.state.fileProcessedUrl !== "") {
      return (
        <div>
          <span>Processed Image</span>
          <br></br>
          <img src={this.state.fileProcessedUrl} />
          <br></br>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="file" onChange={this.handleChange} />
          <br></br>
          {this.renderPreview()}
          <input type="submit" value="Submit" />
          <br></br>
          {this.renderProcessedImage()}
        </form>
      </div>
    );
  }
}

export default ImageForm;
