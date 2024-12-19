// module.js

// Named exports
export function add(a, b) {
    return a + b;
  }
  
  export function subtract(a, b) {
    return a - b;
  }
  
  // Default export
  const calculator = {
    add,
    subtract,
  };
  
  export default calculator;
  