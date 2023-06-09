import { ReactComponent as Logo } from "./logo.svg";
import { ReactComponent as Cart } from "./icon-cart.svg";
import "./home.css";
import { NavLink } from "react-router-dom";

function DesktopHome() {
  return (
    <div id="main-container">
      <header>
        <div>
          <Logo />
        </div>
        <div id="nav-links">
          <NavLink class="nav-link" to="/">
            Home
          </NavLink>{" "}
          <NavLink class="nav-link" to="/">
            Headphones
          </NavLink>
          <NavLink class="nav-link" to="/">
            Speakers
          </NavLink>{" "}
          <NavLink class="nav-link" to="/">
            Earphones
          </NavLink>
        </div>
        <div>
          <Cart />
        </div>
      </header>
      <div id="featured-product">
        <div id="product-info">
          <div id="new-product">New product </div>
          <div id="product-name"></div>XX99 Mark II Headphones
          <div id="product-info">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast. See product
          </div>
        </div>
        {/* Headphones Shop Speakers Shop Earphones Shop ZX9 speaker Upgrade to
        premium speakers that are phenomenally built to deliver truly remarkable
        sound. See product ZX7 speaker See product YX1 earphones See product
        Bringing you the best audio gear Located at the heart of New York City,
        Audiophile is the premier store for high end headphones, earphones,
        speakers, and audio accessories. We have a large showroom and luxury
        demonstration rooms available for you to browse and experience a wide
        range of our products. Stop by our store to meet some of the fantastic
        people who make Audiophile the best place to buy your portable audio
        equipment. Home Headphones Speakers Earphones Audiophile is an all in
        one stop to fulfill your audio needs. We're a small team of music lovers
        and sound specialists who are devoted to helping you get the most out of
        personal audio. Come and visit our demo facility - we’re open 7 days a
        week. Copyright 2021. All Rights Reserved */}
      </div>
    </div>
  );
}
export default DesktopHome;
