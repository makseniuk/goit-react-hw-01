import FriendListItem from './FriendListItems';

const FriendList = ({ friends }) => {
  return (
    <ul className='listFriend'>
      {friends.map((friend) => (
        <li className='itemsListFriend' key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;