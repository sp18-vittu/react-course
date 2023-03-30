import { useContext } from "react";
import UserContext from "../../utils/UserContext";
import "./footer.css";
function Footer() {
  const { user } = useContext(UserContext);
  return (
    <div className="footer">
      Created By
      <a
        href="https://www.linkedin.com/in/vittu-singh-251159167/"
        target="_blank"
      >
        {user.name}
      </a>
      <strong>&copy; Food Villa</strong>
    </div>
  );
}

export default Footer;
