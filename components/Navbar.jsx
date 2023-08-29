import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="z-40 flex justify-between bg-[#4d4d4d] bheader">
      <Link className="text-white font-bold" href={"/"}>
      ✱BONUS BUY✱
      </Link>
    </nav>
    
  );
}
