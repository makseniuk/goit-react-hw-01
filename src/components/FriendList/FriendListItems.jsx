import styles from "./FriendList.module.css"
import Online from "./Online";

const FriendListItem = ({ friend }) => {
  const { avatar, name, isOnline} = friend;

  return (
    <div className={styles.divitemsFriend}>
      <img className={styles.imgFriend} src={avatar} alt="Avatar" width="48" />
      <p className={styles.nameFriend}>{name}</p>
      <Online isOnline={isOnline} />
    </div>
  );
};

export default FriendListItem;