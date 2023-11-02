import React, { useState } from 'react'
const Textform = (props) => {
  const [formData, setFormData] = useState({ name: '', username: '' });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(formData);
    // setFormData({ name: '', username: '' });
  };
  return (
    <div style={{display:'-ms-inline-grid',justifyContent:'center'}}>
      <form className="row gy-2 gx-3 align-items-center" onSubmit={handleSubmit}>
        <div className="col-auto">
          <label className="visually-hidden" htmlFor="autoSizingInput">Name</label>
          <input type="text" className="form-control" id="autoSizingInput" placeholder="firstname" name="name"
            value={formData.name}
            onChange={handleInputChange} />
        </div>
        <div className="col-auto">
          <label className="visually-hidden" htmlFor="autoSizingInputGroup">Username</label>
          <div className="input-group">
            <div className="input-group-text">@</div>
            <input type="text" className="form-control" id="autoSizingInputGroup" placeholder="Username" name="username"
              value={formData.username}
              onChange={handleInputChange} />
          </div>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  )
}
export default Textform