import EmptyImg from "@mfc/assests/images/practice/404.png";

const Empty = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center p-8">
      <img
        className="max-w-[432px] w-full"
        src={EmptyImg.src}
        alt="Not Found"
      />
      <p className="text-20-28 font-medium text-black-0.85 pt-4 pb-2">
        Danh sách trống
      </p>
      <p className="text-14-22 text=black-0.85 font-normal">
        Hiện chưa có kết quả nào phù hợp với tìm kiếm của bạn
      </p>
    </div>
  );
};

export default Empty;
