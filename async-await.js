const makeCoffee = () => {
  getCoffee().then((coffee) => {
    console.log(coffee);
  });
};

makeCoffee();
