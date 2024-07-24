import React from "react";

function page() {
  return (
    <>
      <div className="bg-namavaBlack rounded-md p-6 text-white">
        <div className="flex items-center justify-between">
          <h1 className="text-xl">اطلاعات شخصی</h1>
          <h6 className="text-namava">ویرایش اطلاعات</h6>
        </div>
        <div className="mt-8">
          <ul className="space-y-5 text-base">
            <li>
              <span className="text-[#d4d4d4]">نام : </span>
              <span>میلاد </span>
            </li>
            <li>
              <span className="text-[#d4d4d4]">نام خانوادگی : </span>
              <span>میلاد سلامیان </span>
            </li>

            <li>
              <span className="text-[#d4d4d4]">نام کاربری : </span>
              <span>milad1385</span>
            </li>
            <li>
              <span className="text-[#d4d4d4]">استان : </span>
              <span>کرج </span>
            </li>
            <li>
              <span className="text-[#d4d4d4]">تاریخ تولد : </span>
              <span>1385/03/19 </span>
            </li>
            <li>
              <span className="text-[#d4d4d4]">جنیست : </span>
              <span>مرد</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-namavaBlack rounded-md p-6 text-white mt-5 ">
        <div className="flex items-center justify-between">
          <h1 className="text-xl">اطلاعات کاربری</h1>
          <h6 className="text-namava">ویرایش اطلاعات کاربری</h6>
        </div>
        <div className="mt-8">
          <ul className="space-y-5 text-base">
            <li>
              <span className="text-[#d4d4d4]">شماره تلفن : </span>
              <span>09125237895 </span>
            </li>
            <li>
              <div>
                <span className="text-[#d4d4d4]">ایمیل</span>
                <span>milad@gmail.com</span>
              </div>
            </li>

            <li>
              <span className="text-[#d4d4d4]">رمز عبور : </span>
              <span>********</span>
            </li>
            <li>
              <span className="text-[#d4d4d4]">تعداد پروفایل : </span>
              <span>5 تا </span>
            </li>
            <li>
              <span className="text-[#d4d4d4]">تاریخ عضویت : </span>
              <span>1396/05/7 </span>
            </li>
            <li>
              <span className="text-[#d4d4d4]">ژانر مورد علاقه : </span>
              <span>اکشن و ماجراجویی</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default page;
