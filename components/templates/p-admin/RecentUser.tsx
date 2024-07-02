import React from "react";
import { FaEye, FaTrash } from "react-icons/fa6";

function RecentUser() {
  return (
    <div className="bg-namavaBlack rounded-md border border-gray-800 shadow py-6 px-6">
      <h2 className="text-xl pb-2">کاربران اخیر</h2>
      <div className="overflow-hidden max-h-[250px] overflow-y-auto table-container">
        <table className="w-full mt-5 recent-table">
          <thead>
            <tr>
              <td>شماره</td>
              <td>پروفایل</td>
              <td>نام</td>
              <td>تاریخ</td>
              <td>رویداد ها</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-Dana">1</td>
              <td>
                <img
                  src="/images/user.png"
                  className="w-10 h-10 rounded-full mx-auto"
                  alt=""
                />
              </td>
              <td>میلاد سلامیان</td>
              <td className="font-Dana">1403/04/08</td>
              <td className="flex items-center justify-center gap-x-4">
                <FaTrash className="mt-2.5 text-red-700" />
                <FaEye className="mt-2.5 text-namava md:cursor-pointer" />
              </td>
            </tr>
            <tr>
              <td className="font-Dana">2</td>
              <td>
                <img
                  src="/images/user.png"
                  className="w-10 h-10 rounded-full mx-auto"
                  alt=""
                />
              </td>
              <td>میلاد سلامیان</td>
              <td className="font-Dana">1403/04/08</td>
              <td className="flex items-center justify-center gap-x-4">
                <FaTrash className="mt-2.5 text-red-700" />
                <FaEye className="mt-2.5 text-namava md:cursor-pointer" />
              </td>
            </tr>
            <tr>
              <td className="font-Dana">3</td>
              <td>
                <img
                  src="/images/user.png"
                  className="w-10 h-10 rounded-full mx-auto"
                  alt=""
                />
              </td>
              <td>میلاد سلامیان</td>
              <td className="font-Dana">1403/04/08</td>
              <td className="flex items-center justify-center gap-x-4">
                <FaTrash className="mt-2.5 text-red-700" />
                <FaEye className="mt-2.5 text-namava md:cursor-pointer" />
              </td>
            </tr>
            <tr>
              <td className="font-Dana">4</td>
              <td>
                <img
                  src="/images/user.png"
                  className="w-10 h-10 rounded-full mx-auto"
                  alt=""
                />
              </td>
              <td>میلاد سلامیان</td>
              <td className="font-Dana">1403/04/08</td>
              <td className="flex items-center justify-center gap-x-4">
                <FaTrash className="mt-2.5 text-red-700" />
                <FaEye className="mt-2.5 text-namava md:cursor-pointer" />
              </td>
            </tr>
            <tr>
              <td className="font-Dana">5</td>
              <td>
                <img
                  src="/images/user.png"
                  className="w-10 h-10 rounded-full mx-auto"
                  alt=""
                />
              </td>
              <td>میلاد سلامیان</td>
              <td className="font-Dana">1403/04/08</td>
              <td className="flex items-center justify-center gap-x-4">
                <FaTrash className="mt-2.5 text-red-700" />
                <FaEye className="mt-2.5 text-namava md:cursor-pointer" />
              </td>
            </tr>
            <tr>
              <td className="font-Dana">6</td>
              <td>
                <img
                  src="/images/user.png"
                  className="w-10 h-10 rounded-full mx-auto"
                  alt=""
                />
              </td>
              <td>میلاد سلامیان</td>
              <td className="font-Dana">1403/04/08</td>
              <td className="flex items-center justify-center gap-x-4">
                <FaTrash className="mt-2.5 text-red-700" />
                <FaEye className="mt-2.5 text-namava md:cursor-pointer" />
              </td>
            </tr>
            <tr>
              <td className="font-Dana">7</td>
              <td>
                <img
                  src="/images/user.png"
                  className="w-10 h-10 rounded-full mx-auto"
                  alt=""
                />
              </td>
              <td>میلاد سلامیان</td>
              <td className="font-Dana">1403/04/08</td>
              <td className="flex items-center justify-center gap-x-4">
                <FaTrash className="mt-2.5 text-red-700" />
                <FaEye className="mt-2.5 text-namava md:cursor-pointer" />
              </td>
            </tr>
            <tr>
              <td className="font-Dana">8</td>
              <td>
                <img
                  src="/images/user.png"
                  className="w-10 h-10 rounded-full mx-auto"
                  alt=""
                />
              </td>
              <td>میلاد سلامیان</td>
              <td className="font-Dana">1403/04/08</td>
              <td className="flex items-center justify-center gap-x-4">
                <FaTrash className="mt-2.5 text-red-700" />
                <FaEye className="mt-2.5 text-namava md:cursor-pointer" />
              </td>
            </tr>
            <tr>
              <td className="font-Dana">9</td>
              <td>
                <img
                  src="/images/user.png"
                  className="w-10 h-10 rounded-full mx-auto"
                  alt=""
                />
              </td>
              <td>میلاد سلامیان</td>
              <td className="font-Dana">1403/04/08</td>
              <td className="flex items-center justify-center gap-x-4">
                <FaTrash className="mt-2.5 text-red-700" />
                <FaEye className="mt-2.5 text-namava md:cursor-pointer" />
              </td>
            </tr>
            <tr>
              <td className="font-Dana">10</td>
              <td>
                <img
                  src="/images/user.png"
                  className="w-10 h-10 rounded-full mx-auto"
                  alt=""
                />
              </td>
              <td>میلاد سلامیان</td>
              <td className="font-Dana">1403/04/08</td>
              <td className="flex items-center justify-center gap-x-4">
                <FaTrash className="mt-2.5 text-red-700" />
                <FaEye className="mt-2.5 text-namava md:cursor-pointer" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentUser;
