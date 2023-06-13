import React from "react";
import Image from "next/image";
import ArrowRightSmall from "@mfc/assests/images/landing-page/arrow_right_small.svg";
import Category01 from "@mfc/assests/images/landing-page/category_01.svg";
import Category02 from "@mfc/assests/images/landing-page/category_02.svg";
import Category03 from "@mfc/assests/images/landing-page/category_03.svg";
import Category04 from "@mfc/assests/images/landing-page/category_04.svg";
import Category05 from "@mfc/assests/images/landing-page/category_05.svg";
import Category06 from "@mfc/assests/images/landing-page/category_06.png";

const Categories = () => {
  const categories: Array<any> = [
    {
      image: Category01,
      title: "Toán học",
      norm: "359 + Giáo viên",
    },
    {
      image: Category02,
      title: "Tiếng Việt",
      norm: "276 + Giáo viên",
    },
    {
      image: Category03,
      title: "Ngoại ngữ",
      norm: "520 + Giáo viên",
    },
    {
      image: Category04,
      title: "Vật lý",
      norm: "276 +  Giáo viên",
    },
    {
      image: Category05,
      title: "Hóa học",
      norm: "231 + Giáo viên",
    },
    {
      image: Category06,
      title: "Sinh học",
      norm: "178 + Giáo viên",
    },
  ];
  return (
    <div className="w-full flex items-center flex-col py-10 px-4">
      <h2 className="text-subtitle text-48-72 font-bold text-center">
        Tìm kiếm giáo viên phù hợp
      </h2>
      <p className="text-gray-5c5c5c text-20-28 mt-4 font-medium text-center">
        5130+ giáo viên giàu kinh nghiệm từ các trường điểm và trường chuyên
        trên toàn quốc
      </p>
      <div className="m-auto mt-8 w-10/12 grid lg:grid-cols-3 md:grid-cols-2 gap-[32px]">
        {categories.map((category: any) => (
          <section
            key={category.title}
            className="flex items-center gap-[20px] p-4 bg-[#f5f5f5] col-span-1 rounded-[8px]"
          >
            <Image src={category.image} width={70} height={70} alt="icon" />
            <div className="flex flex-col items-start">
              <h5 className="text-[#021628] text-20-28 font-bold">
                {category.title}
              </h5>
              <p className="text-black-0.85 text-20-22 font-normal">
                {category.norm}
              </p>
            </div>
          </section>
        ))}
      </div>
      <div className="mt-9 flex gap-[20px] text-main-1 m-auto items-center cursor-pointer">
        <p className="text-16-24 font-medium">Xem thêm các khóa học</p>
        <Image src={ArrowRightSmall.src} width={40} height={40} alt={"back"} />
      </div>
    </div>
  );
};

export default Categories;
