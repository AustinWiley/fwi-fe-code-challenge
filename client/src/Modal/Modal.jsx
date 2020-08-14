import React, { useEffect } from 'react';

const Modal = () => {
  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Add a Player</p>
          <button className="delete" aria-label="close"></button>
        </header>
        <section className="modal-card-body">
          {/* {<!-- Content ... -->} */}
          <div className="block">
            <form>
              <div className="field">
                <label className="label">Name</label>
                <input type="text" className="input" placeholder="Enter Name" />
              </div>

              <div className="field">
                <label className="label">Winnings</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Enter winnings"
                />
              </div>

              <div className="field">
                <label className="label">Country</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Enter county"
                />
              </div>

              <div className="field">
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Enter Image"
                />
              </div>
            </form>
          </div>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success">Save Player</button>
          <button className="button">Cancel</button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
