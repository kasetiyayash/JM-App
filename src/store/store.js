import { configureStore } from "@reduxjs/toolkit";

import dashboardReducer from "@/store/dashboard/slice";

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
