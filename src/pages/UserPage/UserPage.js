import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function UserPage() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/userpage");
    }, 2000);
  }, []);
  return (
    <div id="users_page">
      <h1 id="title_page">User Page</h1>
    </div>
  );
}
