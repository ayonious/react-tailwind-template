import React from 'react';
import { createRoot } from 'react-dom/client';

import Dashboard from './components/Dashboard';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<Dashboard />);
}
