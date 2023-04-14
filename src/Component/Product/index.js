import styles from "./product.module.scss";
import classname from "classnames/bind";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const cx = classname.bind(styles);
function Product() {
    // Lấy dữ liệu từ url
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://backoffice.nodemy.vn/api/products?populate=*')
            .then((res) => {
                setData(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);
    
}

export default Product