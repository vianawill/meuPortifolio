/**
 * @copyright 2025 vianawill
 * @license Apache-2.0
 */

/**
 * Node Modules
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

/**
 * Styles
 */
import '@/index.css';

/**
 * Components
 */
import { App } from '@/App';
import { Sidebar } from '@/components/Sidebar';
import { FloatingMenu } from '@/components/FloatingMenu';
import { Profile } from '@/components/Profile';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='lg:flex lg:justify-center lg:items-start lg:gap-10'>
      <Sidebar />
      <FloatingMenu />
      <Profile />
      <App />
    </div>
  </StrictMode>,
);
