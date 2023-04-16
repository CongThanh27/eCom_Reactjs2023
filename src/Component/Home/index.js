import styles from "./home.module.scss";
import classname from "classnames/bind";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  BackgroundTop,
  GiftCurrent,
  ImageCenter,
  FeaturedProduct,
  HotPromotion,
  ForYou,
  Trademark,
  Blog,
} from "./component";

import { Carousel, Image } from "antd";

const cx = classname.bind(styles);
function Home() {
  return (
    <>
      <div className={cx("wrapper")}>
        <BackgroundTop />
        <ImageCenter url="https://images.fpt.shop/unsafe/fit-in/1200x100/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/4/6/638163937174297349_F-H7_1200x100.png"/>
        <GiftCurrent />
        <FeaturedProduct />
        <HotPromotion />
        <ImageCenter url="https://images.fpt.shop/unsafe/fit-in/1200x200/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/4/10/638167625985878860_F-H5_1200x200.png" />
        <ForYou />
        <Trademark />
        <Blog />
      </div>
    </>
  );
}

export default Home;
