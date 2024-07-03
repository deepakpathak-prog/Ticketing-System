import Bell from "../../../public/images/bell.svg";
import userBg from "../../../public/images/User.svg";
import Image from "next/image";

export default function SuperAdminDashboard() {
  return (
    <div>
      <div className="flex justify-between items-center shadow-md p-8 sticky top-0 z-50 bg-white">
        <div className="text-[#2A2C3E] text-xl">Dashboard</div>
        <div className="flex gap-4 justify-center items-center">
          <div>
            <Image src={Bell} alt="hhh" width={25} />
          </div>
          <div>
            <Image src={userBg} alt="hhh" width={50} />
          </div>
        </div>
      </div>

      <div className="p-10">

        <div className="shadow-sm p-7 rounded-md">
          <div className="text-xl font-medium">Summary</div>

          <div className="grid grid-cols-2">

            <div>col1

              <div className="grid grid-cols-2">
                <div>1</div>
                <div>2</div>

                <div>3</div>

                <div>4</div>

              </div>
            </div>
            
            <div className="grid grid-cols-2">
              <div>col2 1</div>
              <div>col2 2</div>
              <div className="text-center">col 2 3</div>

            </div>
              
          </div>



        </div>



      </div>

    </div>
  );
}
