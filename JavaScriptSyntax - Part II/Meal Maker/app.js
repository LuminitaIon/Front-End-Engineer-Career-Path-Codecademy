const menu = {
    _meal: "",
    _price: 0,
  
    set meal(mealToCheck) {
      if (typeof mealToCheck === "string") {
        this._meal = mealToCheck;
      }
    },
  
    set price(priceToCheck) {
      if (typeof priceToCheck === "number") {
        this._prices = priceToCheck;
      }
    },
  
    get todaysSpecial() {
      if (this._meal !== "" && this._price !== "") {
        return `Today’s Special is ${this._meal} for ${this._price}!`;
      } else {
        return "Meal or price was not set correctly!";
      }
    },
  };
  
  menu.meal = "Meal1";
  menu.price = 12;
  
  console.log(menu.todaysSpecial);
  const menu = {
    _meal: "",
    _price: 0,
  
    set meal(mealToCheck) {
      if (typeof mealToCheck === "string") {
        this._meal = mealToCheck;
      }
    },
  
    set price(priceToCheck) {
      if (typeof priceToCheck === "number") {
        this._prices = priceToCheck;
      }
    },
  
    get todaysSpecial() {
      if (this._meal !== "" && this._price !== "") {
        return `Today’s Special is ${this._meal} for ${this._price}!`;
      } else {
        return "Meal or price was not set correctly!";
      }
    },
  };
  
  menu.meal = "Meal1";
  menu.price = 12;
  
  console.log(menu.todaysSpecial);
const menu = {
  _meal: "",
  _price: 0,

  set meal(mealToCheck) {
    if (typeof mealToCheck === "string") {
      this._meal = mealToCheck;
    }
  },

  set price(priceToCheck) {
    if (typeof priceToCheck === "number") {
      this._prices = priceToCheck;
    }
  },

  get todaysSpecial() {
    if (this._meal !== "" && this._price !== "") {
      return `Today’s Special is ${this._meal} for ${this._price}!`;
    } else {
      return "Meal or price was not set correctly!";
    }
  },
};

menu.meal = "Meal1";
menu.price = 12;

console.log(menu.todaysSpecial);
    