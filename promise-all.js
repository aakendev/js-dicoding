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
        resolve("Mesin Kopi siap Dipakai.");
      } else {
        reject("Mesin Kopi Sibuk. Tidak bisa dipakai.");
      }
    }, 1000);
  });
};

const checkStock = () => {
  return new Promise((resolve, reject) => {
    state.isCoffeeMachineBusy = false;
    setTimeout(() => {
      if (state.stock.coffeeBeans >= 25 && state.stock.water >= 100) {
        resolve("Stock Cukup. Bisa membuat kopi.");
      } else {
        reject("Stock Tidak Cukup. Tidak bisa membuat kopi.");
      }
    }, 2000);
  });
};

const boilWater = () => {
  return new Promise((resolve, reject) => {
    console.log("Sedang merebus air...");
    setTimeout(() => {
      resolve("Air sudah siap untuk dituang ke kopi.");
    }, 2000);
  });
};

const grindingCoffee = () => {
  return new Promise((resolve, reject) => {
    console.log("Sedang menggiling kopi...");
    setTimeout(() => {
      resolve("Kopi sudah digiling dan sudah siap digunakan.");
    }, 1000);
  });
};

const brewCoffee = () => {
  return new Promise((resolve, reject) => {
    console.log("Sedang membuat kopi...");
    setTimeout(() => {
      resolve("Berhasil membuat kopi.");
    }, 3000);
  });
};

const makeEspresso = () => {
  checkAvailability()
    .then((resolveAction) => {
      console.log(resolveAction);
      return checkStock();
    })
    .then((resolveAction) => {
      const promises = [boilWater(), grindingCoffee()];
      return Promise.all(promises);
    })
    .then((resolveAction) => {
      console.log(resolveAction);
      return brewCoffee();
    })
    .then((resolveAction) => {
      console.log(resolveAction);
      state.isCoffeeMachineBusy = false;
    })
    .catch((rejectionReason) => {
      console.log(rejectionReason);
      state.isCoffeeMachineBusy = false;
    });
};

makeEspresso();
