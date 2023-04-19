import "./BoxRight.css";
import { Typography, Space, Row, Col } from "antd";

import { Link } from "react-router-dom";
import Buybtn from "../components/Buybtn";
const { Text } = Typography;
export default function BoxRight({ data }) {
  function checkCart(pops) {
    const { cart, item } = pops;
    for (const element of cart.items) {
      if (element.id === item.id) {
        return true;
      }
    }
    return false;
  }

  function addCart() {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    const cart = {
      id: user.user.id,
      items: user.cart ? user.cart.items : [],
    };

    var item = {
      id: data.slug,
      count: 1,
    };
    if (checkCart({ cart, item })) {
      for (const element of cart.items) {
        if (element.id === item.id) {
          element.count++;
        }
      }
    } else {
      cart.items.push(item);
    }
    user.cart = cart;
    localStorage.setItem("user", JSON.stringify(user));
  }

  return (
    <>
      <dir className="box-right">
        <div className="">
          <Space direction="vertical" size="small">
            <Text className="name-product" strong>
              {data?.name}
            </Text>
            <Space>
              <Text className="box-price-old">{data?.oldPrice}₫</Text>
              <Text strong className="box-price-present">
                {data?.price}₫
              </Text>
              <Text className="box-price-percent" type="danger">
                -{(100 - (data?.oldPrice / data?.price) * 100).toFixed(0)}%
              </Text>
            </Space>
            <Text className="loyalty__main">
              {" "}
              <img
                width={24}
                src="https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/promote_loyalty/logo.png"
                alt=""
              />{" "}
              <span style={{ fontWeight: "bold" }}>+74.950</span>{" "}
              <span>điểm tích lũy Quà Tặng VIP</span>{" "}
              <img
                width={20}
                src="https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/promote_loyalty/question_mark.png"
                alt=""
              />
            </Text>
          </Space>
        </div>
        <div className="">
          <div class="khuyen-mai">
            <div class="pr-top">
              <p class="pr-txtb">Khuyến mãi </p>
              <i class="pr-txt">
                Giá và khuyến mãi dự kiến áp dụng đến 23:00 | 26/04
              </i>
            </div>
            <div class="pr-content">
              <div class="pr-item">
                <div class="divb t4">
                  <span class="nb">1</span>
                  <div class="divb-right">
                    <p>
                      Thu cũ Đổi mới: Giảm đến 2 triệu (Tùy model máy cũ, không
                      kèm các hình thức thanh toán online, mua kèm){" "}
                      <a href="https://www.thegioididong.com/thu-cu-doi-moi">
                        {" "}
                        Xem chi tiết
                      </a>
                    </p>
                  </div>
                </div>

                <div class="divb t4">
                  <span class="nb">2</span>
                  <div class="divb-right">
                    <p>
                      Mua kèm Laptop ưu đãi thêm (Tuỳ model và không kèm khuyến
                      mãi khác của sản phẩm mua kèm):{" "}
                    </p>
                    <p class="circle ">
                      Phụ kiện Apple: Giảm đến 50%.{" "}
                      <a href="https://www.thegioididong.com/tin-tuc/phu-kien-apple-giam-gia-cuc-ngon-den-45-khi-mua-kem-1487686">
                        {" "}
                        Xem chi tiết
                      </a>
                    </p>
                    <p class="circle ">
                      Apple Watch: Giảm đến 27%.{" "}
                      <a href="https://www.thegioididong.com/tin-tuc/apple-watch-mua-kem-giam-30-1481457">
                        {" "}
                        Xem chi tiết
                      </a>
                    </p>
                    <p class="circle ">
                      iPad: Giảm đến 50%.{" "}
                      <a href="https://www.thegioididong.com/tin-tuc/ipad-129-inch-2021-giam-25-khi-mua-kem-iphone-13-pro-iphone-13-pro-max-1436136">
                        {" "}
                        Xem chi tiết
                      </a>
                    </p>
                    <p class="circle ">
                      Macbook: Giá chỉ từ 17.840.000đ.{" "}
                      <a href="http://www.thegioididong.com/tin-tuc/macbook-giam-them-3-khi-mua-kem-iphone-ipad-apple-watch-1487450">
                        {" "}
                        Xem chi tiết
                      </a>
                    </p>
                  </div>
                </div>
                <div class="divb t4">
                  <span class="nb">3</span>
                  <div class="divb-right">
                    <p>
                      Nhập mã MM30THANG4 giảm tối đa 100.000đ khi thanh toán qua
                      MOMO
                      <a
                        href="http://www.thegioididong.com/tin-tuc/don-dai-le-ron-rang-nhap-ma-mm30thang4-giam-ngay-2-toi-da-100k-1523308"
                        target="_blank"
                      >
                        (click xem chi tiết)
                      </a>
                    </p>
                  </div>
                </div>
                <div class="divb t4">
                  <span class="nb">4</span>
                  <div class="divb-right">
                    <p>
                      Giảm 15% gói Bảo hiểm rơi vỡ{" "}
                      <a
                        href="http://www.thegioididong.com/tin-tuc/khuyen-mai-den-15-goi-bao-hiem-roi-vo-khi-mua-kem-iphone-ipad-macbook-apple-watch-1519626"
                        target="_blank"
                      >
                        (click xem chi tiết)
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="pr-item text">
                <p>
                  <span class="note">(*)</span> Giá hoặc khuyến mãi không áp
                  dụng trả góp lãi suất đặc biệt (0%, 0.5%, 1%)
                </p>
              </div>
              <div className="block-button">
                <Row className="row">
                  <Col className="col" span={24}>
                    <Link className="btn-buynow" to="/">
                      MUA NGAY
                    </Link>
                  </Col>
                </Row>
                <Row className="row">
                  <Col className="col" span={12}>
                    <Link className="btn-left" to="/">
                      MUA TRẢ GÓP
                      <span>Duyệt hồ sơ trong 5 phút</span>
                    </Link>
                  </Col>
                  <Col className="col" span={12}>
                    <Link className="btn-right" to="/">
                      TRẢ GÓP 0% QUA THẺ
                      <span>Visa, Mastercard, JCB, Amex</span>
                    </Link>
                  </Col>
                </Row>
              </div>
              <div className="">
                <p class="callorder">
                  Gọi đặt mua <a href="tel:0387102216">038.7102.216</a> (7:30 -
                  22:00)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="block-button">
          <Row className="row">
            <Col className="col" span={24}>
              <Buybtn
                name={data?.name}
                handleClick={() => {
                  addCart();
                }}
              />
            </Col>
          </Row>
          <Row className="row">
            <Col className="col" span={12}>
              <Link className="btn-left" to="/">
                MUA TRẢ GÓP
                <span>Duyệt hồ sơ trong 5 phút</span>
              </Link>
            </Col>
            <Col className="col" span={12}>
              <Link className="btn-right" to="/">
                TRẢ GÓP 0% QUA THẺ
                <span>Visa, Mastercard, JCB, Amex</span>
              </Link>
            </Col>
          </Row>
        </div>
        <div className="">
          <p class="callorder">
            Gọi đặt mua <a href="tel:0387102216">038.7102.216</a> (7:30 - 22:00)
          </p>
        </div>
        <div className="">
          <Text className="name-product" strong>
            Cấu hình {data?.name}
          </Text>
          <div class="parameter">
            <ul class="parameter__list 284139 active">
              <li>
                <p class="lileft">CPU:</p>
                <div class="liright">
                  <span class="comma">{data?.cpu}</span>
                </div>
              </li>
              <li>
                <p class="lileft">RAM:</p>
                <div class="liright">
                  <span class="comma">{data?.ram}</span>
                </div>
              </li>
              <li>
                <p class="lileft">Ổ cứng:</p>
                <div class="liright">
                  <span class="">512 GB SSD NVMe PCIe</span>
                </div>
              </li>
              <li>
                <p class="lileft">Màn hình:</p>
                <div class="liright">
                  <span class="comma">15.6"</span>
                  <span class="">Full HD (1920 x 1080) </span>
                </div>
              </li>
              <li>
                <p class="lileft">Card màn hình:</p>
                <div class="liright">
                  <span class="comma">Card tích hợp</span>
                  <span class="">Intel Iris Xe</span>
                </div>
              </li>
              <li>
                <p class="lileft">Cổng kết nối:</p>
                <div class="liright">
                  <span class="comma">USB Type-C</span>
                  <span class="comma">HDMI</span>
                  <span class="comma">Jack tai nghe 3.5 mm</span>
                  <span class="">2 x USB 3.2</span>
                </div>
              </li>
              <li>
                <p class="lileft">Hệ điều hành:</p>
                <div class="liright">
                  <span class="">Windows 11 Home SL</span>
                </div>
              </li>
              <li>
                <p class="lileft">Thiết kế:</p>
                <div class="liright">
                  <span class="">Vỏ nhựa</span>
                </div>
              </li>
              <li>
                <p class="lileft">Kích thước, khối lượng:</p>
                <div class="liright">
                  <span class="">
                    Dài 358.5 mm - Rộng 242 mm - Dày 17.9 mm - Nặng 1.69 kg
                  </span>
                </div>
              </li>
              <li>
                <p class="lileft">Thời điểm ra mắt:</p>
                <div class="liright">
                  <span class="">2022</span>
                </div>
              </li>
            </ul>
            <span class="btn-detail btn-short-spec ">
              <span>Xem thêm cấu hình chi tiết</span>
            </span>
          </div>
        </div>
      </dir>
    </>
  );
}
