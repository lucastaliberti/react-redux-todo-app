import React from 'react'
import FontAwesome from 'react-fontawesome'

const InfoBox = ({ color, icon, text, number, description }) => (
  <div className={`info-box bg-${color}`}>
    <span className="info-box-icon">
      <FontAwesome name={`${icon}`} tag="i" />
    </span>
    <div className="info-box-content">
      {text && <span className="info-box-text">{text}</span>}
      {number && <span className="info-box-number">{number}</span>}
      {description && (
        <span className="progress-description">{description}</span>
      )}
    </div>
  </div>
)

export default InfoBox
