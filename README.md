# BiteSizzle 🍔

A modern food delivery web application built with React and TypeScript.

## About the Project

BiteSizzle is a food delivery application where users can explore food products, browse categories, add products to their cart, and place orders.

## Tech Stack

**Frontend**

- React
- TypeScript
- Vite
- Material UI

**Backend**

- Node.js
- Express.js
- TypeScript

**Database**

- PostgreSQL

**Features**

- Explory Products by category
- View Product details
- Add Product to the shopping cart
- Update quantity product
- Remove product from cart
- Order Details
- Responsive design for desktop tablet and mobile

## Project Structure

```text
BiteSizzle/
├── client/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── services/
│       └── types/
├── server/
│   └── src/
│       ├── config/
│       ├── routes/
│       └── server.ts
├── README.md
└── .gitignore
```

## Getting Started

**Prerequisites**

Before running this project you should have these installed :

- Node.js
- npm
- PostgresQL
- Git

## Instalaltion

1.Clone the repository:

git clone `https://github.com/JSX-Learning-Path/BiteSizzle.git`

2.Change the project location

cd BiteSizzle

3.Install dependencies

cd client

npm install

4.Install Backend dependencies

cd server

npm install

## Environment Variables

Create a `.env` file inside the `server` directory and configure the following variables:

```env
PORT=5001

DB_HOST=localhost
DB_PORT=5432
DB_NAME=bitesizzle
DB_USER=your_postgres_username
DB_PASSWORD=your_postgres_password
```

Replace the placeholder values with your local PostgreSQL configuration.

**Important:** Never commit your `.env` file or expose your database credentials publicly.

## API Endpoints

Base URL: `http://localhost:5001/api`

### Products

| Method | Endpoint    | Description           |
| ------ | ----------- | --------------------- |
| GET    | `/products` | Retrieve all products |

### Categories

| Method | Endpoint      | Description             |
| ------ | ------------- | ----------------------- |
| GET    | `/categories` | Retrieve all categories |

### Orders

| Method | Endpoint      | Description                  |
| ------ | ------------- | ---------------------------- |
| POST   | `/orders`     | Create a new order           |
| GET    | `/orders/:id` | Retrieve order details by ID |



## Datebase

### Database Relationships

The database consists of four main tables:

- **categories** – stores product categories.
- **products** – stores food products and their information.
- **orders** – stores customer order information.
- **order_items** – stores the products included in each order.

### Relationships

- One category can have multiple products.
- Each product belongs to one category.
- One order can contain multiple order items.
- Each order item belongs to one order.
- Each order item references a product.

## Running the Application

### Start the Backend

Open a terminal and navigate to the server directory:

```bash
cd server
npm run dev
```

The backend server will run at:

`http://localhost:5001`

### Start the Frontend

Open a second terminal and navigate to the client directory:

```bash
cd client
npm run dev
```

The frontend application will run at:

`http://localhost:5173`



