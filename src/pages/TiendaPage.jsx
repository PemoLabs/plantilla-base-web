import React from 'react';
import { useProducts } from '../hooks/useProducts';
import ProductCard from '../components/tienda/ProductCard';

const TiendaPage = () => {
  const { products, loading, error } = useProducts();

  if (loading) return (
    <div className="text-center py-5">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Cargando...</span>
      </div>
    </div>
  );

  if (error) return (
    <div className="alert alert-danger text-center py-5">
      Error al cargar productos: {error}
    </div>
  );

  return (
    <section className="py-5" style={{ marginTop: '76px' }}>
      <div className="container">
        <h2 className="text-center display-5 fw-bold mb-5">Nuestros Productos</h2>
        <div className="row g-4">
          {products.length === 0 ? (
            <div className="col-12 text-center">
              <p>No hay productos disponibles.</p>
            </div>
          ) : (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default TiendaPage;