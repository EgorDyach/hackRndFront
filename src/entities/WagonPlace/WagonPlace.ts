import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useWagonPlace = create(
  immer<any>((set) => ({
    id: 1,
    number_wagon: 1,
    number_seat: 1,

    setNumberWagon: (number_wagon: number) => {
      set((state) => {
        state.number_wagon = number_wagon;
      });
    },
    setNumberSeat: (number_seat: number) => {
      set((state) => {
        state.number_seat = number_seat;
      });
    },
  }))
);

export default useWagonPlace;
