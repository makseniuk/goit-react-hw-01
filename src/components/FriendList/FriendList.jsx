import styles from "./FriendList.module.css";
import FriendListItem from './FriendListItems';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.listFriend}>
      {friends.map((friend) => (
        <li className={styles.itemsListFriend} key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;