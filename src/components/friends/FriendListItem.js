import PropTypes from 'prop-types'
import {  ListItem, Status, IconTiWiFi } from './Friend.styled';

export function FriendListItem ({ avatar, name, isOnline, id }) {
    return (
        <ListItem>
            <Status isOnline={isOnline}>
                <IconTiWiFi isOnline={isOnline} />
            </Status>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name"> {name} </p>
        </ListItem>
    );
}

FriendListItem.propTypes = {
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired, 
        name: PropTypes.string.isRequired, 
        isOnline:PropTypes.bool.isRequired
      }