import SocialProfile from "./components/SocialProfile/SocialProfile";
import user from "./components/SocialProfile/user.json";

export default function App() {
  return (
    <div>
      <SocialProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
}
