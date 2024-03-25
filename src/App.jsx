import './App.css'
import Profile from "../src/Profile/Profile";
import FriendList from "../src/FriendList/FriendList";
import TransactionHistory from "../src/TransactionHistory/TransactionHistory";
import userData from "../src/userData.json";
import friends from "../src/friends.json";
import transactions from  "../src/transactions.json"


  
const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App
