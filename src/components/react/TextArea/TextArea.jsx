import PropTypes from "prop-types"
import classnames from "classnames"
import { useExtraClasses } from "../../../utils/helpers"
import { Icon } from "../Icon/Icon"
import styles from "./TextArea.module.css"
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons"

export const TextArea = ({
  extraClasses,
  label,
  resizeVerticalOnly,
  error,
  ...props
}) => {
  const css = useExtraClasses(styles, extraClasses)

  const labelClasses = classnames(css.textareaLabel, css.stackField)

  const textareaClasses = classnames(css.textarea, {
    [css.resizeVerticalOnly]: resizeVerticalOnly,
  })

  return (
    <div className={css.root}>
      {label && (
        <label htmlFor={props.id || props.name} className={labelClasses}>
          <span className={css.labelText}>{label}</span>
          <textarea
            id={props.id || props.name}
            className={textareaClasses}
            aria-invalid={error ? "true" : null}
            {...props}
          />
          {error ? (
            <div className={css.errorText}>
              <Icon
                icon={faExclamationCircle}
                extraClasses={{ icon: css.errorIcon }}
              />
              {error}
            </div>
          ) : null}
        </label>
      )}
    </div>
  )
}

export default TextArea

TextArea.defaultProps = {
  resizeVerticalOnly: false,
}

TextArea.propTypes = {
  resizeVerticalOnly: PropTypes.bool,
  error: PropTypes.string,
}
