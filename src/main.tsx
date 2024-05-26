import * as React from "react";
import ReactDOM from "react-dom/client";

//css modules
import "./index.css";

// context API
import RootProvider from "./context/rootContext";

//Apollo Client
import { ApolloProvider } from "@apollo/client";
import ApolloClient from "./graphql/ApolloClient";

// Router
import { RouterProvider } from "react-router-dom";
import AppRouter from "./routes/AppRouter";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={ApolloClient}>
      <RootProvider>
        <RouterProvider router={AppRouter} />
      </RootProvider>
    </ApolloProvider>
  </React.StrictMode>
);
