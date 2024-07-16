import Image from "next/image";
import search from "../../../public/images/searchIcon.svg";

export default function SearchBar() {
  return (
    <div className="">
      <div className="lg:flex justify-around items-center gap-2 my-3 lg:my-0">
        <div className="flex justify-between border-2 border-[#8E8E8E] rounded p-2 focus:outline-none px-4 lg:w-[25em]   text-sm">
          <input
            type="text"
            placeholder="Search"
            className=" focus:outline-none"
          />
          <Image src={search} alt="search" width={20} />
        </div>
      </div>
    </div>
  );
}
