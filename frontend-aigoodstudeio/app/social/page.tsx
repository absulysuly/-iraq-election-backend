import SystemStatus from '@/components/SystemStatus';

export default function SocialPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold text-primary">الرصد الاجتماعي</h1>
      <p className="text-slate-600 max-w-2xl">
        تابع المحتوى المتداول، التفاعلات، وتأثير الحملات الرقمية في الوقت الفعلي.
      </p>
      <SystemStatus />
      <div className="rounded-xl border border-dashed border-slate-300 bg-white p-6 text-slate-500">
        سيتم ربط هذه الصفحة بمولدات المحتوى الذكية وقواعد بيانات بريزما عند تفعيل الإنتاج.
      </div>
    </section>
  );
}
