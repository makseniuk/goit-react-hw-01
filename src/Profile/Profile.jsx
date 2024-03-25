const Profile = ({ name, tag, location, image, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <div>
      <div className="divImgProfile">
        <img className="imgProfile" src={image} alt="User avatar" />
        <p className="nameProfile">{name}</p>
        <p className="tagProfile">@{tag}</p>
        <p className="locationProfile">{location}</p>
      </div>

      <ul className="listProfile">
        <li className="itemsListprofile">
          <span className="followersTextProfile">Followers</span>
          <span className="followersProfile">{followers}</span>
        </li>
        <li className="itemsListprofile">
          <span className="viewsTextProfile">Views</span>
          <span className="viewsProfile">{views}</span>
        </li>
        <li className="itemsListprofile">
          <span className="likesTextProfile">Likes</span>
          <span className="likesProfile">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;