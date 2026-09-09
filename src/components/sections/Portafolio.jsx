import React from 'react';

const Portafolio = () => {
  const proyectos = [
    {
      titulo: 'Museo Corpomemorias',
      descripcion: 'Sitio web institucional con archivo digital, galería y línea de tiempo.',
      imagen: 'https://via.placeholder.com/600x400/1A365D/FFFFFF?text=Corpomemorias'
    },
    {
      titulo: 'Restaurante El Fogón',
      descripcion: 'Landing page con menú digital, reservas y enlace a WhatsApp.',
      imagen: 'https://via.placeholder.com/600x400/2C7A7B/FFFFFF?text=Restaurante'
    },
    {
      titulo: 'Clínica Bienestar',
      descripcion: 'Sitio corporativo con especialidades, formulario de citas y ubicación.',
      imagen: 'https://via.placeholder.com/600x400/6B46C1/FFFFFF?text=Clinica'
    }
  ];

  return (
    <section id="portafolio" className="py-5">
      <div className="container">
        <h2 className="text-center display-5 fw-bold mb-2">Nuestro portafolio</h2>
        <p className="text-center text-muted mb-5">Algunos de los proyectos que hemos desarrollado</p>
        <div className="row g-4">
          {proyectos.map((proyecto, index) => (
            <div key={index} className="col-md-4">
              <div className="card h-100 shadow-sm">
                <img src={proyecto.imagen} className="card-img-top" alt={proyecto.titulo} />
                <div className="card-body">
                  <h5 className="card-title">{proyecto.titulo}</h5>
                  <p className="card-text small text-muted">{proyecto.descripcion}</p>
                  <a href="#" className="btn btn-sm btn-accent">Ver proyecto</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portafolio;