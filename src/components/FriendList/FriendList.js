import FriendListItem from "./FrienListItem";
import { List } from "./FriendList.styled";

function FriendList({ friends }) {
  return (
    <List>
      <FriendListItem friends={friends} />
    </List>
  );
}

export default FriendList;
