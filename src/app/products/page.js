'use client';

import { useEffect, useState } from "react";
import axios from 'axios';

export default function  product(){
    const [state, setState] = useState();

    const getData = async ()=>{
        let {data} = await axios.get('https://dummyjson.com/products');
        setState(data.products);
        // console.log(data.data);
        console.log(data)
    }

    useEffect(()=>{
    getData();
    },[])
    return(
        <div>
            <h1>Product List</h1>
            {state? state.map((value)=>(
                <div key={value.id}>
                    <h3>{value.title}</h3>
                </div>
            )):""}
        </div>
    )
}