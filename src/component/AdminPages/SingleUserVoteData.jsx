import BrandExample from "../Header/Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
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
        <div className="container">
          <table className="table sign-bg voting-detail">
            {filteredItems?.map((votingData, n) => (
              <div key={votingData?.id}>
                <tr>
                  <th>Email</th>
                  <td>{votingData?.voter_name}</td>
                </tr>
                <tr>
                  <th>District</th>
                  <td>{votingData?.voter_district}</td>
                </tr>
                <tr>
                  <th>Assembly</th>
                  <td>{votingData?.voter_assembly}</td>
                </tr>
                <tr>
                  <th>Party</th>
                  <td>{votingData?.voter_partie_support}</td>
                </tr>
                <tr>
                  <th>Feedback</th>
                  <td>{votingData?.voter_content}</td>
                </tr>
                <tr>
                  <th>Time</th>
                  <td>
                    <td>{new Date(votingData?.created_at).toLocaleString()}</td>
                  </td>
                </tr>
              </div>
            ))}
          </table>
        </div>
      )}
    </>
  );
};
export default SingleUserVoteData;
