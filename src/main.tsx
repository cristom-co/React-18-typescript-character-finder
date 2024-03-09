import * as React from 'react';
import ReactDOM from 'react-dom/client'

import Root from './routes/root'
import ErrorPage from "./error-page";
import Character from './routes/character';

import './index.css'

import RootProvider  from './context/rootContext';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "character/:characterId",
        element: <Character />,
      },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ApolloProvider client={client}>
        <RootProvider>
          <RouterProvider router={router} />
        </RootProvider>
      </ApolloProvider>
  </React.StrictMode>,
)
