import { Routes, Route } from 'react-router-dom';

// Placeholder components (will be built in Week 4)
const Dashboard = () => <div className="p-8"><h1 className="text-3xl font-bold">Civic Dashboard</h1><p>Coming soon...</p></div>;
const Governorates = () => <div className="p-8"><h1 className="text-3xl font-bold">Governorates</h1><p>Coming soon...</p></div>;
const GovernorateDetail = () => <div className="p-8"><h1 className="text-3xl font-bold">Governorate Detail</h1><p>Coming soon...</p></div>;
const Parties = () => <div className="p-8"><h1 className="text-3xl font-bold">Parties</h1><p>Coming soon...</p></div>;
const PartyDetail = () => <div className="p-8"><h1 className="text-3xl font-bold">Party Detail</h1><p>Coming soon...</p></div>;
const Report = () => <div className="p-8"><h1 className="text-3xl font-bold">Report Violation</h1><p>Coming soon...</p></div>;

export default function CivicApp() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/governorates" element={<Governorates />} />
        <Route path="/governorates/:slug" element={<GovernorateDetail />} />
        <Route path="/parties" element={<Parties />} />
        <Route path="/parties/:id" element={<PartyDetail />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </div>
  );
}
