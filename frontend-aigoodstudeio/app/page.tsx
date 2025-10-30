import LanguageToggle from '@/components/LanguageToggle';
import SystemStatus from '@/components/SystemStatus';
import { fetchJSON } from '@/lib/api';

async function getDashboardSummary() {
  try {
    const data = await fetchJSON('/dashboard/summary');
    return data;
  } catch (error) {
    return null;
  }
}

export default async function HomePage() {
  const summary = await getDashboardSummary();

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">منصة الانتخابات العراقية</h1>
          <p className="text-slate-600 max-w-2xl">
            لوحة تحكم موحدة تربط المحللين والمرشحين والناخبين عبر قنوات متعددة لتوفير رؤى لحظية حول المشاركة، الحملات، والحوكمة الرقمية.
          </p>
        </div>
        <LanguageToggle />
      </div>

      <SystemStatus />

      {summary ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {summary.metrics?.map((card: { label: string; value: string }, index: number) => (
            <article
              key={`${card.label}-${index}`}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <p className="text-sm font-medium text-slate-500">{card.label}</p>
              <p className="mt-2 text-2xl font-bold text-slate-900">{card.value}</p>
            </article>
          ))}
        </div>
      ) : (
        <p className="text-slate-600">لا تتوفر بيانات حالياً. تحقق من اتصالك بالخادم أو حاول لاحقاً.</p>
      )}
    </section>
  );
}
