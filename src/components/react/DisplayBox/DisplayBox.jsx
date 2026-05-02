import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import css from "./DisplayBox.module.css"

export const DisplayBox = ({ children, display = "block" }) => {
  const displayBoxCSS = clsx(css.displayBox, css[display])
  return <div className={displayBoxCSS}>{children}</div>
}

export default DisplayBox

DisplayBox.propTypes = {
  children: PropTypes.object,
  display: PropTypes.string,
}
