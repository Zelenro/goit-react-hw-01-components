import PropTypes from 'prop-types'
import { Friends } from './Friend.styled';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <div>
    <Friends>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} id={id} />
      ))}
    </Friends>
  </div>
  );
};


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired, 
      name: PropTypes.string.isRequired, 
      isOnline:PropTypes.bool.isRequired
    }).isRequired).isRequired}

