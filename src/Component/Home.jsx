import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function CallAPI() {
    var [dulieu, setData] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('https://backoffice.nodemy.vn/api/products?populate=*')
        .then((res) => {
            setData(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        })
    },[]);
    console.log("data:", dulieu)
    console.log("loai:",typeof(dulieu))
     var block = dulieu.map((item, index) => {
                return (                     
                    <div class="col-2" key={item.id}>               
                            <div class="card"> 
                                <Link to={`/product/${item.attributes.slug}`}>                           
                                    <img src={`https://backoffice.nodemy.vn${item.attributes.image?.data[0].attributes.formats.thumbnail.url}`}  class="card-img-top" alt="..."/>
                                </Link> 
                                <div class="card-body">
                                    <Link to={`/product/${item.attributes.slug}`}>
                                        <h6 class="text-truncate">{item.attributes.name}</h6>
                                        <p class="badge badge-danger">{item.attributes.price}đ</p>
                                    </Link>
                                    <button class="btn btn-primary" onClick={() => navigate(`/pay/${item.id}`)}>Mua ngay</button>
                                </div>
                            </div>
                    </div>
               )
    })
    return <>
    <div class="container">
        <div class="row">
            {block}
        </div>
    </div>
    </>
 
    
}
export default CallAPI;