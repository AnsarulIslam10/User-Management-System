import React, { useState } from "react";
import { FaPen, FaUser, FaX } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const HomePage = () => {
  const loadedUser = useLoaderData();
  const [users, setUsers] = useState(loadedUser);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://user-management-system-server-tawny.vercel.app/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "User has been deleted.",
                icon: "success",
              });
              const remaining = users.filter((user) => user._id !== id);
              setUsers(remaining);
            }
          });
      }
    });
  };

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
              {users?.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>{user.status}</td>
                  <td className="space-x-2">
                    <button className="text-blue-600 p-3 hover:shadow-sm shadow-md hover:bg-base-200">
                      <FaPen />
                    </button>
                    <button onClick={()=> handleDelete(user._id)} className="text-blue-600 p-3 hover:shadow-sm shadow-md hover:bg-base-200">
                      <FaX />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
