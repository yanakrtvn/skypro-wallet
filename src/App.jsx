import React from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./context/AuthProvider";
import { TransactionsProvider } from "./context/TransactionsProvider";

function App() {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <TransactionsProvider>
          <AppRoutes />
        </TransactionsProvider>
      </AuthProvider>
    </>
  );
}

export default App;