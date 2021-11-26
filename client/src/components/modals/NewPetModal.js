import React, { useReducer } from 'react';
import Modal from 'react-bootstrap/Modal'

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
}

const NewPetModal = ({ onSubmit, onCancel, show }) => {

  const [formData, setFormData] = useReducer(formReducer, {type: "DOG"});

  const handleChange = event => {
    setFormData({
      name: [event.target.name],
      value: event.target.value
    });
  }
  
  return (
    <Modal show={show}>
      <Modal.Header>
        <h5 className="modal-title">New Pet</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onCancel}>
          <span aria-hidden="true">X</span>
        </button>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="form-group">
            <label htmlFor="typeSelect">Type:</label>
            <select name="type" className="form-control" id="typeOpt" onChange={handleChange}>
              <option>DOG</option>
              <option>CAT</option>
            </select>
            <label htmlFor="nameTxt">Name:</label>
            <input type="text" className="form-control" id="nameTxt" name="name" onChange={handleChange}></input>
            <label htmlFor="breedTxt">Breed:</label>
            <input type="text" className="form-control" id="breedTxt" name="breed" onChange={handleChange}></input>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button type="button" className="btn btn-primary" onClick={() => onSubmit(formData)}>Save changes</button>
        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={onCancel}>Close</button>
      </Modal.Footer>
    </Modal>
  )
};

export default NewPetModal;