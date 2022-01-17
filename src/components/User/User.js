import React from 'react';
//import '.User.css'
const User = (props) => {
    let {key,name,username,email,street,suite,city,zipcode,lat,lng,phone,website,nameCompany,catchPhrase,bs}=props;
    return (
        <div className="userP">
            <li>{key}</li>
            <li>Name-{name}</li>
            <li>Surname-{username}</li>
            <li>Email-{email}</li>
            <li>Street-{street}}</li>
            <li>Suite-{suite}</li>
            <li>City-{city}</li>
            <li>Zipcode-{zipcode}</li>
            <li>Lat-{lat}</li>
            <li>Lng-{lng}</li>
            <li>Phone-{phone}</li>
            <li>Website-{website}</li>
            <li>Company Name-{nameCompany}</li>
            <li>catchPhrase-{catchPhrase}</li>
            <li>bs-{bs}</li>
        </div>
    );
};

export default User;