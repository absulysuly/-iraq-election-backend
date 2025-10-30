'use client';

import { useEffect, useState } from 'react';

import { API_BASE } from '@/lib/api';

export default function SystemStatus() {
  const [status, setStatus] = useState<'loading' | 'ok' | 'error'>('loading');

  useEffect(() => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    fetch(`${API_BASE}/health`, {
      signal: controller.signal
    })
      .then(response => {
        setStatus(response.ok ? 'ok' : 'error');
      })
      .catch(() => {
        setStatus('error');
      })
      .finally(() => {
        clearTimeout(timeout);
      });

    return () => {
      controller.abort();
      clearTimeout(timeout);
    };
  }, []);

  if (status === 'loading') {
    return <p className="text-sm text-slate-600">🔄 جارِ فحص اتصال المنصة بالخلفية...</p>;
  }

  if (status === 'error') {
    return <p className="text-sm font-medium text-red-600">⚠️ لا يمكن الوصول إلى الخادم الخلفي حالياً</p>;
  }

  return <p className="text-sm font-medium text-green-600">✅ الخادم الخلفي متصل ويعمل بشكل سليم</p>;
}
