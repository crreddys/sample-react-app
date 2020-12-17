export class ImageService {
  processImage(payLoad: any): any {
    fetch("http://localhost:8080/processImage", {
      method: "post",
      body: payLoad,
    })
      .then((res) => {
        if (res.ok) {
          return res.blob();
        }
      })
      .then((responseAsBlob) => {
        return responseAsBlob;
      });
  }
}
