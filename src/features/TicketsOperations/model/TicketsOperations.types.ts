export interface sitType {
  seat_id: number;
  seatNum: number;
  block: number;
  price: number;
  status: "FREE" | "BOOKED" | "CLOSED";
}

export type CoupeType = sitType[];
export type WagonType = CoupeType[];

export interface pathType {
  time: string;
  city: string;
  date: string;
}
export interface TiketType {
  id: string;
  departure_date: string;
  arriving_data: string;
  start_point: string;
  finish_point: string;
  type_wagon: string;
  type_shelf: string;
  number_wagon: number;
  number_seat: number;
  stops: string[];
}

export interface TrainCardType {
  id: string;
  firstDate: pathType;
  secondDate: pathType;
  fitsFree: number;
  fitsPurchased: number;
  booked?: boolean;
  stops: string;
}

export type getOrdersType = () => Promise<false | TiketType[]>;
export type getTicketsWithParams = (
  params: string
) => Promise<false | TiketType[]>;

export type getWagonsType = (TrainId: string) => Promise<false | WagonType[]>;
