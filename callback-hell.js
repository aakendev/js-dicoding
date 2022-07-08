function makeACake(...rawIngredients) {
  const ingredients = collectIngredients(
    rawIngredients,
    function (ingredients) {
      makeTheDough(ingredients, function (dough) {
        pourDough(dough, function (pouredDough) {
          makeACake(pouredDough, function (cake) {
            console.log(cake);
          });
        });
      });
    }
  );
}
