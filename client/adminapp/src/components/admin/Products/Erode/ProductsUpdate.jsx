import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {getErode,updateErodes} from '../../../../actions/ProductActions/Eactions';


const ProductsUpdate = () => {

    const [name,setName] = useState("")
    const [description,setDescription] = useState("")
    const [stocks,setStocks] = useState("")
    const [price,setPrice] = useState("")
    const { isErodeUpdated, Erode } = useSelector(state => state.ErodeState)

    // console.log(Erode)

    const { id: userId } = useParams();
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description)
        formData.append('stocks', stocks);
        formData.append('price', price);
        dispatch(updateErodes(userId, formData))
    }
    
    useEffect(() => {
        dispatch(getErode(userId))
    }, [isErodeUpdated, dispatch])


    useEffect(() => {
        if (Erode._id) {
            setName(Erode.name);
            setDescription(Erode.description);
            setPrice(Erode.price);
            setStocks(Erode.stocks)
        }
    }, [Erode])



  return (
    <div className='form'>
            <form className="mt-4" onSubmit={submitHandler}>
                <div className="form-body">
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form__label">Name</label><br></br>
                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} class="form__input" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form__label">Description</label><br></br>
                        <input type="text" name="age" value={description} onChange={(e) => setDescription(e.target.value)} class="form__input" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form__label">Stocks</label><br></br>
                        <input type="text" name="sal" value={stocks} onChange={(e) => setStocks(e.target.value)} class="form__input" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form__label">Price</label><br></br>
                        <input type="number" name="mob" value={price} onChange={(e) => setPrice(e.target.value)} class="form__input" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" class="btn btn-warning">UPDATE</button>
                </div>
            </form>
        </div>
    
  )
}

export default ProductsUpdate