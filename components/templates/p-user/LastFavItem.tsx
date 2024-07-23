import React from "react";

function LastFavItem() {
  return (
    <div className="text-white bg-[#121212] p-4 rounded-md flex items-center justify-between">
      <div className="space-y-3">
        <h4>کاپیتان آمریکا</h4>
        <div className="bg-white text-[#121212] flex-center py-2 rounded-md">
          اکشن
        </div>
      </div>
      <div className="text-center space-y-3">
        <h5 className="font-Dana">1403/05/02</h5>
        <p>سال ساخت : <span className="font-Dana">2024</span></p>
      </div>
    </div>
  );
}

export default LastFavItem;
