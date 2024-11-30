import React from "react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const AddUser = () => {
    const navigate = useNavigate()
  const handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const gender = e.target.gender.value;
    const status = e.target.status.value;
    console.log(name, email, gender, status);

    const newUser = { name, email, gender, status };
    fetch("https://user-management-system-server-tawny.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
            Swal.fire({
                title: "Congrats!!",
                text: "User Added Successfully",
                icon: "success"
              });
              navigate('/')
        }
      }).catch(error=>console.log(error))
  };
  return (
    <div className="max-w-7xl mx-auto px-2 mt-16">
      <Link
        to={"/"}
        className="flex items-center text-xl font-semibold text-blue-600"
      >
        <MdKeyboardDoubleArrowLeft /> All Users
      </Link>

      <div className="flex justify-center items-center mt-10">
        <div className="bg-white rounded-lg p-8 w-full max-w-5xl">
          <h2 className="text-2xl font-bold text-center mb-2">New User</h2>
          <p className="text-gray-500 text-center mb-6">
            Use the below form to create a new account
          </p>
          <form onSubmit={handleAddUser}>
            {/* Name Field */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered w-full"
              />
            </div>
            {/* Email Field */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
              />
            </div>
            {/* Gender Radio Buttons */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Gender</label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value={'Male'}
                    className="radio radio-primary"
                  />
                  <span className="ml-2">Male</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value={"Female"}
                    className="radio radio-primary"
                    defaultChecked
                  />
                  <span className="ml-2">Female</span>
                </label>
              </div>
            </div>
            {/* Status Radio Buttons */}
            <div className="mb-6">
              <label className="block text-gray-700 mb-1">Status</label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="status"
                    value={'Active'}
                    className="radio radio-success"
                    defaultChecked
                  />
                  <span className="ml-2">Active</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="status"
                    value={'Inactive'}
                    className="radio radio-success"
                  />
                  <span className="ml-2">Inactive</span>
                </label>
              </div>
            </div>
            {/* Save Button */}
            <div>
              <button type="submit" className="btn bg-[#17C38D] w-full">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
