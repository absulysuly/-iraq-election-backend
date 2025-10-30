'use client';

import { useState } from 'react';

const supportedLanguages = [
  { code: 'ar', label: 'العربية' },
  { code: 'ku', label: 'كوردى' }
] as const;

export default function LanguageToggle() {
  const [language, setLanguage] = useState<string>(process.env.NEXT_PUBLIC_DEFAULT_LANG ?? 'ar');

  return (
    <div className="flex items-center gap-2">
      {supportedLanguages.map(option => {
        const isActive = option.code === language;
        return (
          <button
            key={option.code}
            type="button"
            onClick={() => setLanguage(option.code)}
            className={`rounded-full border px-4 py-1 text-sm font-medium transition-colors ${
              isActive
                ? 'border-primary bg-primary text-white shadow-sm'
                : 'border-slate-200 bg-white text-slate-700 hover:border-primary'
            }`}
            aria-pressed={isActive}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
