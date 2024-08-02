import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

type props = {
  id?: string;
};

function NavBar({ id = "navbar" }: props) {
  return (
    <div id={id}>
      <Image
        src="/Abstract-Design.png"
        width={1000}
        height={483}
        alt="bg-img"
        className="bg-img"
      />
      <div className="space1"></div>
      <div id="login">
        <div className="login-card">
          <a href="#">
            <div className="close-login">
              <FontAwesomeIcon icon={faClose} className="t-icon" />
            </div>
          </a>
          <div className="flex">
            <div style={{ width: "407px" }} className="login-clm-i">
              <Image
                src="/loginImage.png"
                width={407}
                height={450}
                alt="login-bg"
              />
            </div>
            <div style={{ width: "444px" }} className="px-10 py-5">
              <div>
                <h4>Login</h4>
                <span>
                  To login or register, just enter your email address.
                </span>
                <div>
                  <form method="post" action="">
                    <input placeholder="Email" type="text" />
                    <br />
                    <button type="submit">Get Code</button>
                  </form>
                </div>
                <div className="flex continue-with">
                  <hr />
                  <span>Or Continue with</span>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="h-height-fix"></div>
      <header id="MHeader">
        <Link href={"/"}>
          <Image
            src="/LOGO.png"
            width={100}
            height={32.81}
            alt="Picture of the author"
            className="logo"
          />
        </Link>

        <div className="desktop-menu-login">
          <a href="#login">
            <span className="sign">Sign Up</span>
          </a>
          <a href="#login">
            <span className="login">Login</span>
          </a>
        </div>
        <div className="desktop-menu-items">
          <Link className="" id="link0" href={"/"}>
            Home
          </Link>
          <Link
            className=""
            id="link1"
            href={"/services/apex-legends/boosting"}
          >
            Services
          </Link>
          <Link className="" id="link2" href={"/contacts?s=workWithUs"}>
            Work with us
          </Link>
          <Link className="" id="link3" href={"/contacts"}>
            Contacts
          </Link>
          <Link className="" id="link4" href={"/blog"}>
            Blog
          </Link>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
