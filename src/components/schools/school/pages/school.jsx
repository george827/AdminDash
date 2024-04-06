import React from "react";
import "./school.scss";
import { Link } from 'react-router-dom';
import { useState } from "react";

const School = () => {
    const [isactive, setisactive] = useState(true);
    

  return (
    <>
      <div className="main">
        <div className="nav">
            <div>
            <p>
            Merishaw International School
            </p>
            <span className="status">
                { isactive ? (
                    <span className="active">Active</span>
                ) : (
                    <span className="inactive">Inactive</span>
                )}
            </span>

            </div>

        </div>

      </div>
    </>
  );
};

export default School;