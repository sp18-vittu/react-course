import "./error.css";
import ErrorImage from "../../assets/images/404 Error.jpg";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="error-page">
      <img src={ErrorImage} alt="Error" />
      <h1>Oops! The restaurant you're looking for can't be found.</h1>
      <h3>{err?.status + ":" + err?.statusText}</h3>
    </div>
  );
};
export default Error;
