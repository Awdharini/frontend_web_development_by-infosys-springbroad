class myPromise {
  constructor(execute) {
    this.queue = [];
    this.errorHandler = () => {};
    this.finallyHandler = () => {};
    execute(this.onResolve.bind(this), this.onRehect.bind(this));
  }

  onResolve(data) {
    this.queue.forEach((callback) => {
      data = callback(data);
    });
    this.finallyHandler();
  }
  onReject(error) {
    this.errorHandler(error);
    this.finallyHandler();
  }
  then(callback) {
    this.queue.push(callback);
    return this;
  }
  catch(callback) {
    this.errorHandler = callback;
    return this;
  }
  finally(callback) {
    this.finallyHandler = callback;
    return this;
  }
}

const promise = new myPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("data received");
  }, 1000);
});
promise
  .then((data) => {
    console.log(data);
    return "processing data";
  })
  .then((data) => {
    console.log(data);
  });
  .catch(error=>{
    console.log('error:',error);
});
.finally(()=>{
    console.log('promise completed');
})
