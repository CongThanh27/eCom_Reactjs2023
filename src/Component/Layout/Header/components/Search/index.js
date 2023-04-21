import styles from "./search.module.scss";
import classname from "classnames/bind"; // thay đổi đường import và tên biến

import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import Tippy from "@tippyjs/react";

import { Input } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import _debounce from "lodash/debounce";

function Search() {
  const cx = classname.bind(styles);
  const [dulieu, setDulieu] = useState([]);
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  function handleDebounceFn(inputValue) {
    setValue(inputValue);
  }

  const debounceFn = useCallback(_debounce(handleDebounceFn, 1000), []);

  function handleChange(event) {
    const inputValue = event.target?.value;
    debounceFn(inputValue);
  }

  useEffect(() => {
    axios
      .get(
        `https://backoffice.nodemy.vn/api/products?populate=*&filters[name][$contains]=${value}`
      )
      .then((res) => {
        setDulieu(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [value]);

  return (
    <>
      <Tippy
        visible={value.length > 0}
        onClickOutside={() => {
          setValue("");
        }}
        render={value.length > 0 ? (attrs) => (
          <div className={cx("search-dropdown")} tabIndex={-1} {...attrs}>
            {" "}
            {dulieu.map((item, index) => {
              return (
                <div key={index} className={cx("search-dropdown-item")}>
                  {item.attributes.name}
                </div>
              );
            })}
          </div>
        ) : null}
      >
        <div
          style={{
            width: "40%",
          }}
        >
          <Input
            placeholder="Bạn muốn tìm gì?"
            style={{
              width: "100%",
            }}
            onChange={handleChange}
          />
        </div>
      </Tippy>
    </>
  );
}
export default Search;
