import React, { ReactNode } from "react"
import { FaBoxesStacked } from "react-icons/fa6"

type Props = {
  children: ReactNode
}

const PageContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className='w-full h-screen bg-gray-100 flex flex-row items-center   ' >
      <div className='w-[20%] h-screen bg-[#5443C3] flex flex-col items-center p-4 relative ' >
        <h1 className='text-white text-3xl uppercase font-extrabold hover:cursor-pointer ' >
          B9 Sistemas
        </h1>

        <h1 className='text-white font-semibold ' >
          Teste FrontEnd
        </h1>

        <div className='w-[90%] mt-10 flex flex-col text-white ' >

          <details>
            <summary className=" hover:cursor-pointer text-2xl font-bold focus:outline-none flex items-center justify-start gap-2 hover:text-primary-color ease-in-out duration-100 " >
              <FaBoxesStacked />
              Produtos
            </summary>

            <div className="w-[250px] flex flex-col items-start gap-2 pl-4 pt-4 text-xl font-semibold " >
              <a target="_self" href="/product/create" className="w-[100%] flex items-start text-[14px] hover:text-primary-color ease-in-out duration-100 focus:outline-none " >
                Listagem de Produtos
              </a>

              <a target="_self" href="/product/create" className="w-[100%] flex items-start text-[14px] hover:text-primary-color ease-in-out duration-100  focus:outline-none " >
                Cadastrar Produto
              </a>
            </div>
          </details>
        </div>
      </div>

      <div className="w-[80%] h-screen p-5 overflow-auto relative " >
        {children}
      </div>
    </div>
  )
}

export default PageContainer