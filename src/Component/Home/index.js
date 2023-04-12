import styles from "./home.module.scss";
import classname from "classnames/bind";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const cx = classname.bind(styles);
function Home() {
  var [dulieu, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://backoffice.nodemy.vn/api/products?populate=*")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log("data:", dulieu);
  console.log("loai:", typeof dulieu);
  var block = dulieu.map((item, index) => {
    return (
      <div className={cx('col-2')} key={item.id}>
        <div className={cx('card')}>
          <Link to={`/product/${item.attributes.slug}`}>
            <img
              src={`https://backoffice.nodemy.vn${item.attributes.image?.data[0].attributes.formats.thumbnail.url}`}
              className={cx('card-img-top')}
              alt="..."
            />
          </Link>
          <div className={cx('card-body')}>
            <Link to={`/product/${item.attributes.slug}`}>
              <h6 className={cx('text-truncate')}>{item.attributes.name}</h6>
              <p className={cx('badge badge-danger')}>{item.attributes.price}đ</p>
            </Link>
            <button
              className={cx('btn btn-primary')}
              onClick={() => navigate(`/pay/${item.id}`)}
            >
              Mua ngay
            </button>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className={cx('wrapper')}>
        <div className={cx('row')}>{block}</div>
      </div>
    </>
  );
}

export default Home;
