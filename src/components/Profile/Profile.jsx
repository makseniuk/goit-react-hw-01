import styles from "./Profile.module.css"

const Profile = ({ name, tag, location, image, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <div className={styles.cardProfile}>
      <div className={styles.divImgProfile}>
        <img className={styles.imgProfile} src={image} alt="User avatar" />
        <p className={styles.nameProfile}>{name}</p>
        <p className={styles.tagProfile}>@{tag}</p>
        <p className={styles.locationProfile}>{location}</p>
      </div>

      <ul className={styles.listProfile}>
        <li className={styles.itemsListprofile}>
          <span className={styles.followersTextProfile}>Followers</span>
          <span className={styles.followersProfile}>{followers}</span>
        </li>
        <li className={styles.itemsListprofile}>
          <span className={styles.viewsTextProfile}>Views</span>
          <span className={styles.viewsProfile}>{views}</span>
        </li>
        <li className={styles.itemsListprofile}>
          <span className={styles.likesTextProfile}>Likes</span>
          <span className={styles.likesProfile}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;