import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {getTiruppur,updateTiruppurs} from '../../../../actions/ProductActions/Tactions';



const ProductsUpdate = () => {

    const [name,setName] = useState("")
    const [description,setDescription] = useState("")
    const [stocks,setStocks] = useState("")
    const [price,setPrice] = useState("")
    const { isTiruppurUpdated, Tiruppur } = useSelector(state => state.TiruppurState)

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
        dispatch(updateTiruppurs(userId, formData))
    }
    
    useEffect(() => {
        dispatch(getTiruppur(userId))
    }, [isTiruppurUpdated, dispatch])


    useEffect(() => {
        if (Tiruppur._id) {
            setName(Tiruppur.name);
            setDescription(Tiruppur.description);
            setPrice(Tiruppur.price);
            setStocks(Tiruppur.stocks)
        }
    }, [Tiruppur])



  return (
    <div>
    <form className="mt-4" onSubmit={submitHandler}>
        <div className="row">
            <div class="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputEmail1" class="form-label">Name</label>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputPassword1" class="form-label">Description</label>
                <input type="text" name="age" value={description} onChange={(e) => setDescription(e.target.value)} class="form-control" id="exampleInputPassword1" />
            </div>
            <div class="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputPassword1" class="form-label">Stocks</label>
                <input type="text" name="sal" value={stocks} onChange={(e) => setStocks(e.target.value)} class="form-control" id="exampleInputPassword1" />
            </div>
            <div class="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputPassword1" class="form-label">Price</label>
                <input type="number" name="mob" value={price} onChange={(e) => setPrice(e.target.value)} class="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" class="btn btn-warning">UPDATE</button>
        </div>
    </form>
</div>
  )
}

export default ProductsUpdate