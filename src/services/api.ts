import type { ProductsResponse } from '../types/product';


const API_URL = '/produtos.json';

export const fetchProducts = async (): Promise<ProductsResponse | null> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Erro na requisição da rede');
    }
    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar os produtos:', error);
    return null;
  }
};