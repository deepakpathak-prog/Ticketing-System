import ButtonPurple from "../../Components/common/ButtonPurple";
import Arrow from "../../../public/images/Arrow 2.svg";
import Image from "next/image";
import Circle from "../../../public/images/Icon_Order.svg";
import Table from "../../Components/common/Table";
import Link from "next/link";
import Bell from "../../../public/images/bell.svg"
import userBg from "../../../public/images/User.svg"

export default function Page() {
  return (
    <div className="">
      <div className="flex justify-between items-center shadow-md p-8 sticky top-0 z-50 bg-white">
        <div className="text-[#2A2C3E] text-xl">Dashboard</div>
        <div className="flex gap-4 justify-center items-center">
          <div><Image src={Bell} alt="hhh" width={25}/></div>
          <div><Image src={userBg} alt="hhh" width={50}/></div>
        </div>
      </div>
      <div>
        <ButtonPurple />
      </div>
      <div className="ml-8 mr-8 shadow-lg rounded-md">
        <h1 className="text-3xl p-7 text-[#2A2C3E]">Summary</h1>
        <div className="grid grid-cols-3 gap-5 mr-7">
          <div className="bg-[#F7F7F7] p-8 rounded-md ml-7 mb-7">
            <div className="grid grid-cols-2 pb-10">
              <div>
                <Image src={Circle} alt="hhh" width={90} />
              </div>
              <div className="flex justify-end items-end">
                <Image src={Arrow} alt="hhh" width={32} />
              </div>
            </div>
            <div className="pl-5 grid gap-3">
              <div className="text-4xl text-[#5027D9]">75</div>
              <div className="text-[#696969]">New tickets</div>
            </div>
          </div>

          <div className="bg-[#F7F7F7] p-8 rounded-md ml-7 mb-7">
            <div className="grid grid-cols-2 pb-10">
              <div>
                <Image src={Circle} alt="hhh" width={90} />
              </div>
              <div className="flex justify-end items-end">
                <Image src={Arrow} alt="hhh" width={32} />
              </div>
            </div>
            <div className="pl-5 grid gap-3">
              <div className="text-4xl text-[#5027D9]">75</div>
              <div className="text-[#696969]">Open tickets</div>
            </div>
          </div>

          <div className="bg-[#F7F7F7] p-8 rounded-md ml-7 mb-7">
            <div className="grid grid-cols-2 pb-10">
              <div>
                <Image src={Circle} alt="hhh" width={90} />
              </div>
              <div className="flex justify-end items-end">
                <Image src={Arrow} alt="hhh" width={32} />
              </div>
            </div>
            <div className="pl-5 grid gap-3">
              <div className="text-4xl text-[#5027D9]">75</div>
              <div className="text-[#696969]">Closed tickets</div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-8 flex flex-col gap-5">
        <div className="flex p-7 justify-between">
          <div className="text-3xl text-[#2A2C3E]">Recent Tickets</div>
          <div className="text-2xl text-[#696969] flex gap-3 justify-center items-center">
            <div><Link href="#">View All Tickets </Link></div>
            <div>
              <Link href="#">
                <Image src={Arrow} alt="hhh" width={28} />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <Table />
        </div>
      </div>
    </div>
  );
}
