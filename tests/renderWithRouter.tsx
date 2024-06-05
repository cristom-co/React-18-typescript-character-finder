import { render, RenderResult } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

interface RenderWithRouterOptions {
  route?: string;
}

export default function renderWithRouter(  ui: React.ReactElement, { route = '/' } : RenderWithRouterOptions = {}) : RenderResult {
  const router = createMemoryRouter(
    [
      { path: '/', element: ui },
      { path: 'character/:characterId', element: ui },
    ],
    {
      initialEntries: [route],
    }
  );

  return render(<RouterProvider router={router} />);
}