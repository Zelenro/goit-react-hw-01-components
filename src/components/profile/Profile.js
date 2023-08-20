import PropTypes from 'prop-types'
import {
  List,
  WrapperCard,
  Avatar,
  Description,
  ListItem,
} from './Profile.styled';

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
        <ListItem>
          <span className="label">Followers</span>
          <span className="quantity"> {stats.followers}</span>
        </ListItem>
        <ListItem>
          <span className="label">Views</span>
          <span className="quantity"> {stats.views}</span>
        </ListItem>
        <ListItem>
          <span className="label">Likes</span>
          <span className="quantity"> {stats.likes}</span>
        </ListItem>
      </List>
    </WrapperCard>
  );
};

Profile.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired, 
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired, 
      stats:PropTypes.shape(PropTypes.shape({followers: PropTypes.number.isRequired, views: PropTypes.number.isRequired, likes:PropTypes.number.isRequired})).isRequired
    }).isRequired).isRequired}