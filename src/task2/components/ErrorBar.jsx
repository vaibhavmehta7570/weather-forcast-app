import React from 'react'

const ErrorBar = ({ message }) => {
  return (
    <section className="error">
      <figure className="error__figure">¯\_(ツ)_/¯</figure>
      <label className="error__message">{message}</label>
    </section>
  )
}

export default ErrorBar
