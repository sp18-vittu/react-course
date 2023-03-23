import "./profile.css";
import ProfilePhoto from "../../assets/images/Profile_Photo.jpg";
const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-image-container">
        <img src={ProfilePhoto} alt="profile-photo" />
      </div>
      <h4 className="profile-name">Vittu Singh</h4>
      <h5 className="profile-designation">Frontend Engineeer</h5>
    </div>
  );
};
export default Profile;
