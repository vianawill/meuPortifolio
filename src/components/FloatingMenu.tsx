/**
 * @copyright 2025 vianawill
 * @license Apache-2.0
 */

/**
 * Node Modules
 */
import { useEffect, useState } from 'react';

/**
 * Custom Modules
 */
import { cn } from '@/lib/utils';

/**
 * Constants
 */
import { navLinks } from '@/constants';

export const FloatingMenu = () => {
  const [active, setActive] = useState('#hero');
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowMenu(true);

        if (timeoutId) clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
          setShowMenu(false);
        }, 1200);
      } else {
        setShowMenu(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      className={cn(
        'fixed right-10 top-1/2 -translate-y-1/2 bg-black border border-neutral-600 pt-4 rounded-full z-10 hidden lg:block transition-all duration-300',
        showMenu
          ? 'opacity-100 translate-x-0 pointer-events-auto'
          : 'opacity-0 translate-x-10 pointer-events-none',
      )}
    >
      {navLinks.map((link) => {
        const Icon = link.icon;

        return (
          <a
            key={link.label}
            href={link.link}
            onClick={() => setActive(link.link)}
            className={cn(
              'text-neutral-400 flex items-center gap-2 hover:text-primary transition-colors duration-200 mb-6 px-4',
              active == link.link && 'text-primary',
            )}
          >
            <Icon className='size-5' />
          </a>
        );
      })}
    </div>
  );
};
