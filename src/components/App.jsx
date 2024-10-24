import Profile from "./Profile/Profile";
import profileData from "./../userData.json";

import FriendList from "./FriendList/FriendList";
import friends from "./../friends.json";

const App = () => {
  return (
    <div>
      <Profile user={profileData}></Profile>
      <FriendList friends={friends}></FriendList>
    </div>
  );
};
export default App;
