import type { Product } from "../types/product";
import cheeseBurger from "../assets/products/cheese-burger.png";
import doubleCheeseburger from "../assets/products/doble-cheese-burger.png";
import pepperonipizza from "../assets/products/pepperoni-pizza.png";
import bbqChikenPizza from "../assets/products/bbq-chicken-pizza.png";
import carbonara from "../assets/products/pasta-carbonara.png";
import bolognese from "../assets/products/bolognese.png";
import classicFries from "../assets/products/fries.png";
import cheeseFries from "../assets/products/fries-cheese.png";
import BaconBurger from "../assets/products/bacon-burger.png";
import SwissBurger from "../assets/products/swiss-burger.png";

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
  // BURGERS - categoryId: "1"

  {
    id: "9",
    name: "Bacon Cheeseburger",
    description:
      "Juicy beef patty with crispy bacon, cheddar cheese and smoky BBQ sauce.",
    price: 11.49,
    imageUrl: BaconBurger,
    categoryId: "1",
    ingredients: [
      "Beef patty",
      "Crispy bacon",
      "Cheddar cheese",
      "Lettuce",
      "BBQ sauce",
      "Burger bun",
    ],
  },
  {
    id: "10",
    name: "Mushroom Swiss Burger",
    description:
      "Grilled beef patty topped with sautéed mushrooms and melted Swiss cheese.",
    price: 12.99,
    imageUrl: SwissBurger,
    categoryId: "1",
    ingredients: [
      "Beef patty",
      "Swiss cheese",
      "Mushrooms",
      "Caramelized onions",
      "Garlic sauce",
      "Burger bun",
    ],
  },
  {
    id: "11",
    name: "Crispy Chicken Burger",
    description:
      "Golden crispy chicken breast with fresh lettuce and creamy mayo.",
    price: 10.49,
    imageUrl: cheeseBurger,
    categoryId: "1",
    ingredients: [
      "Crispy chicken",
      "Lettuce",
      "Mayonnaise",
      "Burger bun",
    ],
  },
  {
    id: "12",
    name: "Spicy Jalapeño Burger",
    description:
      "Beef patty with jalapeños, pepper jack cheese and spicy burger sauce.",
    price: 12.49,
    imageUrl: cheeseBurger,
    categoryId: "1",
    ingredients: [
      "Beef patty",
      "Jalapeños",
      "Pepper jack cheese",
      "Red onion",
      "Spicy sauce",
      "Burger bun",
    ],
  },
  {
    id: "13",
    name: "BBQ Bacon Burger",
    description: "Smoky BBQ beef burger with crispy bacon and melted cheddar.",
    price: 13.49,
    imageUrl: cheeseBurger,
    categoryId: "1",
    ingredients: [
      "Beef patty",
      "Bacon",
      "Cheddar",
      "BBQ sauce",
      "Onion rings",
      "Burger bun",
    ],
  },
  {
    id: "14",
    name: "Double Smash Burger",
    description:
      "Two smashed beef patties with American cheese and signature sauce.",
    price: 13.99,
    imageUrl: doubleCheeseburger,
    categoryId: "1",
    ingredients: [
      "Two beef patties",
      "American cheese",
      "Pickles",
      "Onions",
      "Signature sauce",
      "Burger bun",
    ],
  },

  // PIZZA - categoryId: "2"

  {
    id: "15",
    name: "Margherita Pizza",
    description:
      "Traditional Italian pizza with fresh mozzarella, tomato sauce and basil.",
    price: 10.99,
    imageUrl: pepperonipizza,
    categoryId: "2",
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Mozzarella",
      "Fresh basil",
      "Olive oil",
    ],
  },
  {
    id: "16",
    name: "Four Cheese Pizza",
    description:
      "A rich combination of four delicious cheeses on a crispy pizza crust.",
    price: 13.49,
    imageUrl: pepperonipizza,
    categoryId: "2",
    ingredients: [
      "Pizza dough",
      "Mozzarella",
      "Gorgonzola",
      "Parmesan",
      "Ricotta",
    ],
  },
  {
    id: "17",
    name: "Hawaiian Pizza",
    description:
      "A sweet and savory combination of ham, pineapple and mozzarella.",
    price: 12.49,
    imageUrl: pepperonipizza,
    categoryId: "2",
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Mozzarella",
      "Ham",
      "Pineapple",
    ],
  },
  {
    id: "18",
    name: "Meat Lovers Pizza",
    description: "Loaded with pepperoni, ham, bacon and seasoned ground beef.",
    price: 15.49,
    imageUrl: pepperonipizza,
    categoryId: "2",
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Pepperoni",
      "Ham",
      "Bacon",
      "Ground beef",
      "Mozzarella",
    ],
  },
  {
    id: "19",
    name: "Vegetarian Pizza",
    description:
      "Fresh vegetables, mushrooms and mozzarella on a classic tomato base.",
    price: 11.99,
    imageUrl: pepperonipizza,
    categoryId: "2",
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Mozzarella",
      "Bell peppers",
      "Mushrooms",
      "Olives",
      "Red onion",
    ],
  },
  {
    id: "20",
    name: "Spicy Diavola Pizza",
    description:
      "A spicy Italian favorite with hot salami, chili flakes and mozzarella.",
    price: 13.99,
    imageUrl: pepperonipizza,
    categoryId: "2",
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Mozzarella",
      "Spicy salami",
      "Chili flakes",
      "Oregano",
    ],
  },

  // PASTA - categoryId: "3"

  {
    id: "21",
    name: "Penne Arrabbiata",
    description: "Penne pasta tossed in a spicy tomato and garlic sauce.",
    price: 9.49,
    imageUrl: carbonara,
    categoryId: "3",
    ingredients: [
      "Penne",
      "Tomato sauce",
      "Garlic",
      "Chili flakes",
      "Olive oil",
      "Fresh parsley",
    ],
  },
  {
    id: "22",
    name: "Pesto Chicken Pasta",
    description: "Tender chicken and pasta coated in creamy basil pesto sauce.",
    price: 12.99,
    imageUrl: carbonara,
    categoryId: "3",
    ingredients: [
      "Penne",
      "Grilled chicken",
      "Basil pesto",
      "Parmesan",
      "Cherry tomatoes",
      "Cream",
    ],
  },
  {
    id: "23",
    name: "Alfredo Chicken Pasta",
    description:
      "Creamy Alfredo sauce with grilled chicken and parmesan cheese.",
    price: 12.49,
    imageUrl: carbonara,
    categoryId: "3",
    ingredients: [
      "Fettuccine",
      "Chicken breast",
      "Heavy cream",
      "Parmesan",
      "Garlic",
      "Butter",
    ],
  },
  {
    id: "24",
    name: "Lasagna Bolognese",
    description: "Layers of pasta, rich beef ragù, béchamel and melted cheese.",
    price: 13.49,
    imageUrl: bolognese,
    categoryId: "3",
    ingredients: [
      "Lasagna sheets",
      "Ground beef",
      "Tomato sauce",
      "Béchamel",
      "Mozzarella",
      "Parmesan",
    ],
  },
  {
    id: "25",
    name: "Shrimp Garlic Pasta",
    description: "Juicy shrimp sautéed with garlic, olive oil and fresh herbs.",
    price: 14.99,
    imageUrl: carbonara,
    categoryId: "3",
    ingredients: [
      "Spaghetti",
      "Shrimp",
      "Garlic",
      "Olive oil",
      "Lemon juice",
      "Parsley",
    ],
  },
  {
    id: "26",
    name: "Creamy Mushroom Pasta",
    description: "Pasta with sautéed mushrooms in a rich parmesan cream sauce.",
    price: 11.49,
    imageUrl: carbonara,
    categoryId: "3",
    ingredients: [
      "Fettuccine",
      "Mushrooms",
      "Heavy cream",
      "Parmesan",
      "Garlic",
      "Thyme",
    ],
  },

  // SIDES - categoryId: "4"

  {
    id: "27",
    name: "Onion Rings",
    description:
      "Golden crispy onion rings served with our signature dipping sauce.",
    price: 4.99,
    imageUrl: classicFries,
    categoryId: "4",
    ingredients: [
      "Onions",
      "Flour",
      "Breadcrumbs",
      "Seasoning",
      "Dipping sauce",
    ],
  },
  {
    id: "28",
    name: "Mozzarella Sticks",
    description:
      "Crispy breaded mozzarella sticks with marinara dipping sauce.",
    price: 5.99,
    imageUrl: cheeseFries,
    categoryId: "4",
    ingredients: ["Mozzarella", "Breadcrumbs", "Egg", "Marinara sauce"],
  },
  {
    id: "29",
    name: "Chicken Nuggets",
    description:
      "Crispy golden chicken nuggets served with a creamy dipping sauce.",
    price: 5.49,
    imageUrl: classicFries,
    categoryId: "4",
    ingredients: [
      "Chicken breast",
      "Breadcrumbs",
      "Egg",
      "Seasoning",
      "Dipping sauce",
    ],
  },
  {
    id: "30",
    name: "Cheesy Garlic Bread",
    description:
      "Toasted garlic bread topped with melted mozzarella and herbs.",
    price: 4.49,
    imageUrl: cheeseFries,
    categoryId: "4",
    ingredients: ["Bread", "Garlic butter", "Mozzarella", "Oregano", "Parsley"],
  },
  {
    id: "31",
    name: "Potato Wedges",
    description: "Seasoned potato wedges baked until golden and crispy.",
    price: 4.99,
    imageUrl: classicFries,
    categoryId: "4",
    ingredients: [
      "Potatoes",
      "Olive oil",
      "Paprika",
      "Garlic powder",
      "Sea salt",
    ],
  },
  {
    id: "32",
    name: "Chicken Wings",
    description: "Juicy chicken wings coated in a smoky BBQ glaze.",
    price: 7.99,
    imageUrl: classicFries,
    categoryId: "4",
    ingredients: [
      "Chicken wings",
      "BBQ sauce",
      "Garlic",
      "Paprika",
      "Black pepper",
    ],
  },
];
