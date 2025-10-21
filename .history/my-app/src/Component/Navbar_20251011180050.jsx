 <div className="p-6">
                                          <h1 className="text-3xl font-bold mb-4">{products.title}</h1>
                                          <img className="w-[320px] h-[360px]" src={products.imagePath} alt={products.title} />
                                          <p className="italic ml-[350px] mt-[-300px]">Message: {products.message}</p>
                                          <p className="italic  ml-[350px]  mt-[px]">Price: Rs {products.price}</p>
                                          <p className=" ml-[350px] mt-[px]">Stock:{products.stock}</p>
                                          <p className=" ml-[350px] mt-[px]">Discount:{products.dis}</p>
                                          <p className=" ml-[350px] mt-[-120px]">Name:{products.title}</p>
                                          <p className="ml-[350px] mt-[100px]">Customer Reveiw:{[...Array(5)].map((_,i) => (
                                    
                                            <IoStarSharp key={i} className="  text-yellow-500 ml-2 inline-block" />
                                          ))}</p>
                                           <div className="mt-[250px] ml-[-30px]">
                                             <Footer />
                                           </div>