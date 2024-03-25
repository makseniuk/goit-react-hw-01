import Online from "./Online";

const FriendListItem = ({ friend }) => {
  const { avatar, name, isOnline} = friend;

  return (
    <div className="divitemsFriend">
      <img className="imgFriend" src={avatar} alt="Avatar" width="48" />
      <p className="nameFriend">{name}</p>
      <Online isOnline={isOnline} />
    </div>
  );
};

export default FriendListItem;