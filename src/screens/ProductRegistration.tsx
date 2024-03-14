import React from "react";
import { useForm } from 'react-hook-form';


import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import PageContainer from "../components/PageContainer";
import Input from "../components/Input";

export const ProductSchema = yup.object({
  name: yup.string().min(4, "Favor informe um nome de produto valido.").required("Este campo é obrigatório."),
  price: yup.number().min(1, "Favor informe um preço de produto valido").required("Este campo é obrigatório."),
  stock: yup.number().min(1, "Favor informe um estoque de produto valido").required("Este campo é obrigatório."),
})

type CreateProductProps = yup.InferType<typeof ProductSchema>


const ProductRegistration: React.FC = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(ProductSchema)
  })

  const handleCreateProduct = (data: CreateProductProps) => {
    console.log(data)
  }

  return (
    <PageContainer>
      <h1>Cadastro de Produtos</h1>
      <div className='w-[100%] h-[0.5px] bg-gray-300 mt-2 mb-5  ' />

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


      <div className="w-[100%] flex flex-row-reverse absolute bottom-5 left-0 pr-10 gap-4  " >
        <button onClick={handleSubmit(handleCreateProduct)} className="w-[150px] h-[45px] bg-blue-700 rounded-lg text-white hover:bg-blue-500 ease-in-out duration-100 " >
          Salvar
        </button>

        <a target="_self" href="/" className="w-[150px] h-[45px] bg-red-700 flex items-center justify-center rounded-lg text-white hover:bg-red-500 ease-in-out duration-100 " >
          Cancelar
        </a>
      </div>
    </PageContainer>
  )
}

export default ProductRegistration