import React, {  useRef, useState } from "react";
import Link from "next/link";
//import { useRouter } from "next/router";
import { useUser } from '@auth0/nextjs-auth0/client';
/**
 * Site header
 */
export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const burgerMenuRef = useRef<HTMLDivElement>(null);

  const { user } = useUser();
//  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
//    const router = useRouter();
//    const isActive = router.pathname === href;
//
//    return (
//      <Link
//        href={href}
//        passHref
//        className={`${
//        isActive ? "bg-secondary shadow-md" : ""
//      } hover:bg-secondary hover:shadow-md focus:bg-secondary py-1.5 px-2 text-sm rounded-full gap-1.5`}
//        >
//        {children}
//      </Link>
//      );
//  };
  const navLinks = (
    <>


    </>
    );
  // @ts-ignore
  return (
    <div className="sticky lg:static top-0 navbar bg-base-100 min-h-0 flex-shrink-0 justify-between z-20 shadow-md shadow-secondary px-0 sm:px-2">
      <div className="navbar-start w-auto lg:w-1/2">
        <div className="lg:hidden dropdown" ref={burgerMenuRef}>
          <label
            tabIndex={0}
            className={`ml-1 btn btn-ghost ${isDrawerOpen ? "hover:bg-secondary" : "hover:bg-transparent"}`}
            onClick={() => {
              setIsDrawerOpen(prevIsOpenState => !prevIsOpenState);
            }}
          ></label>
          {isDrawerOpen && (
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              onClick={() => {
                setIsDrawerOpen(false);
              }}
            >
              {navLinks}
            </ul>
          )}
        </div>
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/" className="hidden lg:flex items-center gap-2 ml-4 mr-6 shrink-0">
          <div className="flex relative w-10 h-10">
            <img alt="SE2 logo" className="cursor-pointer" src="/logo.svg" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold leading-tight">AI Article</span>
            <span className="text-xs">marketplace</span>
          </div>
        </a>
        <ul className="hidden lg:flex lg:flex-nowrap menu menu-horizontal px-1 gap-2">{navLinks}</ul>
      </div>
      <div className="navbar-end flex-grow mr-4">

        {!user ?<Link href="/api/auth/login"><button className="btn btn-secondary btn-sm"  type="button">
          Login
        </button></Link>:<Link href="/api/auth/logout"><button className="btn  btn-sm"  type="button">
          Logout
        </button></Link>}


      </div>
    </div>
  );
};
