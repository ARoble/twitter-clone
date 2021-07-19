const Profile = ({ value, src }) => {
  return <img className={value} src={src} alt="Profile image" />;
};

Profile.propTypes = {
  src: "/profile.jpg",
};
export default Profile;
