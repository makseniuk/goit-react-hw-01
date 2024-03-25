const Online = ({ isOnline, children }) => {

    return (
        <p className={isOnline ? "isOnline" : "offline"}>
            {children}
            {isOnline ? "Online" : "Offline"}
        </p>
    );
}

export default Online;