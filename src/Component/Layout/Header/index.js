import styles from "./header.module.scss";
import classname from "classnames/bind";
import CheckLogin from "../../Login/CheckLogin/index";
import logo from "../../../images/logo.svg";
import avatar from "../../../images/newcv.jpg";
import { useDispatch } from "react-redux";

import ModelLogin from "../../Login/ModelLogin";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import { useNavigate, Link, useHistory } from "react-router-dom";
import { setModeLogin } from "../../slice/couterSlice";
const cx = classname.bind(styles);
function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>

      <div className={cx("wrapper")}>
        <div className={cx("inner")}>
          <div
            className={cx("logo")}
            onClick={() => {
              window.location.href = "/";
            }}
          >
            <img src={logo} alt="talkdaesk" />
          </div>
          <div
            className={cx("menu")}
            onMouseEnter={() => {
              console.log("Enter");
            }}
          >
            <ul>Điện thoại</ul>
            <ul>Laptop</ul>
            <ul>Tablet</ul>
            <ul>Đồng hồ</ul>
            <ul>Phụ kiện</ul>
          </div>
          <div className={cx("actions")}>
            <Input
              className={cx("search")}
              placeholder="Bạn cần tìm gì?"
              allowClear
            />
            <div
              onClick={() => {
                var userLocal = null
                const userLocalCall = localStorage.getItem("user")
                userLocal = JSON.parse(userLocalCall)
                if (!userLocal) {
                  dispatch(setModeLogin(true));                
                }
                else {
                  navigate("./cart");
                }
              }}
              className={cx("cart")}
            >
              <ShoppingCartOutlined
                style={{ margin: "0px 3%", fontSize: "1rem" }}
              />
              <span>Giỏ hàng</span>
            </div>
            <div
              onClick={() => {
                navigate("./login");
              }}
              className={cx("account")}
            >
              <UserOutlined style={{ margin: "0px 3%", fontSize: "1rem" }} />
              <span>Đăng nhập</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
