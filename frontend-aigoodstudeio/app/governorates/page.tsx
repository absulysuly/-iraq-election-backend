import { fetchJSON } from '@/lib/api';

interface GovernorateSummary {
  slug: string;
  name: string;
  turnout: number;
  seats: number;
}

async function loadGovernorates(): Promise<GovernorateSummary[]> {
  try {
    return await fetchJSON<GovernorateSummary[]>('/governorates/summary');
  } catch (error) {
    return [];
  }
}

export default async function GovernoratesPage() {
  const governorates = await loadGovernorates();

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-primary">لوحة المحافظات</h1>
          <p className="text-slate-600">
            تحليل ميداني لمؤشرات المشاركة والمقاعد البرلمانية بحسب كل محافظة عراقية.
          </p>
        </div>
      </div>

      {governorates.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {governorates.map(governorate => (
            <article
              key={governorate.slug}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-slate-900">{governorate.name}</h2>
              <dl className="mt-3 space-y-1 text-sm text-slate-600">
                <div className="flex items-center justify-between">
                  <dt>نسبة المشاركة</dt>
                  <dd>{governorate.turnout}%</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt>عدد المقاعد</dt>
                  <dd>{governorate.seats}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      ) : (
        <p className="text-slate-600">
          لا توجد بيانات جاهزة حالياً. عند تفعيل اتصال بريزما سيتم عرض المؤشرات هنا مباشرة.
        </p>
      )}
    </section>
  );
}
