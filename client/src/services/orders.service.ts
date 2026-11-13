interface Customer {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  instructions: string;
}

interface OrderProduct {
  id: string;
  quantity: number;
}

interface CreateOrderPayload {
  customer: Customer;
  items: OrderProduct[];
}

const API_URL = "http://localhost:5001/api";

export const createOrder = async (order: CreateOrderPayload) => {
  const response = await fetch(`${API_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to create order");
  }

  return data;
};
