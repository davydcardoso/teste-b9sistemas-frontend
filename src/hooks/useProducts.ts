import { useState } from "react";
import { toast } from "react-toastify";

import * as yup from "yup";

import { api } from "../lib/axios";
import { ProductSchema } from "../screens/ProductRegistration";
import { GetAllProductsResponseDTO, ProductsDTO } from "../dtos/ProductsDTO";

type ProductProps = yup.InferType<typeof ProductSchema>;

export const useProducts = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<ProductsDTO[]>([]);

  const getAllProducts = async () => {
    setLoading(true);

    try {
      const result = await api.get<GetAllProductsResponseDTO>("/products");

      setProducts(result.data.products);
      console.log(result);
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const createNewProduct = async (data: ProductProps) => {
    setLoading(true);

    try {
      await api.post("/products", { ...data });

      toast.success("Produto cadastrado com sucesso.");
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const editProduct = async (id: string, data: ProductProps) => {
    setLoading(true);

    try {
      await api.put("/products", { ...data }, { headers: { product_id: id } });

      const products = await api.get<GetAllProductsResponseDTO>("/products");

      setProducts(products.data.products);

      toast.success("Produto editado com sucesso.");
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (id: string) => {
    setLoading(true);

    try {
      const result = await api.delete<{ message: string }>("/products", {
        headers: { product_id: id },
      });

      const products = await api.get<GetAllProductsResponseDTO>("/products");

      setProducts(products.data.products);

      toast.success(result.data.message);
      console.log(result);
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    products,
    editProduct,
    deleteProduct,
    getAllProducts,
    createNewProduct,
  };
};
