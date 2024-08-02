import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./NavBar";
import Footer from "./Footer";
import { lexend } from "./Font";
import NextTopLoader from "nextjs-toploader";
import Script from "next/script";
import ScrollFix from "./components/ScrollFix";

export const metadata: Metadata = {
  title: "xBoost",
  description: "Future of Boosting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{ fontWeight: "400", fontSize: "15px" }}
        className={lexend.className}
      >
        
          <Navbar />
          <NextTopLoader speed={1500} showSpinner={false} />
          {children}
          <ScrollFix />
          <Footer />
      </body>
      <Script strategy="lazyOnload" id="link-disable">
        {`
          window.onscroll = function() {pgScroll()};
          var header = document.getElementById("MHeader");
          var fixer = document.getElementById("h-height-fix");
          var sticky = header.offsetTop+170;          
          function pgScroll() {
            var header2 = document.getElementById("game-nav");
            var fixer2 = document.getElementById("game-nav-fixer");
            if (window.pageYOffset > sticky) {
              header.classList.add("header-active");
              fixer.classList.add("h-height-fix");
              if(document.getElementById("game-nav")){
                header2.classList.add("header2-active");
                fixer2.classList.add("h-height-fix2");
              }              
            } else {
              header.classList.remove("header-active");
              fixer.classList.remove("h-height-fix");
              if(document.getElementById("game-nav")){
                header2.classList.remove("header2-active");
                fixer2.classList.remove("h-height-fix2");
              } 
            }
          }        



          document.getElementById("link0").addEventListener("click", disabler1);
          document.getElementById("link1").addEventListener("click", disabler2);
          document.getElementById("link2").addEventListener("click", disabler3);
          document.getElementById("link3").addEventListener("click", disabler4);
          document.getElementById("link4").addEventListener("click", disabler5);
          const link0 = document.getElementById("link0");
          const link1 = document.getElementById("link1");
          const link2 = document.getElementById("link2");
          const link3 = document.getElementById("link3");
          const link4 = document.getElementById("link4");
          var path = window.location.pathname;
          var page = path.split("/").pop();
          if(page == ""){
            link0.classList.add("nav-active")
          }else if(page == "contacts"){
            const queryString = window.location.search;
            if(queryString == "?s=workWithUs"){
              link2.classList.add("nav-active")
            }else{
              link3.classList.add("nav-active")
            }            
          }else if(page == "blog"){
            link4.classList.add("nav-active")
          }            
          function disabler1(){
            disable()
            link0.classList.add("nav-active")
          }
          function disabler2(){
            disable()
            link1.classList.add("nav-active")
          } 
          function disabler3(){
            disable()
            link2.classList.add("nav-active")
          } 
          function disabler4(){
            disable()
            link3.classList.add("nav-active")
          } 
          function disabler5(){
            disable()
            link4.classList.add("nav-active")
          }
          function disable(){
            link0.classList.remove("nav-active")
            link1.classList.remove("nav-active")
            link2.classList.remove("nav-active")
            link3.classList.remove("nav-active")
            link4.classList.remove("nav-active")
          }         
      `}
      </Script>
    </html>
  );
}
