import React, { useState } from "react";
import "./HeroSection.css";
import { toAbsoluteUrl } from "../Utils/index";
import Images from "./Images";
import ImageContainer from "./ImageContainer";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";

function HeroSection() {
  // Header items list
  const headerItemList = [
    "Study Abroad",
    "Accomodation",
    "Test Prep",
    "Finance",
    "Community",
    "Products",
    "More",
  ];

  // Brand partners logo
  const brandPartnersLogo = [
    "google-logo.png",
    "barclays-logo.png",
    "ey-logo.png",
    "amazon-logo.png",
    "accenture-logo.png",
  ];

  return (
    <div className="heroSectionWrapper">
      {/* Notification */}
      <div className="hero_notification">
        <p>Leverage Edu Scholarship Worth 7,00,00,000</p>
        <button className="hero_applyNow">Apply now</button>
      </div>
      {/* Header Section */}
      <div className="hero_header">
        <div className="hero_logo">
          <img
            src={toAbsoluteUrl("./leverage-logo.svg")}
            alt="L"
            className="hero_logoImg"
          />
        </div>
        <div className="hero_headerItems">
          {headerItemList?.map((item, index) => (
            <div key={index} className="hero_headerItem">
              {item}
            </div>
          ))}
          <div className="hero_search">
            <BsIcons.BsSearch color="white" size="12px" />
          </div>
          <div className="hero_search">
            <MdIcons.MdCall color="white" size="12px" />
          </div>
          <div className="hero_searchPerson">
            <BsIcons.BsFillPersonFill color="#002147" size="20px" />
          </div>
        </div>
      </div>

      {/* Main section */}
      <div className="hero_contentSection">
        <div className="hero_content">
          <h1>FIRST IN THE FAMILY</h1>
          <p className="hero_info1">
            They are the global citizens of tomorrow. Start your study abroad
            journey today.
          </p>
          <div className="hero_contentHotstar">
            <p>Live on Hotstar </p>
            <img
              className="hero_hotstarLogo"
              src={toAbsoluteUrl("./hotstar-logo.png")}
            />
          </div>
          <button className="hero_hotstarLiveBtn">
            Get your shortlist for FREE
          </button>
          <button className="hero_talkToExpertBtn">Talk to an Expert</button>
          <p className="hero_info2">
            95% of our students get an admit in less than 4 weeks
          </p>
          <p className="hero_info3">
            Our students finished university to work at global offices of:
          </p>
          <div className="hero_brandLogosWrapper">
            {brandPartnersLogo?.map((logo, index) => (
              <img
                key={index}
                src={toAbsoluteUrl(logo)}
                alt={logo}
                className="brandPartnerLogo"
              />
            ))}
          </div>
        </div>
        <div className="hero_imageWrapper">
          <ImageContainer />
        </div>
      </div>
      <div className="hero_whatsappChat">
        <img
          src={toAbsoluteUrl("whatsapp-logo.png")}
          alt=""
          className="hero_whatsappLogo"
        />
      </div>
    </div>
  );
}

export default HeroSection;
