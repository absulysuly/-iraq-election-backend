'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

import LanguageToggle from './LanguageToggle';
import SystemStatus from './SystemStatus';

const links = [
  { href: '/', label: 'الرئيسية' },
  { href: '/social', label: 'الرصد الاجتماعي' },
  { href: '/governorates', label: 'المحافظات' }
] as const;

export default function TopNavBar() {
  const pathname = usePathname();

  const activeHref = useMemo(() => {
    if (pathname === '/') {
      return pathname;
    }

    const match = links.find(link => pathname.startsWith(link.href) && link.href !== '/');
    return match?.href ?? '/';
  }, [pathname]);

  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
      <nav className="container mx-auto flex flex-wrap items-center justify-between gap-4 px-4 py-3">
        <div className="flex flex-col gap-1">
          <Link href="/" className="text-xl font-semibold text-primary">
            منصة الانتخابات العراقية
          </Link>
          <SystemStatus />
        </div>
        <ul className="flex flex-wrap items-center gap-3 text-sm font-medium">
          {links.map(link => {
            const isActive = activeHref === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`rounded-full px-3 py-1 transition-colors ${
                    isActive
                      ? 'bg-primary text-white shadow-sm'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <LanguageToggle />
      </nav>
    </header>
  );
}
