
import React, { useEffect, useState } from 'react'
import ItemProduct from '../../../layout/users/component/ItemProduct/ItemProduct';
import SliderTop from '../../../layout/users/component/SliderTop/SliderTop';
import SliderCate from '../../../layout/users/component/SliderCate/SliderCate';
import axios from 'axios';
const Home = () => {
  const [products, setProducts] = useState([])

  // const  products, setProducts ]= useProductContext();
  useEffect(() => {
    (async () => {
      const url = 'http://127.0.0.1:8000/api/client/products_details/';
      try {
        const res = await axios.get(url, {
          headers: {
            'Api_key': 'uikpRisBWpz3JSRVAEPixzBOhCGf7UXdSMNaRFwdTmU4ZQNLGkUYPwfLejdb',
          },
        });
          setProducts(res.data.data || []); // Sử dụng dấu || [] để đảm bảo products luôn là mảng
      } catch (error) {
          console.error('Error fetching products:', error);
          setProducts([]); // Trong trường hợp có lỗi, gán mảng rỗng
      }
    })()
  }, [setProducts]);

  return (
      <div>
          <SliderTop/>
          <div className="container max-w-[1140px] px-20 gap-3 mx-auto mt-16">
              <h2 className='text-4xl text-textColor1 block pb-5'>Top Category</h2>
          </div>
          <SliderCate/>
          <div className="container max-w-[1140px] gap-8 mx-auto mt-16 grid grid-cols-4">
              {products && products.length > 0 ? (
                  products.map((item, index) => (
                      <ItemProduct key={index} product={item}/>
                  ))
              ) : (
                  <p>No products available</p> // Thông báo hoặc xử lý khi dữ liệu chưa có
              )}
          </div>
  
      </div>
  )
}
export default Home;