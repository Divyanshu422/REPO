function x() {
  for (let i = 1; i <= 5; i++) {
    function y(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
    y(i);
  }
  console.log("Js is fun to learn");
}
x();
