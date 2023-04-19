import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./detail.module.scss";
import classname from "classnames/bind";
import Divider from "../Divider/index";
import { Rate } from "antd";
import BoxRight from "./BoxRight/BoxRight";
import Carousels from "./BoxLeft/Carousels";
import BoxLeft from "./BoxLeft/BoxLeft";

const cx = classname.bind(styles);
const Rates = (rate) => (
  <Rate
    disabled
    defaultValue={rate}
    character={<span style={{ fontSize: "15px" }}>★</span>}
  />
);
export default function Details() {
  const { slug } = useParams();

  var [dulieu, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://backoffice.nodemy.vn/api/products/" + slug + "?populate=*")
      .then((res) => {
        setData(res.data.data.attributes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  var mycates = JSON.parse(localStorage.getItem("mycategory")) || [];
  const cate = dulieu?.idCategories?.data[0].attributes?.slug;

  if (mycates.length > 3) {
    mycates.shift();
  }

  if (!mycates.includes(cate) && cate != null) {
    mycates.push(cate);
  }
  localStorage.setItem("mycategory", JSON.stringify(mycates));
  // var mota = dulieu?.description?.split(".");
  // blockMota = mota?.map((item, index) => { return <p>{item}.</p> })
  const devider = {
    link: "/",
    previousPlace: dulieu?.idCategories?.data[0].attributes?.name,
    currentPlace: slug,
  };
  return (
    <>
      <div className={cx("box_main")}>
        {<Divider devider={devider} />}
        <div>
          <h1 className={cx("productName")}>
            {" "}
            {dulieu?.name} {Rates(4)}
          </h1>
        </div>
        <div className={cx("box_left")}>
          <div className={cx("box_left_top")}>
            {<Carousels data={dulieu} />}
          </div>
          <div className={cx("box_left_bottom")}>
            {<BoxLeft data={dulieu} />}
          </div>
        </div>
        <div className={cx("box_right")}>{<BoxRight data={dulieu} />}</div>
      </div>
      
    </>
  );
}

// return <>
//     <div class="container">
//         <div class="row">
//             <div class="col-lg-6">
//             <img src={`https://backoffice.nodemy.vn${image}`}  class="img-fluid" alt="Product Image"/>
//             </div>
//             <div class="col-lg-6">
//             <h2>{dulieu.name}</h2>
//             <p>Brand: { brand} </p>
//             <h3 class="badge badge-success" >Giá cũ: {dulieu.oldPrice}đ</h3>
//             <h3 class="badge-danger" >{dulieu.price}đ</h3>
//             <hr/>
//             <p class ="text-success">{blockMota}</p>
//             {dulieu.quantityAvailable="1"?(<p class ="text-primary">Số lượng còn lại: {dulieu.quantityAvailable}</p>) : (<p class ="text-danger">Số lượng còn lại: {dulieu.quantityAvailable}</p>) }
//             <hr/>
//             <form>
//                 <div class="form-group">
//                 <label for="quantity">Quantity:</label>
//                 <input type="number" class="form-control" id="quantity" value="1"/>
//                 </div>
//                 <button type="submit" class="btn btn-primary">Add to Cart</button>
//             </form>
//             </div>
//             <h4>Description</h4>
//             <div class="container">
//             <div class="row">
//                 <div class="col-12">
//                 <p>{blockMota}</p>
//                 <p>CPU: {dulieu.cpu}</p>
//                 <p>Ram: {dulieu.ram}</p>
//                 <p>{dulieu.screen}</p>
//                 <p>{dulieu.storage}</p>
//                 <p>{dulieu.camera}</p>
//                 <p>{dulieu.pin}</p>
//                 <p>{dulieu.os}</p>
//                 <p>{dulieu.sim}</p>
//                 </div>
//             </div>
//             </div>
//         </div>
//     </div>

// </>
