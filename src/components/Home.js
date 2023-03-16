import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  BsArrowLeftCircleFill,
  BsArrowRightCircleFill,
  BsBusFront,
  BsFillCarFrontFill,
  BsShieldFillCheck,
  BsTicketPerforatedFill,
} from "react-icons/bs";
import {
  MdAirplanemodeActive,
  MdCheckCircle,
  MdOutlineStar,
  MdTrain,
} from "react-icons/md";
import { FaUtensils } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="pt-44 mx-auto w-10/12 h-max">
      <div className="shadow-md rounded-sm">
        <Swiper
          className="relative group"
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          loop={true}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            nextEl: ".button-next-slide",
            prevEl: ".button-prev-slide",
          }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className="image relative">
              <img src={require("../assets/bg1.jpg")} />
              <div className="hidden lg:block absolute left-20 top-[50%] bottom-0 text-white text-md">
                <h3 className="text-[20px]">GreenHouse</h3>
                <h3 className="text-[40px] font-[500] space-y-3">
                  Du lịch miền núi
                </h3>
                <p className="text-[14px] w-[40%]">
                  Chinh phục những ngọn núi cao và vượt qua những cánh rừng
                  thiên nhiên bạt ngàn luôn có sức hút mạnh mẽ với những người
                  yêu du lịch. Không thua kém những danh thắng nổi tiếng trên
                  thế giới, Việt Nam có vị trí địa lý hài hòa giữa vùng núi và
                  miền biển nên sở hữu rất nhiều điểm du lịch đẹp mê đắm lòng
                  người.
                </p>
                <button className="px-[1rem] p-1 button">Chi tiết</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image relative">
              <img src={require("../assets/bg3.jpg")} />
              <div className="hidden lg:block absolute left-20 top-[50%] bottom-0 text-white text-md">
                <h3 className="text-[20px]">GreenHouse</h3>
                <h3 className="text-[40px] font-[500] space-y-3">
                  Du lịch biển
                </h3>
                <p className="text-[14px] w-[40%]">
                  Điểm cộng cho những bãi biển tại Việt Nam đó chính là có thời
                  tiết khí hậu quanh năm khá mát mẻ, trong lành và ôn hòa. Vì
                  vậy, du khách hoàn toàn có thể lên lịch trình du lịch biển vào
                  bất cứ thời điểm nào trong năm dù là du lịch biển miền Bắc hay
                  du lịch biển miền Trung
                </p>
                <button className="px-[1rem] p-1 button">Chi tiết</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image relative">
              <img src={require("../assets/bg2.jpg")} />
              <div className="hidden lg:block absolute left-20 top-[50%] bottom-0 text-white text-md">
                <h3 className="text-[20px]">GreenHouse</h3>
                <h3 className="text-[40px] font-[500] space-y-3">
                  Du lịch miền quê
                </h3>
                <p className="text-[14px] w-[40%]">
                  Những năm gần đây, du lịch trải nghiệm tại các làng quê ở Việt
                  Nam đang có sức hấp dẫn lớn đối với khách du lịch trong nước
                  và đặc biệt là với du khách quốc tế. Những chuyến du lịch điền
                  dã đến những vùng danh lam thắng cảnh đã trở thành những tua
                  du lịch được ngành du lịch các địa phương khai thác.
                </p>
                <button className="px-[1rem] p-1 button">Chi tiết</button>
              </div>
            </div>
          </SwiperSlide>
          <div className="top-[43%]  absolute z-10 button-next-slide group-hover:left-0 -left-[23rem] duration-500 text-sky-600 text-5xl w-[40px] h-[40px] bg-blend-normal">
            <BsArrowLeftCircleFill />
          </div>
          <div className="top-[43%]  absolute z-10 button-prev-slide group-hover:right-2 -right-[23rem] duration-500 text-sky-600 text-5xl w-[40px] h-[40px] bg-blend-normal">
            <BsArrowRightCircleFill />
          </div>
        </Swiper>
      </div>

      <div className="my-4 flex flex-col sm:flex-row flex-wrap justify-center md:justify-between">
        <div className="single-banner shadow-sm mb-4 w-full md:w-[32%] shadow-md">
          <img
            src="https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_960_720.jpg"
            alt=""
          />
          <div className="banner-content w-40 md:w-48 flex items-center justify-center">
            <div className="banner-title">Du lịch biển đảo</div>
          </div>
          <div className="hover_banner"></div>
        </div>
        <div className="single-banner shadow-sm mb-4 w-full md:w-[32%] shadow-md">
          <img
            src="https://cdn.pixabay.com/photo/2019/05/19/04/16/agriculture-4213197_960_720.jpg"
            alt=""
          />
          <div className="banner-content w-40 md:w-48 flex items-center justify-center">
            <div className="banner-title">Du lịch miền núi</div>
          </div>
          <div className="hover_banner"></div>
        </div>
        <div className="single-banner shadow-sm mb-4 w-full md:w-[32%] shadow-md">
          <img
            src="https://cdn.pixabay.com/photo/2019/09/03/13/13/countryside-4449408_960_720.jpg"
            alt=""
          />
          <div className="banner-content w-40 md:w-48 flex items-center justify-center">
            <div className="banner-title">Du lịch miền quê</div>
          </div>
          <div className="hover_banner"></div>
        </div>
      </div>

      <div className="">
        <div className="mb-4 flex justify-center items-center text-2xl font-[500] text-maintext dark:text-darkmaintext">
          Khám Phá tour Du lịch
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col lg:flex-row bg-slate-100 shadow-md rounded-md ">
            <div className="h-full w-full lg:w-[55%]">
              <Link to="">
                <img
                  src="https://cdn.pixabay.com/photo/2019/09/03/13/13/countryside-4449408_960_720.jpg"
                  alt=""
                  className="p-2 rounded-md h-full"
                />
              </Link>
            </div>
            <div className="w-full lg:w-[45%] text-maintext dark:text-darkmaintext">
              <div className="text-lg font-[600] p-1">
                <a href="">Đồng Văn - Mã Pí Lèng - Dinh Thự vua Mèo</a>
              </div>
              <div className="px-1 text-md font-[500]"> 4 ngày - 3 đêm</div>
              <div className="flex items-center  px-1 text-md font-[500]">
                <span className="mr-2">Phương tiện: </span>
                <BsFillCarFrontFill size={20} />
                <MdTrain size={20} />
                <MdAirplanemodeActive size={20} />
              </div>
              <div className="flex justify-around p-1">
                <MdCheckCircle size={20} />
                <FaUtensils size={20} />
                <BsShieldFillCheck size={20} />
                <BsTicketPerforatedFill size={20} />
                <BsBusFront />
              </div>
              <div className="text-md font-[500] text-red-600 p-1">
                5.999.000 VDN/người
              </div>
              <div className="line-through text-sm font-[400] text-red-500 p-1">
                6.499.000 VND/người
              </div>
              <div className="flex text-yellow-500">
                <MdOutlineStar size={20} />
                <MdOutlineStar size={20} />
                <MdOutlineStar size={20} />
                <MdOutlineStar size={20} />
                <MdOutlineStar size={20} />
              </div>
              <button className="button float-right m-2">Xem thêm</button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row bg-slate-100 shadow-md rounded-md ">
            <div className="h-full w-full lg:w-[55%]">
              <Link to="">
                <img
                  src="https://cdn.pixabay.com/photo/2019/09/03/13/13/countryside-4449408_960_720.jpg"
                  alt=""
                  className="p-2 rounded-md h-full"
                />
              </Link>
            </div>
            <div className="w-full lg:w-[45%] text-maintext dark:text-darkmaintext">
              <div className="text-lg font-[600] p-1">
                <a href="">Đồng Văn - Mã Pí Lèng - Dinh Thự vua Mèo</a>
              </div>
              <div className="px-1 text-md font-[500]"> 4 ngày - 3 đêm</div>
              <div className="flex items-center  px-1 text-md font-[500]">
                <span className="mr-2">Phương tiện: </span>
                <BsFillCarFrontFill size={20} />
                <MdTrain size={20} />
                <MdAirplanemodeActive size={20} />
              </div>
              <div className="flex justify-around p-1">
                <MdCheckCircle size={20} />
                <FaUtensils size={20} />
                <BsShieldFillCheck size={20} />
                <BsTicketPerforatedFill size={20} />
                <BsBusFront />
              </div>
              <div className="text-md font-[500] text-red-600 p-1">
                5.999.000 VDN/người
              </div>
              <div className="line-through text-sm font-[400] text-red-500 p-1">
                6.499.000 VND/người
              </div>
              <div className="flex text-yellow-500">
                <MdOutlineStar size={20} />
                <MdOutlineStar size={20} />
                <MdOutlineStar size={20} />
                <MdOutlineStar size={20} />
                <MdOutlineStar size={20} />
              </div>
              <button className="button float-right m-2">Xem thêm</button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row bg-slate-100 shadow-md rounded-md ">
            <div className="h-full w-full lg:w-[55%]">
              <Link to="">
                <img
                  src="https://cdn.pixabay.com/photo/2019/09/03/13/13/countryside-4449408_960_720.jpg"
                  alt=""
                  className="p-2 rounded-md h-full"
                />
              </Link>
            </div>
            <div className="w-full lg:w-[45%] text-maintext dark:text-darkmaintext">
              <div className="text-lg font-[600] p-1">
                <a href="">Đồng Văn - Mã Pí Lèng - Dinh Thự vua Mèo</a>
              </div>
              <div className="px-1 text-md font-[500]"> 4 ngày - 3 đêm</div>
              <div className="flex items-center  px-1 text-md font-[500]">
                <span className="mr-2">Phương tiện: </span>
                <BsFillCarFrontFill size={20} />
                <MdTrain size={20} />
                <MdAirplanemodeActive size={20} />
              </div>
              <div className="flex justify-around p-1">
                <MdCheckCircle size={20} />
                <FaUtensils size={20} />
                <BsShieldFillCheck size={20} />
                <BsTicketPerforatedFill size={20} />
                <BsBusFront />
              </div>
              <div className="text-md font-[500] text-red-600 p-1">
                5.999.000 VDN/người
              </div>
              <div className="line-through text-sm font-[400] text-red-500 p-1">
                6.499.000 VND/người
              </div>
              <div className="flex text-yellow-500">
                <MdOutlineStar size={20} />
                <MdOutlineStar size={20} />
                <MdOutlineStar size={20} />
                <MdOutlineStar size={20} />
                <MdOutlineStar size={20} />
              </div>
              <button className="button float-right m-2">Xem thêm</button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row bg-slate-100 shadow-md rounded-md ">
            <div className="h-full w-full lg:w-[55%]">
              <Link to="">
                <img
                  src="https://cdn.pixabay.com/photo/2019/09/03/13/13/countryside-4449408_960_720.jpg"
                  alt=""
                  className="p-2 rounded-md h-full"
                />
              </Link>
            </div>
            <div className="w-full lg:w-[45%] text-maintext dark:text-darkmaintext">
              <div className="text-lg font-[600] p-1">
                <a href="">Đồng Văn - Mã Pí Lèng - Dinh Thự vua Mèo</a>
              </div>
              <div className="px-1 text-md font-[500]"> 4 ngày - 3 đêm</div>
              <div className="flex items-center  px-1 text-md font-[500]">
                <span className="mr-2">Phương tiện: </span>
                <BsFillCarFrontFill size={20} />
                <MdTrain size={20} />
                <MdAirplanemodeActive size={20} />
              </div>
              <div className="flex justify-around p-1">
                <MdCheckCircle size={20} />
                <FaUtensils size={20} />
                <BsShieldFillCheck size={20} />
                <BsTicketPerforatedFill size={20} />
                <BsBusFront />
              </div>
              <div className="text-md font-[500] text-red-600 p-1">
                5.999.000 VDN/người
              </div>
              <div className="line-through text-sm font-[400] text-red-500 p-1">
                6.499.000 VND/người
              </div>
              <div className="flex text-yellow-500">
                <MdOutlineStar size={20} />
                <MdOutlineStar size={20} />
                <MdOutlineStar size={20} />
                <MdOutlineStar size={20} />
                <MdOutlineStar size={20} />
              </div>
              <button className="button float-right m-2">Xem thêm</button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row bg-slate-100 shadow-md rounded-md ">
            <div className="h-full w-full lg:w-[55%]">
              <Link to="">
                <img
                  src="https://cdn.pixabay.com/photo/2019/09/03/13/13/countryside-4449408_960_720.jpg"
                  alt=""
                  className="p-2 rounded-md h-full"
                />
              </Link>
            </div>
            <div className="w-full lg:w-[45%] text-maintext dark:text-darkmaintext">
              <div className="text-lg font-[600] p-1">
                <a href="">Đồng Văn - Mã Pí Lèng - Dinh Thự vua Mèo</a>
              </div>
              <div className="px-1 text-md font-[500]"> 4 ngày - 3 đêm</div>
              <div className="flex items-center  px-1 text-md font-[500]">
                <span className="mr-2">Phương tiện: </span>
                <BsFillCarFrontFill size={20} />
                <MdTrain size={20} />
                <MdAirplanemodeActive size={20} />
              </div>
              <div className="flex justify-around p-1">
                <MdCheckCircle size={20} />
                <FaUtensils size={20} />
                <BsShieldFillCheck size={20} />
                <BsTicketPerforatedFill size={20} />
                <BsBusFront />
              </div>
              <div className="text-md font-[500] text-red-600 p-1">
                5.999.000 VDN/người
              </div>
              <div className="line-through text-sm font-[400] text-red-500 p-1">
                6.499.000 VND/người
              </div>
              <div className="flex text-yellow-500">
                <MdOutlineStar size={20} />
                <MdOutlineStar size={20} />
                <MdOutlineStar size={20} />
                <MdOutlineStar size={20} />
                <MdOutlineStar size={20} />
              </div>
              <button className="button float-right m-2">Xem thêm</button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row bg-slate-100 shadow-md rounded-md ">
            <div className="h-full w-full lg:w-[55%]">
              <Link to="">
                <img
                  src="https://cdn.pixabay.com/photo/2019/09/03/13/13/countryside-4449408_960_720.jpg"
                  alt=""
                  className="p-2 rounded-md h-full"
                />
              </Link>
            </div>
            <div className="w-full lg:w-[45%] text-maintext dark:text-darkmaintext">
              <div className="text-lg font-[600] p-1">
                <a href="">Đồng Văn - Mã Pí Lèng - Dinh Thự vua Mèo</a>
              </div>
              <div className="px-1 text-md font-[500]"> 4 ngày - 3 đêm</div>
              <div className="flex items-center  px-1 text-md font-[500]">
                <span className="mr-2">Phương tiện: </span>
                <BsFillCarFrontFill size={20} />
                <MdTrain size={20} />
                <MdAirplanemodeActive size={20} />
              </div>
              <div className="flex justify-around p-1">
                <MdCheckCircle size={20} />
                <FaUtensils size={20} />
                <BsShieldFillCheck size={20} />
                <BsTicketPerforatedFill size={20} />
                <BsBusFront />
              </div>
              <div className="text-md font-[500] text-red-600 p-1">
                5.999.000 VDN/người
              </div>
              <div className="line-through text-sm font-[400] text-red-500 p-1">
                6.499.000 VND/người
              </div>
              <div className="flex text-yellow-500">
                <MdOutlineStar size={20} />
                <MdOutlineStar size={20} />
                <MdOutlineStar size={20} />
                <MdOutlineStar size={20} />
                <MdOutlineStar size={20} />
              </div>
              <button className="button float-right m-2">Xem thêm</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
