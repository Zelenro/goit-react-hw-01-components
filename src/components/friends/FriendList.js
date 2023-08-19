import { Friends, ListItem, Status, IconTiWiFi } from './Friend.styled';

export const FriendList = ({ friends }) => {
  return (
    <div>
      <Friends>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <ListItem key={id}>
            <Status isOnline={isOnline}>
              <IconTiWiFi isOnline={isOnline}/>
            </Status>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name"> {name} </p>
          </ListItem>
        ))}
      </Friends>
    </div>
  );
};
