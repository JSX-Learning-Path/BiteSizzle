import type { OrderResponse, CreateOrderResponse } from "../types/order";
import fetchApi from "./api.services";

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

export const createOrder = async (
  order: CreateOrderPayload,
): Promise<CreateOrderResponse> => {
  return fetchApi<CreateOrderResponse>(`${API_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });
};
export const getOrderById = async (id: number): Promise<OrderResponse> => {
  const data = await fetchApi<OrderResponse>(`${API_URL}/orders/${id}`);
  return data;
};
