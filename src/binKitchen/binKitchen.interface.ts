export interface ICreateCategory {
  name: string;
}

export interface IGetCategory {
    id: boolean;
    name: boolean;
}

export interface IUpdateCategory {
    id: number;
    name: string;
}

export interface IDeleteCategory {
  id: number;
  name: string;
}

export interface ICreateMenu {
  name: string;
  image: string;
  price: number;
  category: string;
}

export interface IGetMenu {
  id: boolean;
  name: boolean;
}

export interface IUpdateMenu {
  id: number; 
  name: string;
}

export interface IDeleteMenu {
  id: number;
}

export interface ICreateOrder {
  tableId: number
}

export interface IGetOrder {
  id: number;
  status: string;
  tableId: number;
}

export interface IUpdateOrder {
  id: number;
  name: string;
  image: string;
  price: number;
}

export interface IDeleteOrder {
  id: number
}

// export interface ICreateOrderItem {
//   quantity: number; 
//   totalPrice: number; 
//   menu: string;
// }

// export interface IGetOrderItem {
//   id: number;
//   status: string;
//   tableId: number;
// }

// export interface IUpdateOrderItem {
//   id: number; 
//   quantity: number; 
//   totalPrice: number;
// }

// export interface IDeleteOrderItem {
//   id: number;
// }

