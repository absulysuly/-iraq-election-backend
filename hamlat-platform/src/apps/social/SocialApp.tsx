import { Routes, Route } from 'react-router-dom';

// Placeholder components (will be built in Week 2)
const Feed = () => <div className="p-8"><h1 className="text-3xl font-bold">Social Feed</h1><p>Coming soon...</p></div>;
const Profile = () => <div className="p-8"><h1 className="text-3xl font-bold">Profile</h1><p>Coming soon...</p></div>;
const Reels = () => <div className="p-8"><h1 className="text-3xl font-bold">Reels</h1><p>Coming soon...</p></div>;
const Events = () => <div className="p-8"><h1 className="text-3xl font-bold">Events</h1><p>Coming soon...</p></div>;
const Debates = () => <div className="p-8"><h1 className="text-3xl font-bold">Debates</h1><p>Coming soon...</p></div>;
const Articles = () => <div className="p-8"><h1 className="text-3xl font-bold">Articles</h1><p>Coming soon...</p></div>;

export default function SocialApp() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/reels" element={<Reels />} />
        <Route path="/events" element={<Events />} />
        <Route path="/debates" element={<Debates />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </div>
  );
}
