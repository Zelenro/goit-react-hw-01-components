export const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className="friend-list">
        {friends.map(friends => (
          <li key={friends.id} className="item">
            <span className="status">{friends.isOnline}</span>
            <img
              className="avatar"
              src={friends.avatar}
              alt={friends.name}
              width="48"
            />
            <p className="name"> {friends.name} </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
