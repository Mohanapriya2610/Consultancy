// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux';
// import { createNewPr } from '../../../../actions/ProductActions/Traction'


// const ProductInsert = () => {

//     const [ProductDistrict, setProductDistrict] = useState("")
//     const [name, setName] = useState("")
//     const [description, setDescription] = useState("")
//     const [price, setPrice] = useState("")
//     const [stocks, setStocks] = useState("")

//     const dispatch = useDispatch();
//     const submitHandler = (e) => {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append('name', name);
//         formData.append('ProductDistrict', ProductDistrict);
//         formData.append('description', description);
//         formData.append('price', price);
//         formData.append('stocks', stocks);
//         dispatch(createNewPr(formData));
//     }


//     return (
//         <div className="form">
//             <form onSubmit={submitHandler}>
//                 <label className='q'>Add Trichy Products</label>
//                 <div className="form-body">
//                     <div className="name">
//                         <label className="form__label" for="Name">Name </label><br></br>

//                         <input type="text" name="" id="name" value={name} className="form__input" placeholder="Name" onChange={(event) => {
//                             setName(event.target.value);
//                         }} />
//                     </div>
//                     <div className="email">
//                         <label className="form__label" for="email">Product District </label><br></br>
//                         <input type="text" id="email" value={ProductDistrict} className="form__input" placeholder="Email" onChange={(event) => {
//                             setProductDistrict(event.target.value);
//                         }} />
//                     </div>
//                     <div className="salary">
//                         <label className="form__label" for="salary">Description </label><br></br>
//                         <input className="form__input" type="text" value={description} id="salary" placeholder="Salary" onChange={(event) => {
//                             setDescription(event.target.value);
//                         }} />
//                     </div>
//                     <div className="contact">
//                         <label className="form__label" for="number">Price </label><br></br>
//                         <input className="form__input" type="number" value={price} minLength={10} id="contact" placeholder="contact num" onChange={(event) => {
//                             setPrice(event.target.value);
//                         }} required />
//                     </div>
//                     <div className="city">
//                         <label className="form__label" for="city"></label><br></br>
//                         <input className="form__input" type="text" value={stocks} id="city" placeholder="City" onChange={(event) => {
//                             setStocks(event.target.value);
//                         }} />
//                     </div>

//                     <div className="v">
//                         <button type="submit" className="btn1">Add</button>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default ProductInsert

import React, { useState } from 'react'
import { useDispatch} from 'react-redux';
import {createNewPr} from '../../../../actions/ProductActions/Traction'
const ProductInsert = () => {

    const [ProductDistrict,setProductDistrict] = useState("")
    const [name,setName] = useState("")
    const [description,setDescription] = useState("")
    const [price,setPrice] = useState("")
    const [stocks,setStocks] = useState("")
    const [image, setImage] = useState([]);

    const dispatch = useDispatch();

    const handleImage = (e) =>{
        const file = e.target.files[0];
        setFileToBase(file);
        console.log(file);
    }

    const setFileToBase = (file) =>{
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () =>{
            setImage(reader.result);
        }

    }

    
    const submitHandler = (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('ProductDistrict', ProductDistrict);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('stocks', stocks);
        formData.append('image',image);
        dispatch(createNewPr(formData));
    }
  return (
    <div className="form">
    <form onSubmit={submitHandler} enctype="multipart/form-data">
        <label className='q'>Add Trichy Products</label>
        <div className="form-body">
            <div className="name">
                <label className="form__label" for="Name">Name </label><br></br>

                <input type="text" name="" id="name" value={name} className="form__input" placeholder="Name" onChange={(event) => {
                    setName(event.target.value);
                }} />
            </div>
            <div className="email">
                <label className="form__label" for="email">Product District </label><br></br>
                <input type="text" id="email" value={ProductDistrict} className="form__input" placeholder="District" onChange={(event) => {
                    setProductDistrict(event.target.value);
                }} />
            </div>
            <div className="salary">
                <label className="form__label" for="salary">Description </label><br></br>
                <input className="form__input" type="text" value={description} id="salary" placeholder="Description" onChange={(event) => {
                    setDescription(event.target.value);
                }} />
            </div>
            <div className="contact">
                <label className="form__label" for="number">Price </label><br></br>
                <input className="form__input" type="number" value={price} minLength={10} id="contact" placeholder="Price" onChange={(event) => {
                    setPrice(event.target.value);
                }} required />
            </div>
            <div className="city">
                <label className="form__label" for="city">Stocks</label><br></br>
                <input className="form__input" type="text" value={stocks} id="city" placeholder="Stock" onChange={(event) => {
                    setStocks(event.target.value);
                }} />
            </div>
            <div className="city">
                <label className="form__label" for="city">Image</label><br></br>
                <input onChange={handleImage}  type="file" id="formupload" name="image" className="form-control"  />
            </div>

            <img className="img-fluid" src={image} alt="" />

            <div className="v">
                <button type="submit" className="btn1">Add</button>
            </div>
        </div>
    </form>
</div>
  )
}

export default ProductInsert
