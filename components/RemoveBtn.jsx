"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function RemoveBtn({ id }) {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`/api/topics?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        location.reload(); // Обновляем страницу
      }
    }
  };

  return (
    <button onClick={removeTopic} className="color-[#edeef0]">
      <HiOutlineTrash size={35} />
    </button>
  );
}
