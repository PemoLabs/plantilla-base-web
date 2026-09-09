import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="col-md-4 col-lg-3 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={product.imagen_url || 'https://via.placeholder.com/300'}
          className="card-img-top"
          alt={product.nombre}
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.nombre}</h5>
          <p className="card-text small text-muted">{product.descripcion || ''}</p>
          <div className="mt-auto d-flex justify-content-between align-items-center">
            <span className="fw-bold text-primary">
              ${product.precio?.toLocaleString('es-CO') || '0'}
            </span>
            <button className="btn btn-outline-warning btn-sm">
              <i className="fas fa-cart-plus me-1"></i>Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;