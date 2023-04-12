import styles from "./Detail.module.scss"
import classname from "classnames/bind";
import { Carousel } from 'antd';
const cx = classname.bind(styles);
export default function Details() {
    return <>
    <div className={cx("box_main")}>
    <div className={cx("box_left")}>
        <div className={cx("box_left_top")}>
            {App()}
        </div>
        <div class="scrolling_inner scroll-right">
                    <div class="box01__tab scrolling">
                            <div id="thumb-featured-images-gallery-0" class="item itemTab active-scroll-to active" data-gallery-id="featured-images-gallery" data-color-id="0" data-is-full-spec="False" data-color-order-id="0" data-isfeatureimage="True">
                                <div class="item-border">
                                        <i class="icondetail-noibat"></i>
                                </div>
                                <p>Điểm nổi bật</p>
                            </div>
                            <div id="thumb-color-images-gallery-5" class="item itemTab" data-gallery-id="color-images-gallery" data-color-id="5" data-is-full-spec="False" data-color-order-id="2" data-isfeatureimage="True">
                                <div class="item-border">
                                        <img data-src="https://cdn.tgdd.vn/Products/Images/42/298377/samsung-galaxy-a34-5g-bac-thumb-200x200.jpg" alt="Bạc" width="41" height="41" loading="lazy" class=" lazyloaded" src="https://cdn.tgdd.vn/Products/Images/42/298377/samsung-galaxy-a34-5g-bac-thumb-200x200.jpg"/>
                                </div>
                                <p>Bạc</p>
                            </div>
                            <div id="thumb-color-images-gallery-11" class="item itemTab" data-gallery-id="color-images-gallery" data-color-id="11" data-is-full-spec="False" data-color-order-id="3" data-isfeatureimage="True">
                                <div class="item-border">
                                        <img data-src="https://cdn.tgdd.vn/Products/Images/42/298377/samsung-galaxy-a34-5g-thumb-200x200.jpg" alt="Đen" width="41" height="41" loading="lazy" class=" lazyloaded" src="https://cdn.tgdd.vn/Products/Images/42/298377/samsung-galaxy-a34-5g-thumb-200x200.jpg"/>
                                </div>
                                <p>Đen</p>
                            </div>
                            <div id="thumb-color-images-gallery-133" class="item itemTab" data-gallery-id="color-images-gallery" data-color-id="133" data-is-full-spec="False" data-color-order-id="4" data-isfeatureimage="True">
                                <div class="item-border">
                                        <img data-src="https://cdn.tgdd.vn/Products/Images/42/298377/samsung-galaxy-a34-5g-xanh-thumb-200x200.jpg" alt="Xanh" width="41" height="41" loading="lazy" class=" lazyloaded" src="https://cdn.tgdd.vn/Products/Images/42/298377/samsung-galaxy-a34-5g-xanh-thumb-200x200.jpg"/>
                                </div>
                                <p>Xanh</p>
                            </div>
                            <div id="thumb-unbox-gallery-0" class="item itemTab is-show-popup" data-gallery-id="unbox-gallery" data-color-id="0" data-is-full-spec="False" data-color-order-id="0" data-isfeatureimage="True">
                                <div class="item-border">
                                        <i class="icondetail-box"></i>
                                </div>
                                <p>Hình mở hộp</p>
                            </div>
                            <div id="thumb-specification-gallery-0" class="item itemTab is-show-popup" data-gallery-id="specification-gallery" data-color-id="0" data-is-full-spec="True" data-color-order-id="0" data-isfeatureimage="True">
                                <div class="item-border">
                                        <i class="icondetail-thongso"></i>
                                </div>
                                <p>Thông số kỹ thuật</p>
                            </div>
                            <div id="thumb-article-gallery-0" class="item itemTab is-show-popup" data-gallery-id="article-gallery" data-color-id="0" data-is-full-spec="False" data-color-order-id="0" data-isfeatureimage="True">
                                <div class="item-border">
                                        <i class="icondetail-danhgia"></i>
                                </div>
                                <p>Thông tin sản phẩm</p>
                            </div>
                    </div>
                </div>
    </div>
    <div className={cx("box_right")}>
        
    </div>

    </div>
    </> 
}

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  const App = () => (
    <Carousel autoplay>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  );
  