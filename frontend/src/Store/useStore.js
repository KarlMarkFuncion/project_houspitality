import { create } from "zustand";

const useStore = create((set) => ({
  listings: [],
  currentListing: {},
  postListing: {},
  tags: [],
  preBooking: {},
  isLoggedIn: false,
  currentUser: {},
  booking: {},
  checkoutErrors: [],
  successMessage: {},
  currentFilter: "",
  filteredListings: [],

  setFilteredListings: (filteredListings) => set({ filteredListings }),

  setCurrentFilter: (currentFilter) => set({ currentFilter }),

  setSuccessMessage: (successMessage) => set({ successMessage }),

  setCheckOutErors: (checkoutErrors) => set({ checkoutErrors }),

  setBooking: (booking) => set({ booking }),

  setCurrentUser: (currentUser) => set({ currentUser }),

  setLoggedOut: () => set({ isLoggedIn: false }),
  setLoggedIn: () => set({ isLoggedIn: true }),

  setListings: (listings) => set({ listings }),

  setCurrentListing: (currentListing) => set({ currentListing }),
  setPostListing: (postListing) => set({ postListing }),
  setTags: (tags) => set({ tags }),
  setPreBooking: (preBooking) => set({ preBooking }),
}));

export default useStore;
