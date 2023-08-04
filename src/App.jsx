import FriendList from "./components/FriendList/FriendList.jsx";
import { Container } from "components/App/app.styled";
import friends from "./components/FriendList/friends.json";
import { Profile } from "./components/Profile/Profile.jsx";
import user from "./components/Profile/user.json";


export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {/* <Statistics data={data}/> */}
      <FriendList friends={friends} />
      {/* <TransactionsHistory items={items}/> */}
    </Container>
  );
};