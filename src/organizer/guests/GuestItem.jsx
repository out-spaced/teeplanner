import React from 'react';

function GuestItem({ val }) {
  const phoneId = `phone${val}`;
  const nameId = `name${val}`;
  return (
    <div className="row-default">
      <div className="form-floating mb-3">
        <input
          id={nameId}
          className="form-control"
          type="text"
          placeholder="Nickname"
          maxLength="10"
          size="10"
        />
        <label htmlFor={nameId}>Nickname</label>
      </div>
      <div className="form-floating mb-3">
        <input
          id={phoneId}
          className="form-control"
          type="tel"
          placeholder="123456789"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          maxLength="9"
          size="9"
        />
        <label htmlFor={phoneId}>Phone Number</label>
      </div>
    </div>
  );
}

export default GuestItem;
