export interface Order {
  id: number;
  fullName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  instructions: string;
  subtotal: number;
  deliveryFee: number;
  total: number;
  status: string;
  createdAt: string;
}

export interface OrderProduct {
  id: number;
  productID: number;
  productName: string;
  imageUrl: string;
  quantity: number;
  unitPrice: number;
  lineTotal: number;
}

export interface OrderResponse {
  order: Order;
  items: OrderProduct[];
}

export interface CreateOrderResponse {
  message: string;
  order: {
    id: number;
    status: string;
    createdAt: string;
    total: number;
    subtotal: number;
    delivery_fee: number;
  };
  items: {
    productID: number;
    name: string;
    quantity: number;
    price: number;
    imageUrl: string;
  }[];
}
