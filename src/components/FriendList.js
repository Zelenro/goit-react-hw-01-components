// import { IconName } from 'react-icons/hi';

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

// function getRandomColor() {
//   const letters = '0123456789ABCDEF';
//   let color = '#';
//   for (let i = 0; i < 6; i=+1) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }
