import { useParams } from "react-router-dom";
import axios from 'axios';
import {  useEffect, useState } from 'react';
//import {  useMemo } from "react";
export default function Product() {
    const { slug } = useParams()
    var [dulieu, setData] = useState([]);
    var  blockMota, brand, image;
    useEffect(() => {
        axios.get('https://backoffice.nodemy.vn/api/products/'+slug+'?populate=*')
        .then((res) => {
            setData(res.data.data.attributes);
        })
        .catch((err) => {
            console.log(err);
        })
       
    },[]);

    brand =  dulieu?.idBrand?.data?.attributes?.name
    image =  dulieu?.image?.data[0].attributes.url
    var mota = dulieu?.description?.split(".");
    blockMota =  mota?.map((item, index) => {return <p>{item}.</p>})
     
  console.log("data25:", dulieu.quantityAvailable)
    return <>
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                <img src={`https://backoffice.nodemy.vn${image}`}  class="img-fluid" alt="Product Image"/>
                </div>
                <div class="col-lg-6">
                <h2>{dulieu.name}</h2>
                <p>Brand: { brand} </p>
                <h3 class="badge badge-success" >Giá cũ: {dulieu.oldPrice}đ</h3>
                <h3 class="badge-danger" >{dulieu.price}đ</h3>
                <hr/>
                <p class ="text-success">{blockMota}</p>
                {dulieu.quantityAvailable="1"?(<p class ="text-primary">Số lượng còn lại: {dulieu.quantityAvailable}</p>) : (<p class ="text-danger">Số lượng còn lại: {dulieu.quantityAvailable}</p>) }
                <hr/>
                <form>
                    <div class="form-group">
                    <label for="quantity">Quantity:</label>
                    <input type="number" class="form-control" id="quantity" value="1"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Add to Cart</button>
                </form>
                </div>
                <h4>Description</h4>
                <div class="container">
                <div class="row">
                    <div class="col-12">
                    <p>{blockMota}</p>
                    <p>CPU: {dulieu.cpu}</p>
                    <p>Ram: {dulieu.ram}</p>
                    <p>{dulieu.screen}</p>
                    <p>{dulieu.storage}</p>
                    <p>{dulieu.camera}</p>
                    <p>{dulieu.pin}</p>
                    <p>{dulieu.os}</p>
                    <p>{dulieu.sim}</p>             
                    </div>
                </div>
                </div>
            </div>
        </div>

    </>
    
}