import React from 'react';
import { useForm } from "react-hook-form";

const AddProducts = () => {
    const { register, handleSubmit,reset} = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/addProducts', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('Added Products')
                    reset()
                }
            })
   };
    return (
        <div>
              <form onSubmit={handleSubmit(onSubmit)} style={{display:"flex",flexDirection:'column',width:'40%',margin:'auto'}}>
                <input {...register("title")}
                    placeholder='Title'
                />
                <input {...register("name")}
                    placeholder='Products Name'
                />
                
                <textarea {...register("description")}
                    placeholder='Products Description'
                />
                <input type="number" {...register("price")}
                    placeholder='Products Price'
                />
                <input type="imageUrl" {...register("image")}
                    placeholder='Products Image'
                />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProducts;