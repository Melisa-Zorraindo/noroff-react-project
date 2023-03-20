import { create } from "zustand";

export const useModalDialogStore = create((set) => ({
  isVisible: false,
  show: () => {
    set(() => ({ isVisible: true }));
    const body = document.body;
    //user can view modal is browsing from small screens
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    body.style.overflow = "hidden";
  },

  hide: () => {
    set(() => ({ isVisible: false }));
    const body = document.body;
    body.style.overflow = "auto";
  },
}));
