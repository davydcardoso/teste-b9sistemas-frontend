import React from "react";
import { useForm } from 'react-hook-form';


import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'

import { ProductSchema } from "../screens/ProductRegistration";
import Input from "./Input";
import { useProducts } from "../hooks/useProducts";
import LoadingComponent from "./LoadingComponent";

type ProductProps = yup.InferType<typeof ProductSchema>

interface Props extends ProductProps {
  id: string
  onClose?: () => void
}

const ModalEditProduct: React.FC<Props> = ({ id, name, price, stock, onClose }) => {
  const { editProduct } = useProducts()
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(ProductSchema),
    defaultValues: { name, price, stock }
  })

  const handleEditProduct = (data: ProductProps) => {
    editProduct(id, data).then(() => {
      if (onClose) {
        onClose()

        window.location.reload()
      }
    })
  }

  const renderForm = () => {
    return (
      <div className="w-[100%] h-[100%] flex flex-col items-center relative  " >
        <Input
          name='name'
          control={control}
          label='Informe nome do Produto'
          error={errors.name?.message}
        />

        <div className="w-[100%] grid grid-cols-2 mt-3 gap-5 " >
          <Input
            name='price'
            control={control}
            label='Informe Preço do Produto'
            type="number"
            error={errors.price?.message}
          />

          <Input
            name='stock'
            control={control}
            label='Quantidade de Estoque'
            type="number"
            error={errors.stock?.message}
          />
        </div>


        <div className="w-[100%] flex flex-row-reverse absolute bottom-14 left-0 gap-4  " >
          <button onClick={handleSubmit(handleEditProduct)} className="w-[150px] h-[45px] bg-blue-700 rounded-lg text-white hover:bg-blue-500 ease-in-out duration-100 " >
            Salvar
          </button>

          <button onClick={onClose} className="w-[150px] h-[45px] bg-red-700 flex items-center justify-center rounded-lg text-white hover:bg-red-500 ease-in-out duration-100 " >
            Cancelar
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-screen bg-black/25 flex items-center justify-center absolute top-0   " >
      <div className="w-[500px] h-[400px] bg-white rounded-lg shadow-xl p-3 " >
        <h1>Listagem de Produtos</h1>
        <div className='w-[100%] h-[0.5px] bg-gray-300 mt-2 mb-7  ' />

        {renderForm()}
      </div>
    </div>
  )
}

export default ModalEditProduct