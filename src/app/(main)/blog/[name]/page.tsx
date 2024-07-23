import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLink, FaTelegram, FaTwitter, FaWhatsapp } from "react-icons/fa6";

function ArticlePage() {
  return (
    <div className="max-w-[800px] mx-auto shadow-2xl bg-namavaBlack text-white my-28 rounded-md">
      <h3 className="text-base md:text-xl font-IranMedium p-5">
        «شوگان»؛ نگاه تازه‌ به یک داستان ماندگار
      </h3>
      <Image
        src={"/images/article/shogan.jpg"}
        width={1920}
        height={1080}
        alt="shogan.jpg"
      />
      <div className="p-5">
        {/* author info */}
        <div className="flex items-center gap-x-4 text-xs">
          <Image
            src="/images/user.png"
            alt="user.png"
            width={1920}
            height={1080}
            className="md:w-10 w-8 h-8 md:h-10 rounded-full"
          />
          <div className="flex items-center flex-wrap gap-y-2 gap-x-2">
            <span>نویسنده : </span>
            <Link href="/" className="text-namava">
              میلاد سلامیان
            </Link>
            <span> - 28 تیر 1403</span>
            <span> - 12:52 ب.ظ</span>
            <span className="block w-px h-4 bg-slate-400"></span>
            <span>زمان مطالعه : </span>
            <span>10 دقیقه</span>
          </div>
        </div>

        <Link
          href="/movie/1"
          className="border flex-center w-[180px] text-sm text-namava hover:bg-namava transition-all hover:text-white border-namava px-2 py-2 rounded-md mt-5"
        >
          تماشا روزهای عالی در نماوا
        </Link>

        <h3 className="font-IranMedium my-8">مجله نماوا ، میلاد سلامیان</h3>

        <div className="article-content">
          <p>
            در اوایل دوران رونق مجموعه‌های تلویزیونی کوتاه، «شوگان» سریال مطرح
            سال ۱۹۸۰ بود و شاید ۴۴ سال بعد همچنان باشد. حالا سریال شوگان
            (Shōgun)، نسخه به‌روز و فاخر رمان جامع جیمز کلاول، ترکیبی
            سرمست‌کننده از اکشن، عاشقانه و دسیسه سیاسی را در هم می‌آمیزد،
            شکوهمندانه در ۱۰ اپیزود پخش می‌کند و برخلاف غالب سریال‌های کوتاه،
            این وزن را محفوظ نگه می‌دارد.
          </p>

          <p>
            داستان در ژاپن فئودال در آغاز قرن هفدهم روی می‌دهد و با یک کشتی
            اروپایی آغاز می‌شود که با هدایت جان بلک‌تورن (کازمو جارویس)،
            سکان‌دار انگلیسی به یک روستای ساحلی که ماهیگیری در آن رواج دارد،
            می‌رسد.
          </p>

          <p>
            درحالی‌که پیش‌ازاین بازرگانان پرتغالی و مبلغان یسوعی به ژاپن
            آمده‌اند و کشور را به امپراتوری مخفی پرتغال در شرق تبدیل کرده‌اند،
            مردم محلی نگران حضور مهاجمان «بربر» هستند و در صحنه‌هایی که بسیار
            فراتر از استانداردهای یک مجموعه تلویزیونی در ۱۹۸۰ است، رفتاری
            وحشیانه با آن‌ها دارند.
          </p>

          <img src="/images/article/ar10.jpg" />
        </div>
        {/* tags */}
          <div className="text-sm flex items-center flex-wrap gap-x-4 mb-6">
            <span className="font-IranMedium">واژگان کلیدی : </span>
            <p className="text-xs/[26px]">میلاد سلامیان ، هیرو احمدی ، کیومرث رضوی ، جلال رضوی ، مهدی سلامیان</p>
          </div>
        {/* share */}
        <div className="text-sm flex md:items-center gap-4 flex-col md:flex-row">
          <span className="text-sm">اشتراک گذاری : </span>
          <div className="flex items-center flex-wrap gap-4">
            <div className="bg-[#121212] w-[120px] flex-center gap-x-2 py-3 rounded-md cursor-pointer">
              <FaTelegram className="text-xl" />
              تلگرام
            </div>
            <div className="bg-[#121212] w-[120px] flex-center gap-x-2 py-3 rounded-md cursor-pointer">
              <FaWhatsapp className="text-xl" />
              واتس اپ
            </div>
            <div className="bg-[#121212] w-[120px] flex-center gap-x-2 py-3 rounded-md cursor-pointer">
              <FaTwitter className="text-xl" />
              توییتر
            </div>
            <div className="bg-[#121212] w-[120px] flex-center gap-x-2 py-3 rounded-md cursor-pointer">
              <FaLink className="text-xl" />
              ارسال لینک
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticlePage;
