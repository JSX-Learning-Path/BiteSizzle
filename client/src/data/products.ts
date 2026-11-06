import type { Product } from "../types/product";
import cheeseBurger from "../assets/products/cheese-burger.png";
import doubleCheeseburger from "../assets/products/doble-cheese-burger.png";
import pepperonipizza from "../assets/products/pepperoni-pizza.png";
import bbqChikenPizza from "../assets/products/bbq-chicken-pizza.png";
import carbonara from "../assets/products/pasta-carbonara.png";
import bolognese from "../assets/products/bolognese.png";
import classicFries from "../assets/products/fries.png";
import cheeseFries from "../assets/products/fries-cheese.png";

export const products: Product[] = [
  {
    id: "1",
    name: "Classic Burger",
    description:
      "Juicy beef patty, cheddar cheese, fresh lettuce, tomato and our special sauce.",
    price: 9.99,
    imageUrl: cheeseBurger,
    categoryId: "1",
    ingredients: [
      "Beef patty",
      "Cheddar cheese",
      "Fresh lettuce",
      "Tomato",
      "Special sauce",
      "Burger bun",
    ],
  },
  {
    id: "2",
    name: "Double Cheeseburger",
    description:
      "Two juicy beef patties, double cheddar cheese, pickles and signature sauce.",
    price: 12.49,
    imageUrl: doubleCheeseburger,
    categoryId: "1",
    ingredients: [
      "Two beef patties",
      "Double cheddar cheese",
      "Pickles",
      "Red onion",
      "Special burger sauce",
      "Burger bun",
    ],
  },
  {
    id: "3",
    name: "Pepperoni Pizza",
    description:
      "Classic tomato sauce, mozzarella cheese and crispy pepperoni.",
    price: 12.99,
    imageUrl: pepperonipizza,
    categoryId: "2",
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Mozzarella cheese",
      "Pepperoni",
      "Oregano",
      "Olive oil",
    ],
  },
  {
    id: "4",
    name: "BBQ Chicken Pizza",
    description: "Grilled chicken, mozzarella, red onions and smoky BBQ sauce.",
    price: 14.49,
    imageUrl: bbqChikenPizza,
    categoryId: "2",
    ingredients: [
      "Pizza dough",
      "BBQ sauce",
      "Grilled chicken",
      "Mozzarella cheese",
      "Red onion",
      "Sweet corn",
      "Fresh parsley",
    ],
  },
  {
    id: "5",
    name: "Creamy Carbonara",
    description:
      "Creamy parmesan sauce, crispy bacon and freshly ground black pepper.",
    price: 11.99,
    imageUrl: carbonara,
    categoryId: "3",
    ingredients: [
      "Spaghetti",
      "Bacon",
      "Egg yolks",
      "Parmesan cheese",
      "Black pepper",
      "Garlic",
    ],
  },
  {
    id: "6",
    name: "Spaghetti Bolognese",
    description:
      "Italian-style meat sauce with fresh tomatoes, herbs and parmesan.",
    price: 10.99,
    imageUrl: bolognese,
    categoryId: "3",
    ingredients: [
      "Spaghetti",
      "Ground beef",
      "Tomato sauce",
      "Onion",
      "Garlic",
      "Carrots",
      "Olive oil",
      "Parmesan cheese",
      "Fresh basil",
    ],
  },
  {
    id: "7",
    name: "Classic French Fries",
    description: "Golden and crispy potato fries with a pinch of sea salt.",
    price: 4.49,
    imageUrl: classicFries,
    categoryId: "4",
    ingredients: ["Fresh potatoes", "Vegetable oil", "Sea salt"],
  },
  {
    id: "8",
    name: "Loaded Cheese Fries",
    description:
      "Crispy fries topped with melted cheddar cheese and crispy bacon.",
    price: 6.99,
    imageUrl: cheeseFries,
    categoryId: "4",
    ingredients: [
      "Crispy French fries",
      "Cheddar cheese sauce",
      "Crispy bacon",
      "Spring onions",
      "Sour cream",
    ],
  },
];
