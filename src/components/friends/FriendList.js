import { Friends, ListItem, Status } from './Friend.styled';
import { FaBeer } from 'react-icons/fa';

export const FriendList = ({ friends }) => {
  return (
    <div>
      <Friends>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <ListItem key={id}>
            <Status isOnline={isOnline}>
              <FaBeer />
            </Status>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name"> {name} </p>
          </ListItem>
        ))}
      </Friends>
    </div>
  );
};
