import React  from 'react';
import {useEffect,useState} from "react";
import User from "../User/User";
import  './Users.css'

const Users = () => {
    let [users,setUsers]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value=>value.json())
            .then(value => setUsers(value));
    },[]);

    return (
        <div className="user">
            {
                users.map(value=><User key={value.id} name={value.name} surname={value.username} email={value.email}
                street={value.address.street} suite={value.address.suite} city={value.address.city} zipcode={value.address.zipcode}
                lat={value.address.geo.lat} lng={value.address.geo.lng} phone={value.phone} website={value.website}
               nameCompany={value.company.name} catchPhrase={value.company.catchPhrase} bs={value.company.bs}
                />)
            }
        </div>
    );
};

export default Users;