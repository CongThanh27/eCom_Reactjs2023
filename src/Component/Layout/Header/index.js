import styles from "./header.module.scss";
import classname from "classnames/bind";

import axios from "axios";
import logo from "../../../images/logo.svg";
import avatar from "../../../images/newcv.jpg";
import { useState, useEffect } from "react";

import CheckLogin from "../../Login/CheckLogin/index";
import { useDispatch } from "react-redux";

import ModelLogin from "../../Login/ModelLogin";

import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Input, Space, message, Popconfirm, Select } from "antd";
import { useNavigate, Link, useHistory } from "react-router-dom";
import { setModeLogin } from "../../slice/couterSlice";
const cx = classname.bind(styles);
function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const text = "Bạn có muốn đăng xuất?";
  const confirm = () => {
    localStorage.removeItem("user");
    navigate("./login");
  };

  const [dulieu, setDulieu] = useState([]);
  const [value, setValue] = useState();

  console.log(value);
  useEffect(() => {
    axios
      .get("https://backoffice.nodemy.vn/api/products?populate=*")
      .then((res) => {
        setDulieu(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function GetProductBySearch(props) {
    const { value, dulieu } = props;
  }

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
            <Select
              showSearch
              value={value}
              placeholder="Bạn cần tìm gì?"
              style={{ width: "100%", flex: "5" }}
              defaultActiveFirstOption={false}
              showArrow={false}
              filterOption={false}
              onSearch={(newValue) => {
                setValue(newValue);
              }}
              notFoundContent={null}
              options={dulieu.map((item) => {
                return {
                  value: item.name,
                  label: (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>{item.name}</span>
                      <span>{item.price}</span>
                    </div>
                  ),
                };
              })}
              onSelect={(value, option) => {
                console.log(value, option);
                navigate(`/product/${option.key}`);
              }}
            />
            <div
              onClick={() => {
                var userLocal = null;
                const userLocalCall = localStorage.getItem("user");
                userLocal = JSON.parse(userLocalCall);
                if (!userLocal) {
                  dispatch(setModeLogin(true));
                } else {
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
            <div className={cx("account")}>
              <UserOutlined style={{ margin: "0px 3%", fontSize: "1rem" }} />
              {localStorage.getItem("user") ? (
                <Popconfirm
                  placement="bottomRight"
                  style={{ width: "100px" }}
                  title={text}
                  onConfirm={confirm}
                  okText="Có"
                  cancelText="Không"
                >
                  (
                  <span>
                    {JSON.parse(localStorage.getItem("user")).user.username}
                  </span>
                  )
                </Popconfirm>
              ) : (
                <span
                  onClick={() => {
                    navigate("./login");
                  }}
                >
                  Đăng nhập
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
