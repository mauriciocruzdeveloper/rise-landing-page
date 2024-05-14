import Link from "next/link";

export function NavBarLinks() {
  return (
    <>
      <Link
        href="/apollo"
        className={`min-w-max hover:bg-[#0005370d] hover:px-4 hover:py-2 hover:rounded-[10px] cursor-pointer flex items-center gap-2 font-[500] text-gray`}
      >
        Apollo
      </Link>

      <Link
        href="/about"
        className={`w-11 hover:bg-[#0005370d] hover:px-4 hover:py-2 hover:rounded-[10px] cursor-pointer flex items-center gap-2 font-[500] text-gray`}
      >
        About
      </Link>
    </>
  );
}
