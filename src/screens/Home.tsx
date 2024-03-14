import React, { useEffect, useState } from 'react';

import { useProducts } from '../hooks/useProducts';

import PageContainer from '../components/PageContainer';
import LoadingComponent from '../components/LoadingComponent';
import ModalEditProduct from '../components/ModalEditProduct';
import { ProductsDTO } from '../dtos/ProductsDTO';


const Home: React.FC = () => {
  const { loading, products, getAllProducts, deleteProduct } = useProducts()


  const [selectedProduct, setSelectedProduct] = useState<ProductsDTO>({} as ProductsDTO)
  const [visibleModalEditProduct, setVisibleModalEditProduct] = useState<boolean>(false)


  useEffect(() => {
    async function main() {
      getAllProducts()
    }

    main()
  }, [])

  const handleDeleteProduct = (id: string) => {
    deleteProduct(id)
  }

  const renderProducts = () => {
    if (loading) {
      return <LoadingComponent />
    }

    return (
      <div className='w-[100%] grid grid-cols-5 gap-3  ' >
        {products.map(item => {
          return (
            <div key={item.id} className='w-[100%] h-[300px] bg-[#e4e6eb] rounded-lg flex flex-col items-center justify-center p-2 relative shadow-lg ' >
              <img
                alt='product image'
                src='/images/product-image.png'
                className='w-[50%] '
              />

              <div className='w-[100%] flex items-center justify-between text-black font-bold mb-2 ' >
                <h1>{item.name}</h1>
              </div>

              <div className='w-[100%] text-[#5443C3] font-semibold   '  >
                <h1>Preço R$ {item.price.toLocaleString("pt-Br", { minimumFractionDigits: 2 })}</h1>
                <h1>Quantidade Estoque: {item.stock}</h1>
              </div>

              <div className='w-[100%] grid grid-cols-2 gap-2 p-2  ' >
                <button
                  onClick={() => {
                    setSelectedProduct(item)
                    setVisibleModalEditProduct(true)
                  }}
                  className="w-[100%] h-[38px] bg-blue-700 rounded-lg text-white hover:bg-blue-500 ease-in-out duration-100 " >
                  Editar
                </button>

                <button
                  onClick={() => handleDeleteProduct(item.id)}
                  className="w-[100%] h-[38px] bg-red-700 flex items-center justify-center rounded-lg text-white hover:bg-red-500 ease-in-out duration-100 "
                >
                  Excluir
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <>
      <PageContainer>
        <h1>Listagem de Produtos</h1>
        <div className='w-[100%] h-[0.5px] bg-gray-300 mt-2 mb-5  ' />

        {renderProducts()}


      </PageContainer>
      {
        visibleModalEditProduct && (
          <ModalEditProduct
            {...selectedProduct}
            onClose={() => setVisibleModalEditProduct(false)}
          />
        )
      }
    </>
  )
}

export default Home;
