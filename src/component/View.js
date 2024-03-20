import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { BsFillHeartFill } from "react-icons/bs";
import { MdAddCircleOutline } from "react-icons/md";
import { HiOutlineMinusCircle } from "react-icons/hi";
import { uparr } from "./Reducer";




export const View=()=>{
    const [param]=useSearchParams()
    let d=(parseInt(param.get('id')))
    console.log(d)
    const state=useSelector(
        ({Array})=>Array
    )
    console.log(state)
    const [data,setdata]=useState({})
    const dispatch=useDispatch()

    const getobj=()=>{
        let x=state.product.find((val,ind)=>{
            return d===val.id 
        })
        setdata(x)
    }

    useEffect(getobj)

    const basket=(data)=>{
       let s=state.product.map((a,b)=>{
          return data.id===a.id ? {...a,Iscart:!data.Iscart}:a
       })
       dispatch(uparr(s))
    }

    const add=(data)=>{
        let p=state.product.map((a,b)=>{
            return data.id===a.id ? {...a,quantity:data.quantity+1}:a
        })
       dispatch(uparr(p))

    }
    const sub=(data)=>{
        if(data.quantity>1){
             let  v=state.product.map((a,b)=>{
                return data.id===a.id ? {...a,quantity:data.quantity-1}:a
             })
       dispatch(uparr(v))

        }
        else{
            let  u=state.product.map((a,b)=>{
                return data.id===a.id ? {...a,Iscart:false}:a
             })
       dispatch(uparr(u))
        }
    }
    return(
       <div>
          <section id="sec-2" className="mt-5">
          <div className="container">
         <div className="row-1">
            <div className="col-3">
                <div className="category-1">
                    <h3>Categories</h3>
                      <h4>{data.name}</h4>
                       <ul>
                         <li>Eggs</li>
                         <li>Grocrey</li>
                         <li>Meats</li>
                         <li>Vegtables</li>
                         <li>Fruits</li>
                       </ul>
                </div>

                <div className="categories">
                     <h2>Brands</h2>
                      <h5>Fresho</h5>
                      <h5>Fresho {data.name}</h5>
                </div>
            </div>

            <div className="col-4">
                <div className="view-image pe-5">
                    <img src={data.img} className="w-100"/>
                </div>
            </div>

            <div className="col-5">
                <p className="fresho">Fresho</p>
                <div className="view-content">
                    <p >Fresho {data.name} Table Medium Anti Biotic Residue Free </p>
                </div>
                <div className="view-price">
                    <p>Mrp <del> Rs 159</del></p>
                    <h5>Price:Rs:{data.price *data.quantity}<span>(per pcs or kg)</span></h5>
                    <span>You Save 29%</span><br/>
                    <span>(Inclusive of all Taxes)</span>
                </div>

                 {data.Iscart ? (
                  <div className="view-cart1">
                      <i onClick={()=>add(data)}><MdAddCircleOutline/></i>
                      <p>{data.quantity}</p>
                      <i onClick={()=>sub(data)}><HiOutlineMinusCircle/></i>
                  </div>
                 ):(
                    <div className="view-cart">
                     <button >{data.quantity}</button>
                     <button className="basket" onClick={()=>basket(data)}>ADD TO BASKET</button>
                     <button >Save</button>
                    </div>
                 )}

                     

                <div className="view-time">
                    <p>{data.deltime}</p>
                </div>
            </div>

         </div>
       </div>
          </section>
       </div>
    )
}