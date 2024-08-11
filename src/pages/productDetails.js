// import React, { useEffect, useState, useContext, useCallback } from 'react'
// import { useParams, useNavigate } from 'react-router-dom'
// import summaryAPI from '../common/api'
// import Context from '../context/context';
// //import addToCart from '../helpers/addToCart';
// import e from 'express';
 
// //Loi 31 error o productDetail //Loi 31 error o productDetail //Loi 31 error o productDetail
// //Loi 31 error o productDetail //Loi 31 error o productDetail //Loi 31 error o productDetail
// //Loi 31 error o productDetail //Loi 31 error o productDetail //Loi 31 error o productDetail


// //Kokoda



// const ProductDetails = () => {

//     const [data, setData] = useState({
//         name: "",
//         category: "",
//         brand: "",
//         price: "",
//         productImage: []
//     })

//     const params = useParams()

//     const [loading, setLoading] = useState(true)
//     const productImageListLoading = new Array(4).fill(null)
//     const [activeImage, setActiveImage] = useState("")

//     const [zoomImageCoordinate, setZoomImageCoordinate] = useState({
//         x: 0,
//         y: 0
//     })
//     const [zoomImage, setZoomImage] = useState(false)


//     const fetchProductDetail = async () => {
//         const res = await fetch(summaryAPI.getProductDetails.url, {
//             method: summaryAPI.getProductDetails.method,
//             headers: {
//                 "content-type": "application/json"
//             },
//             body: JSON.stringify({
//                 productId: params.id
//             })
//         })

//         if (!res.ok) {
//             throw new Error('Network response was not ok');
//         }

//         const dataRespone = await res.json()

//         setData(dataRespone.data)
//         setActiveImage(dataRespone?.data?.productImage[0])


//     }

//     console.log("datatatata", data)


//     useEffect(() => {
//         fetchProductDetail()
//     }, [])

//     const handleMouseEnterProduct = (imageURL) => {
//         setActiveImage(imageURL)
//     }

//     const handleZoomImage = useCallback((e) => {
//         setZoomImage(true)
//         const { left, top, width, height } = e.target.getBoundingClientRect()
//         console.log("coordinate", left, top, width, height)

//         const x = (e.clientX - left) / width
//         const y = (e.clientY - top) / height

//         setZoomImageCoordinate({
//             x,
//             y
//         })
//     }, [zoomImageCoordinate])

//     const handleLeaveImageZoom = () => {
//         setZoomImage(false)
//     }

//     // const handleAddToCart = async(e,id)=>{
//     //     await addToCart(e,id)
//     // }




//     return (
//         <div className='container mx-auto p-4'>

//             <div className='min-h-[200px] flex flex-col lg:flex-row gap-4'>
//                 {/***product Image */}
//                 <div className='h-96 flex flex-col lg:flex-row-reverse gap-4'>

//                     <div className='h-[300px] w-[300px] lg:h-96 lg:w-96 bg-slate-200 relative p-2'>
//                         <img src={activeImage} className='h-full w-full object-scale-down mix-blend-multiply' onMouseMove={handleZoomImage} onMouseLeave={handleLeaveImageZoom} />

//                         {/**product zoom */}
//                         {
//                             zoomImage && (
//                                 <div className='hidden lg:block absolute min-w-[500px] overflow-hidden min-h-[400px] bg-slate-200 p-1 -right-[510px] top-0'>
//                                     <div
//                                         className='w-full h-full min-h-[400px] min-w-[500px] mix-blend-multiply scale-150'
//                                         style={{
//                                             background: `url(${activeImage})`,
//                                             backgroundRepeat: 'no-repeat',
//                                             backgroundPosition: `${zoomImageCoordinate.x * 100}% ${zoomImageCoordinate.y * 100}% `

//                                         }}
//                                     >

//                                     </div>
//                                 </div>
//                             )
//                         }

//                     </div>

//                     <div className='h-full'>
//                         {
//                             loading ? (
//                                 <div className='flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full'>
//                                     {
//                                         productImageListLoading.map((el, index) => {
//                                             return (
//                                                 <div className='h-20 w-20 bg-slate-200 rounded animate-pulse' key={"loadingImage" + index}>
//                                                 </div>
//                                             )
//                                         })
//                                     }
//                                 </div>

//                             ) : (
//                                 <div className='flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full'>
//                                     {
//                                         data?.productImage?.map((imgURL, index) => {
//                                             return (
//                                                 <div className='h-20 w-20 bg-slate-200 rounded p-1' key={imgURL}>
//                                                     <img src={imgURL} className='w-full h-full object-scale-down mix-blend-multiply cursor-pointer' onMouseEnter={() => handleMouseEnterProduct(imgURL)} onClick={() => handleMouseEnterProduct(imgURL)} />
//                                                 </div>
//                                             )
//                                         })
//                                     }
//                                 </div>
//                             )
//                         }
//                     </div>
//                 </div>

//                 {/***product details */}
                
//                         <div className='grid gap-1 w-full'>
                            
//                         </div>
                    
                        
//                             <div className='flex flex-col gap-1'>
//                                 <p className='bg-blue-200 text-blue-600 px-2 rounded-full inline-block w-fit'>{data?.brand}</p>
//                                 <h2 className='text-2xl lg:text-4xl font-medium'>{data?.name}</h2>
//                                 <p className='capitalize text-slate-400'>{data?.category}</p>


//                                 <div className='flex items-center gap-2 text-2xl lg:text-3xl font-medium my-1'>
//                                     <p className='text-blue-600'>{data?.price}</p>
//                                 </div>

//                                 <div className='flex items-center gap-3 my-2'>
//                                     <button className='border-2 border-blue-600 rounded px-3 py-1 min-w-[120px] text-blue-600 font-medium hover:bg-blue-600 hover:text-white' >Buy</button>
//                                     <button className='border-2 border-blue-600 rounded px-3 py-1 min-w-[120px] font-medium text-white bg-blue-600 hover:text-blue-600 hover:bg-white' /*onClick={(e)=>handleAddToCart(e,data?._id)}*/>Add To Cart</button>
//                                 </div>
//                             </div>
                        
                

//             </div>
//         </div>
//     )
// }


// export default ProductDetails