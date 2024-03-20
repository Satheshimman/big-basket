import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartt,uparr } from "./Reducer";
import { BsFillHeartFill } from "react-icons/bs";
import { MdAddCircleOutline } from "react-icons/md";
import { HiOutlineMinusCircle } from "react-icons/hi";

export const Cart =()=>{
    const state=useSelector(
        ({Array})=>Array
    )
    
    const dispatch=useDispatch()
    const m=useNavigate()
    const cart=()=>{
     var y=   state.product.filter((a,b)=>{
           return a.Iscart===true ? a:""
     })
     dispatch(cartt(y))
     console.log (y)
    }
useEffect(cart,[])

const plus=(val,i)=>{
   var u=state.product.map((a,b)=>{
      return val.id===a.id ? {...a,quantity:val.quantity+1,kg:val.kg+1}:a
   })   
   dispatch(uparr(u))
   cart()
}




const minus=(val,i)=>{
    if(val.quantity>1){
        var x=state.product.map((a,b)=>{
            return val.id===a.id ? {...a,quantity:val.quantity-1,kg:val.kg-1}:a
        })
        dispatch(uparr(x))
    }
    else{
        var v=state.product.map((a,b)=>{
            return val.id===a.id ? {...a,Iscart:false}:a
        })
        dispatch(uparr(v))

    }
    cart()
}

const total =()=>{
    var tquan=document.getElementById("tquan")
    var tprice=document.getElementById("tprice")
   
   var x=state.cart
   var total=0
   var quantity=0
   for(var i=0; i<x.length; i++){
     var calc= x[i].price*x[i].quantity
     total+=calc
   }

   for(var i=0; i<x.length; i++){
     var quan=x[i].quantity
     quantity+=quan
   }


   console.log(total)
   console.log(quantity)
   tquan.innerHTML=quantity
   tprice.innerHTML=total
}

useEffect(()=>{
    total()
})

const showbill=()=>{
    var bill=document.getElementById("bill")
   bill.setAttribute("class","d-block")

}


return(
    <div>
        <section id="cart">
            <div className="container-1">
                <div className="">
                    <div className="cart my-4">
                        {state.cart.map((val,i)=>{
                            return(
                                <div className="cart-content row-1">
                                    <div className="col-2">
                                        <img src={val.img} className="w-75"/>
                                    </div>
                                    <div className="col-4 cart-spec">
                                        <p>fresho</p>
                                        <h6>Fresho {val.name} {val.kg}Kg (or) pcs</h6>
                                        <p>{val.kg} {val.price*val.quantity}.00</p>
                                    </div>
                                    <div className="col-3">
                                        <div className="cart-in flex">
                                                <i onClick={()=>plus(val,i)}><MdAddCircleOutline/></i>
                                                <p>{val.quantity}</p>
                                                <i onClick={()=>minus(val,i)}><HiOutlineMinusCircle/></i>
                                        </div>
                                    </div>
                                    <div className="col-3 cart-out">
                                        <h4> Rs {val.price}.00</h4>
                                        <h6 >Saved Rs.16.00</h6>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>

        <section id="sec-2" className="mt-5">
            <div className="container">
                <div className="row-1">
                    <div className="col-12">
                        <div className="total-button text-center">
                            <button onClick={showbill}>TotalButton</button>
                        </div>
                        <div className="bill">
                            <div className="col-6">
                                <table id="bill" className="d-none">
                                    <thead>
                                        <tr>
                                            <th>S:No</th>
                                            <th>ProductName</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                            <th>Total Price</th>
                                        </tr>
                                        
                                    </thead>

                                    <tbody>
                                       {state.cart.map((a,b)=>{
                                            return(
                                                <>
                                                <tr>
                                                <td>{b+1} </td>
                                                <td>{a.name} </td>
                                                <td>{a.quantity}.00</td>
                                                <td>{a.price}.00</td>
                                                <td>{a.price*a.quantity}.00</td>
                                                </tr>
                                                
                                                </>
                                               
                                            )
                                       })}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                        <td></td>
                                        <td></td>
                                        <td id="tquan"></td>
                                        <td></td>
                                        <td id="tprice"></td>
                                        </tr>
                                        
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
)

}