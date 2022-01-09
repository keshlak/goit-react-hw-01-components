import PropTypes from "prop-types";
import defaultImage from "./user.jpg";
import { Item, Status, Avatar, Name } from "./FriendList.styled";

const FriendListItem = ({ friends }) =>
  friends.map(({ id, avatar, name, isOnline }) => (
    <Item key={id}>
      <Status type={isOnline}>{isOnline}</Status>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Item>
  ));

FriendListItem.defaultProps = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: defaultImage,
    })
  ),
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default FriendListItem;
