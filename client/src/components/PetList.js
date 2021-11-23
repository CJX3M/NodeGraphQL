import React from "react";

export default function PetList({ pets }) {
  return (
    <div className="container">
        {pets && pets.length > 0 &&
          pets.map(
            (p, index) => (
              <div className="row justify-content-center">
                <div className="col-xs-12">
                  <div class="card" key={index}>
                    <img src="..." class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">{p.name}</h5>
                        <p class="card-text">It's a {p.type} of the breed {p.breed}</p>
                        <a href="#" class="btn btn-primary">Adopt!</a>
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