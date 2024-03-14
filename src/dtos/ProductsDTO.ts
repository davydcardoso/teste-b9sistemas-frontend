export interface ProductsDTO {
  id: string;
  name: string;
  price: number;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface GetAllProductsResponseDTO {
  products: ProductsDTO[];
}
