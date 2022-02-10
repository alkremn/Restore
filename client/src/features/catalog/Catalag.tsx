import React, { useEffect, useState } from 'react';
import { Product } from '../../app/models/product';
import ProductList from './ProductList';
import agent from './../../app/api/agent';
import LoadingComponent from '../../app/layout/LoadingComponent';

export default function Catalag() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    agent.Catalog.list()
      .then(products => setProducts(products))
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <LoadingComponent message='Loading Products' />;

  return (
    <>
      <ProductList products={products} />
    </>
  );
}
