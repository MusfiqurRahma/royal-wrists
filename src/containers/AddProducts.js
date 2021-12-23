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
            <h2 style={{marginRight:'90px',fontWeight:'900',marginTop:'20px'}}>Add Your Product From Here</h2>
            <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: 'column', width: '40%', margin: 'auto', marginTop: '30px' }}>
                <input {...register("title")}
                    placeholder='Title'
                    style={{
                        width: '80%',
                        padding: '8px',
                        borderRadius: '10px',
                        border: '1px solid gray',
                        marginBottom:'5px'
                    }}
                />
                <input {...register("name")}
                    placeholder='Products Name'
                    style={{
                        width: '80%',
                        padding: '8px',
                        borderRadius: '10px',
                        border: '1px solid gray',
                        marginBottom:'5px'
                    }}/>
                
                <textarea {...register("description")}
                    placeholder='Products Description'
                    style={{
                        width: '80%',
                        padding: '8px',
                        borderRadius: '10px',
                        border: '1px solid gray',
                        marginBottom:'5px'
                    }}/>
                <input type="number" {...register("price")}
                    placeholder='Products Price'
                    style={{
                        width: '80%',
                        padding: '8px',
                        borderRadius: '10px',
                        border: '1px solid gray',
                        marginBottom:'5px'
                    }}/>
                <input type="imageUrl" {...register("image")}
                    placeholder='Products Image'
                    style={{
                        width: '80%',
                        padding: '8px',
                        borderRadius: '10px',
                        border: '1px solid gray',
                        marginBottom:'5px'
                    }}/>
                <input type="submit" style={{
                        width: '80%',
                        padding: '8px',
                        borderRadius: '10px',
                        border: '1px solid gray',
                        marginBottom:'5px'
                    }}/>
            </form>
        </div>
    );
};

export default AddProducts;