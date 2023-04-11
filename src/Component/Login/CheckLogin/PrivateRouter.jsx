import jwt from "jsonwebtoken"
import { Navigate } from "react-router-dom"
import axios from 'axios';
const secretKey = 'your-secret-key'; // key được sử dụng để mã hóa JWT
export default function PrivateRouter(props) {
    var user = localStorage.getItem("user")
    user = JSON.parse(user)
    if (!user) {
        return <Navigate to="/login" />
    }
    else {
        const jwtToken = user.jwt;
        const decoded = jwt.verify(jwtToken, secretKey);
        var data = JSON.stringify({
            "identifier": user.user.email,
            "password": decoded
        });
        var config = {
            method: 'post',
            url: 'https://backoffice.nodemy.vn/api/auth/local/',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiaWF0IjoxNjgwMTY0MzY1LCJleHAiOjE2ODI3NTYzNjV9.DNl-fEIwImrbsRvnmZZP5dP64k9MQPQmDuZfXJjHHjY',
                'Content-Type': 'application/json'
            },
            data: data
        };
        axios(config)
            .then(function (response) {
                return props.children
            })
            .catch(function (error) {
                return <Navigate to="/login" />
            });
    }
}

// jwt.verify(jwtToken, secretKey, (err, decoded) => {
//   if (err) {
//     console.log('Lỗi khi giải mã JWT:', err);
//   } else {
//     console.log('Chuỗi đã giải mã:', decoded);
//   }
// });