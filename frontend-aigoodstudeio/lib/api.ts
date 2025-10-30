const normalizeBaseUrl = (value?: string): string | undefined => {
  if (!value) {
    return undefined;
  }

  if (value.endsWith('/')) {
    return value.slice(0, -1);
  }

  return value;
};

const publicApiUrl = normalizeBaseUrl(process.env.NEXT_PUBLIC_API_URL);
const publicBackendUrl = normalizeBaseUrl(process.env.NEXT_PUBLIC_BACKEND_URL);

export const API_BASE =
  publicApiUrl ?? (publicBackendUrl ? `${publicBackendUrl}/api` : 'http://localhost:4000/api');

export async function fetchJSON<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers ?? {})
    },
    cache: 'no-store',
    ...init
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return (await response.json()) as T;
}
