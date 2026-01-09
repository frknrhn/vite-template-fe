import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import "./index.css";

// Basit bir mock store
const store = configureStore({
  reducer: {
    // Reducer'lar buraya eklenecek
  },
});

function App() {
  return (
    <div className="w-screen h-screen bg-neutral-950 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Mock Page</h1>
        <p className="text-neutral-400">Template ready for development</p>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
