// const cart = ["shoes", "pants", "kurta"];

// const promise = createOrder(cart);

// promise.then(function (orderID) {
//   proceedToPayment(orderID);
// });

// createOrder(cart, function (orderID) {
//   proceedToPayment(orderID);
// });

const response = fetch("https://jsonplaceholder.typicode.com/todos/1 ");
console.log(response); // * it is the response returned by the api call

asyncOperation1()
  .then((result1) => asyncOperation2(result1))
  .then((result2) => asyncOperation3(result2))
  .then((result3) => asyncOperation4(result3))
  .then((result4) => console.log("Final result:", result4))
  .catch((error) => console.error("Error:", error));
