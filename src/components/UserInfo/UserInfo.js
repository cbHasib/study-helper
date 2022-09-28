import React from "react";
import "./UserInfo.css";

import idImage from "../../images/id.svg";
import userImage from "../../images/Hasib.jpg";

const UserInfo = () => {
  return (
    <div>
      <div className="flex items-center space-x-3">
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12 ">
            <img src={userImage} alt="Avatar of user" />
          </div>
        </div>
        <div>
          <div className="font-bold">Hasibul Hasan</div>
          <div className="text-sm opacity-50 flex justify-left items-center gap-1">
            <img className="h-5 inline" src={idImage} alt="ID Card Logo" />{" "}
            <span className="font-bold">ID:</span> 2110627158
          </div>
        </div>
      </div>

      <div className="user-meta p-4 rounded-xl my-8 shadow">
        <div className="mx-auto text-center">
          <p className="text-[#9DACC1]">
            <span className="font-bold text-2xl text-[#191C32]">75</span>hr
          </p>
          <p>Read</p>
        </div>

        <div className="mx-auto text-center">
          <p className="text-[#9DACC1]">
            <span className="font-bold text-2xl text-[#191C32]">80</span>%
          </p>
          <p>Progress</p>
        </div>

        <div className="mx-auto text-center">
          <p className="text-[#9DACC1]">
            <span className="font-bold text-2xl text-[#191C32]">92</span>%
          </p>
          <p>Exam</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;