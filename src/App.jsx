import React, { useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import { store } from "./store";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function AppContent() {
  const { mode } = useSelector((state) => state.app);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
    document.documentElement.classList.toggle("dark", mode === "dark");
  }, [mode]);

  return (
    <div className="min-h-screen bg-base-100">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
