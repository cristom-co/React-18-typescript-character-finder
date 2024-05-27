import * as React from "react";
import ReactDOM from "react-dom/client";

//css modules
import "./index.css";

//Apollo Client
import { ApolloProvider } from "@apollo/client";
import ApolloClient from "./graphql/ApolloClient";

// Router
import { RouterProvider } from "react-router-dom";
import AppRouter from "./routes/AppRouter";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={ApolloClient}>
      <RouterProvider router={AppRouter} />
    </ApolloProvider>
  </React.StrictMode>
);
