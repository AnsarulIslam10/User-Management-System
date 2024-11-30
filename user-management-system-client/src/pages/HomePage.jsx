import React from "react";
import { FaPen, FaUser, FaX } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="max-w-7xl px-2 mx-auto">
      <div className="mt-16">
        <div>
          <Link
            to={"/users"}
            className="btn rounded-none shadow-md text-blue-600 bg-white"
          >
            New User
            <FaUser />
          </Link>
        </div>
        <div className="overflow-x-auto mt-6">
          <table className="table text-center">
            {/* head */}
            <thead className="bg-slate-800 text-white">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>asr@gmail.com</td>
                <td>Male</td>
                <td>Active</td>
                <td className="space-x-2">
                    <button className="text-blue-600 p-3 hover:shadow-sm shadow-md hover:bg-base-200">
                        <FaPen/>
                    </button>
                    <button className="text-blue-600 p-3 hover:shadow-sm shadow-md hover:bg-base-200">
                        <FaX/>
                    </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
