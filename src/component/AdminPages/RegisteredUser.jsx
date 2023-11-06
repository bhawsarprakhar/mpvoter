import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import AdminHeader from "./AdminHeader";

const RegisteredUser = () => {
  const [registeredUser, setRegisteredUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    user();
    if (!localStorage.getItem("Admin")) {
      navigate("/auth/admin");
    }
  }, []);

  const user = async () => {
    setLoading(true);
    axios
      .get("https://backlaravel.mpvoter.com/api/user_register_data")
      .then((response) => {
        setRegisteredUser(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      <AdminHeader />
      {loading ? (
        <div className="col-12 m-auto col-lg-8 voting-form">
          <div className="skeleton-content">
            <div className="skeleton-header"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-text"></div>
          </div>
        </div>
      ) : (
        <div className="container overflow-auto">
          <table className="table box-bg">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone No.</th>
                <th scope="col">Status</th>
                <th scope="col">Registered</th>
                <th scope="col">Detail</th>
              </tr>
            </thead>
            <tbody>
              {registeredUser?.map((user, n) => (
                <tr key={user?.id}>
                  <th scope="row">{n + 1}.</th>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>{user?.phone}</td>
                  <td>{user?.status}</td>
                  <td>{new Date(user?.created_at).toLocaleString()}</td>
                  <td className="btn btn-primary btn-lg botton-shadow">
                    <Link
                      to={{
                        pathname: `/auth/admin/voting-detail/${user?.email}`,
                        state: { additionalData: user },
                      }}
                    >
                      Detail
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
export default RegisteredUser;
