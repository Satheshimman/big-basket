import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Style.scss"
import { BsFillHeartFill } from "react-icons/bs";
import { MdAddCircleOutline } from "react-icons/md";
import { HiOutlineMinusCircle } from "react-icons/hi";
import { uparr } from "./Reducer";
import { useNavigate } from "react-router-dom";






export const Home=()=>{
    const state=useSelector(
        ({Array})=>Array
    )
    
    const dispatch=useDispatch()
    const m=useNavigate()
    const adcart=(val,i)=>{
       var z=state.product.map((a,b)=>{
           return i===b ? {...a,Iscart:!val.Iscart,show1:!val.show1,show:!val.show}:a
       })

       dispatch (uparr(z))
       console.log(z)
       console.log(state.product)
    }
    const viewCart=()=>{
      m("/cart")
    }

    const viewFav=()=>{

    }

    const plus=(val,i)=>{
        var y=state.product.map((a,b)=>{
            return val.id===a.id ? {...a,quantity:val.quantity+1,kg:val.kg+1}:a
        })
        dispatch(uparr(y))
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
                return i===b ? {...a,Iscart:false}:a
            })
            dispatch(uparr(v))

        }
    }

    const details=(id)=>{
        m(`/view?id=${id}`)
    }

    const fav=(val,i)=>{
        let f= state.product.map((a,b)=>{
             return val.id===a.id ? {...a,Isfav:!val.Isfav}:a
             
         })
         dispatch(uparr(f))

    }

    return(
        <div>
           <section id="sec-1" className="">
              <div className="container-1">
                 <div className="row-1">
                    <div className="col-3">
                       <div className="top-content ">
                           <img src="https://logos-download.com/wp-content/uploads/2021/01/Bigbasket_Logo.png" className=""/>
                       </div> 
                    </div>
                       <div className="col-5">
                          <input placeholder="enter your product" type="text" className="w-100 py-1 px-1 mb-4"/>
                       </div>
                       <div className="col-4">
                          
                       </div>
                 </div>
              </div>
           </section>
           <section id="sec-2">
              <div className="sec-2-img">
                 <img src="https://www.bigbasket.com/media/uploads/banner_images/hp_fom_m_bbpl-staples_460_290823_Bangalore.jpg" className="w-100"/>
              </div>
           </section>

           <section id="sec-3">
              
              
           </section>

           <section id="sec-4">
              <div className="container-1">
              <button onClick={viewCart}>Cart</button>
                    <button onClick={viewFav}>Favoutite</button>
                 <div className="row-1">
                    
                    {
                      state.product.map((val,ind)=>{
                          return(
                            <div className="col-lg-3 col-6 ">
                                <div className="box px-3" >
                                    <div className="cardd">
                                    <div className="card-img"onClick={()=>details(val.id)}>
                                        <img src={val.img} className="w-100"/>
                                    </div>
                                    <div className="veg-name">
                                        <h6>{val.name}(Loose)</h6>
                                    </div>
                                    <div className="kg-price">
                                        <h6>{val.kg} kg(or)pcs-Rs:{val.price*val.quantity}</h6> 
                                     </div>   
                                    <div className="row-1 kg-price">
                                        <p>Mrp:<span>Rs:180</span>Rs:{val.price}.00</p>
                                    </div>
                                    <div className="del">
                                        <span>{val.deltime}</span>
                                    </div>
                                    <div className="function">
                                   {val.Iscart ?  <div className="show1 row-1 ">
                                                <i onClick={()=>plus(val,ind)}><MdAddCircleOutline/></i>
                                                <p>{val.quantity}</p>
                                                <i onClick={()=>minus(val,ind)}><HiOutlineMinusCircle/></i>
                                                <i>


                                                </i>
                                            </div>  :  <div className="show row-1">
                                                        <i onClick={()=>fav(val,ind)} style={{color:val.Isfav? "red":"black"}}><BsFillHeartFill/></i>
                                                        <button onClick={()=>adcart(val,ind)}>AddCart</button>
                                                        </div>
                                    } 
                                           
                                        
                                       
                                     </div>   
                                    
                                </div>

                                </div>
                            </div>
                          )
                      })
                    }
                     
                 </div>
              </div>
           </section>
        </div>
    )
}