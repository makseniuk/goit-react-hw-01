import styles from "./FriendList.module.css"

const Online = ({ isOnline, children }) => {

    return (
        <p className={isOnline ? styles.isOnline : styles.offline}>
            {children}
            {isOnline ? "Online" : "Offline"}
        </p>
    );
}

export default Online;