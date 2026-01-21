"use client";

import "./ContactModal.css";

export default function ContactModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button className="modal-close" onClick={onClose}><img src="/close.png"/></button>

        <h2 className="modal-title">Contact</h2>

        <p className="modal-name">Sagithya Varish Uppiliraj</p>

        <p className="modal-email"><u>sagithyavarish@outlook.com</u></p>

        <p className="modal-phone">+91 7871515114</p>

        <p className="modal-desc">
          Role-agnostic, impact-focused – exploring opportunities, where design meets code.
        </p>
      </div>
    </div>
  );
}