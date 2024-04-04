import React from "react";
import schoolsLogo from "../../../assets/schools/schoolsonplatform.svg";
import PostingSchhools from "../../../assets/schools/posts.svg";
import wallet from "../../../assets/schools/wallet.svg";
import Add from "../../../assets/schools/add.svg";
import "./allSchools.css";
import MyTable from "./matAllSchoolsTable";

const AllSchools = () => {
  return (
    <>
      <div className="numbers">
        <div>
          <img src={schoolsLogo} alt="schoolLogpo" />
          <span className="figures"> 32806</span>
          <p>schools on platform</p>
        </div>
        <div>
          <img src={PostingSchhools} alt="schoolLogpo" />
          <span className="figures"> 32806</span>
          <p>Posting schools</p>
        </div>
        <div>
          <img src={PostingSchhools} alt="schoolLogpo" />
          <span className="figures"> 32806</span>
          <p>Average post per school</p>
        </div>
        <div>
          <img src={wallet} alt="schoolLogpo" />
          <span className="figures">ksh 32806</span>
          <p>Spend on post</p>
        </div>
      </div>

      <div className="schoolplatforms">
        <div className="schoo-info">
          <div className="">
            <h4>schools on platform</h4>
            <p>
              Explore and manage the profiles of schools which have signed up
              onto the platform
            </p>
          </div>
          <div className="register">
            <img src={Add} alt="add" className="add" />
            <p>Register School</p>
          </div>
        </div>
        <div className="table">
          <MyTable />
        </div>
      </div>
    </>
  );
};

export default AllSchools;
