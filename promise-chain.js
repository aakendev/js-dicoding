const state = {
  stock: {
    coffeeBeans: 250,
    water: 1000,
  },
  isCoffeeMachineBusy: false,
};

const checkAvailability = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!state.isCoffeeMachineBusy) {
        resolve("Mesin Kopi Siap Digunakan");
      } else {
        reject("Mesin Kopi Sibuk, Tidak Bisa Digunakan !");
      }
    }, 1000);
  });
};

const checkStock = () => {
  return new Promise((resolve, reject) => {
    state.isCoffeeMachineBusy = true;
    setTimeout(() => {
      if (state.stock.coffeeBeans >= 15 && state.stock.water >= 250) {
        resolve("Stok Cukup. Kopi akan segera dibuat");
      } else {
        reject("Stok Kopi atau Air Kurang. Gagal membuat kopi !");
      }
    }, 1500);
  });
};

const brewCoffee = () => {
  console.log("Kopi sedang dibuat...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Kopi sudah jadi dan siap dihidangkan");
    }, 2000);
  });
};

const makeEspresso = () => {
  checkAvailability()
    .then((value) => {
      console.log(value);
      return checkStock();
    })
    .then((value) => {
      console.log(value);
      return brewCoffee();
    })
    .then((value) => {
      console.log(value);
      state.isCoffeeMachineBusy = false;
    })
    .catch((rejectionReason) => {
      console.log(rejectionReason);
      state.isCoffeeMachineBusy = false;
    });
};

makeEspresso();
