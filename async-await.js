const state = {
  stock: {
    coffeeBeans: 250,
    water: 1000,
  },
  isCoffeeMachineBusy: false,
};

const checkMachine = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!state.isCoffeeMachineBusy) {
        resolve("Mesin Kopi siap Dipakai.");
      } else {
        reject("Mesin Kopi Sibuk. Tidak Bisa Dipakai.");
      }
    }, 1000);
  });
};

const checkStock = () => {
  return new Promise((resolve, reject) => {
    state.isCoffeeMachineBusy = false;
    setTimeout(() => {
      if (state.stock.coffeeBeans >= 100 && state.stock.water >= 500) {
        resolve("Stok Kopi dan Air Cukup. Kopi bisa dibuat.");
      } else {
        reject("Stok Kopi dan Air Kurang. Kopi tidak bisa dibuat.");
      }
    }, 3000);
  });
};

const grindCoffee = () => {
  return new Promise((resolve, reject) => {
    console.log("Sedang menggiling kopi...");
    setTimeout(() => {
      resolve("Kopi selesai digiling...");
    }, 3000);
  });
};

const boilWater = () => {
  return new Promise((resolve, reject) => {
    console.log("Sedang merebus air...");
    setTimeout(() => {
      resolve("Air sudah mendidih... Siap digunakan...");
    }, 1000);
  });
};

const brewCoffee = () => {
  return new Promise((resolve, reject) => {
    console.log("Sedang membuat kopi...");
    setTimeout(() => {
      resolve("Kopi sudah selesai dibuat. Kopi siap dihidangkan...");
    }, 5000);
  });
};

const makeEspresso = async () => {
  try {
    console.log(await checkMachine());
    console.log(await checkStock());
    console.log(await Promise.all([grindCoffee(), boilWater()]));
    console.log(await brewCoffee());
  } catch (rejectReason) {
    console.log(rejectReason);
  }
};

makeEspresso();
