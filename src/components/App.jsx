import Profile from "./Profile/Profile";
import profileData from "./../userData.json";

import FriendList from "./FriendList/FriendList";

const App = () => {
  return (
    <div>
      <Profile user={profileData}></Profile>
      {/* <FriendList></FriendList> */}
    </div>
  );
};
export default App;
