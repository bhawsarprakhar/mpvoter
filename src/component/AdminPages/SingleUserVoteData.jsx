import BrandExample from "../Header/Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useLocation, useNavigate, Link } from "react-router-dom";
import AdminHeader from "./AdminHeader";

const SingleUserVoteData = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const additionalData = location?.state;
  console.log(location);
  console.log(additionalData);
  const { email } = useParams();
  //   console.log(email);
  const [userVotingData, setUserVotingData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    uservoting();
    if (!localStorage.getItem("Admin")) {
      navigate("/auth/admin");
    }
  }, []);

  const uservoting = async () => {
    setLoading(true);
    try {
      const url = "https://backlaravel.mpvoter.com/api/verify_with_login";
      const res = await axios.get(url);
      setUserVotingData(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const filteredItems = userVotingData?.filter(
    (item) => item.voter_name === email
  );
  console.log(filteredItems);
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
        <div>
          {filteredItems?.length > 0 ? (
            <div className="container">
              <div className="box-bg">
                <table className="table">
                  {filteredItems?.map((votingData, n) => (
                    <div key={votingData?.id}>
                      <tr className="d-flex">
                        <th className="w-30">Email</th>
                        <td className="w-70">{votingData?.voter_name}</td>
                      </tr>
                      <tr className="d-flex">
                        <th className="w-30">District</th>
                        <td className="w-70">{votingData?.voter_district}</td>
                      </tr>
                      <tr className="d-flex">
                        <th className="w-30">Assembly</th>
                        <td className="w-70">{votingData?.voter_assembly}</td>
                      </tr>
                      <tr className="d-flex">
                        <th className="w-30">Party</th>
                        <td className="w-70">
                          {votingData?.voter_partie_support}
                        </td>
                      </tr>
                      <tr className="d-flex">
                        <th className="w-30">Feedback</th>
                        <td className="w-70">{votingData?.voter_content}</td>
                      </tr>
                      <tr className="d-flex">
                        <th className="w-30">Voting Time</th>

                        <td className="w-70">
                          {new Date(votingData?.created_at).toLocaleString()}
                        </td>
                      </tr>
                    </div>
                  ))}
                </table>
                <div>
                  <p className="have-acc">
                    Back to{" "}
                    <Link to={"/auth/admin/registered-user"}>
                      Registered Users
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="container">
              <div className="box-bg">
                <h2>The user hasn't voted yet.</h2>
                <div>
                  <p className="have-acc">
                    Back to{" "}
                    <Link to={"/auth/admin/registered-user"}>
                      Registered Users
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};
export default SingleUserVoteData;
