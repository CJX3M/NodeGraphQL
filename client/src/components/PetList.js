import React from "react";

export default function PetList({ pets }) {
  return (
    <div className="container">
        {pets && pets.length > 0 &&
          pets.map(
            (p, index) => (
              <div className="row justify-content-center" key={index}>
                <div className="col-xs-12">
                  <div className="card">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{p.name}</h5>
                      <p className="card-text">It's a {p.type} of the breed {p.breed}</p>
                      <a href="#" className="btn btn-primary">Adopt!</a>
                    </div>
                  </div>
                </div>
              </div>
            )
          )
        }
    </div>
  )
}