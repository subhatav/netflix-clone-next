import { create } from "zustand";

import { ModalInterface } from "@/types";

const useInfoModal = create<ModalInterface>((set) => ({
  movieId: undefined,
  isOpen: false,

  openModal: (movieId: string) => set({ isOpen: true, movieId }),
  closeModal: () => set({ isOpen: false, movieId: undefined }),
}));

export default useInfoModal;
