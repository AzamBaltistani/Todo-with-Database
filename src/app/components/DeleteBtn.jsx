"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";

export default function DeleteBtn({ id }) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async (e) => {
    const confirmed = confirm("Are you sure ! ");
    console.log("Deleted: ", id);

    if (confirmed) {
      setIsDeleting(true);
      const deletedData = await fetch(
        `http://localhost:3000/api/deletetodo/${id}`,
        {
          method: "DELETE",
        }
      );

      router.refresh();
      setIsDeleting(false);
    }
  };

  return (
    <div className="bg-slate-300 h-full">
      <div className="flex  bg-red-700 h-full ps-5 items-center justify-center transition duration-150 ease-in-out   rounded-s-full  p-2 text-white ">
        <button onClick={handleDelete} disabled={isDeleting}>
          <HiOutlineTrash className="hover:scale-110" size={30} />
        </button>
      </div>
    </div>
  );
}
