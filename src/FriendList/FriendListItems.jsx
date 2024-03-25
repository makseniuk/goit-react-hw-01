const FriendListItem = ({ friend }) => {
  const { avatar, name, isOnline } = friend;

  return (
    <div className="divitemsFriend">
      <img className="imgFriend" src={avatar} alt="Avatar" width="48" />
      <p className="nameFriend">{name}</p>
      <p className={isOnline ? 'online' : 'offline'}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;