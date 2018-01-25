import "whatwg-fetch";

class HttpService {
  getProducts = () => {
    let promise = new Promise((res, rej) => {
      fetch("http://localhost:3004/product").then(res => {
        res(response.json());
      });
    });
    return promise;
  };
}

export default HttpService;
