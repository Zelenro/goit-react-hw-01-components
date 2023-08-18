import { List, WrapperCard, Avatar, Description } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <WrapperCard>
      <Description>
        <Avatar src={avatar} alt={username} />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </Description>

      <List>
        <li>
          <span className="label">Followers</span>
          <span className="quantity"> {stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity"> {stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity"> {stats.likes}</span>
        </li>
      </List>
    </WrapperCard>
  );
};
