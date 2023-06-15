"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineCompass,
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlineInstagram,
  AiOutlineMessage,
  AiOutlinePlusSquare,
  AiOutlineSearch,
  AiOutlineVideoCameraAdd,
} from "react-icons/ai";
import { CiMenuBurger } from "react-icons/ci";

const Header = () => {
  const { data: session } = useSession();
  return (
    <section className="py-10 pl-5 h-screen sticky top-0 border-r border-gray-300 hidden sm:inline-block">
      <Link href="/">
        <Image
          src="/Instagram_logo.svg.png"
          width={150}
          height={20}
          className="hidden xl:inline-block"
        />
        <AiOutlineInstagram className="xl:hidden text-3xl" />
      </Link>
      <div className="flex flex-col gap-8 mt-12">
        <Link href="/" className="nav__link">
          <AiOutlineHome className="nav__icon" />
          <h2>Home</h2>
        </Link>
        <Link href="/" className="nav__link">
          <AiOutlineSearch className="nav__icon" />
          <h2>Search</h2>
        </Link>
        <Link href="/" className="nav__link">
          <AiOutlineCompass className="nav__icon" />
          <h2>Explore</h2>
        </Link>
        <Link href="/" className="nav__link">
          <AiOutlineVideoCameraAdd className="nav__icon" />
          <h2>Reels</h2>
        </Link>
        <Link href="/" className="nav__link">
          <AiOutlineMessage className="nav__icon" />
          <h2>Messages</h2>
        </Link>
        <Link href="/" className="nav__link">
          <AiOutlineHeart className="nav__icon" />
          <h2>Notifications</h2>
        </Link>
        <Link href="/" className="nav__link">
          <AiOutlinePlusSquare className="nav__icon" />
          <h2>Create</h2>
        </Link>
        <Link href="/" className="nav__link">
          <img
            src={session?.user?.image}
            alt="Profile Picture"
            className="w-[30px] object-cover rounded-full"
          />
          <h2>Profile</h2>
        </Link>
      </div>
      <Link href="/" className="nav__link mt-8">
        <CiMenuBurger className="nav__icon" />
        <h2>More</h2>
      </Link>
    </section>
  );
};

export default Header;
