import Link from "next/link";
import { FiEdit } from "react-icons/fi";
export default function Edittodo({ id }) {
  return (
    <div className="flex bg-red-700 h-full ">
      <div className="flex bg-blue-900 h-full rounded-s-full items-center justify-center  p-2 text-white ">
        <Link
          className="transition duration-150 drop-shadow-lg ease-in-out ps-5 hover:scale-110"
          href={`./edittodo/${id}`}
        >
          <FiEdit size={30} />
        </Link>
      </div>
    </div>
  );
}
