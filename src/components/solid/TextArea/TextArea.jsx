/** @jsxImportSource: solid-js */
// import PropTypes from "prop-types"
import { useField } from "solid-js-form";
import classnames from "classnames"
import { useExtraClasses } from "../../../utils/helpers"
import { Icon } from "../Icon/Icon.jsx"
import styles from "./TextArea.module.css"
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons"

export const TextArea = ({
  extraClasses,
  label,
  resizeVerticalOnly,
  ...props
}) => {
  const css = useExtraClasses(styles, extraClasses)

  const [field, form] = useField(props.name)
  const formHandler = form.formHandler

  const labelClasses = classnames(css.textareaLabel, css.stackField)

  const textareaClasses = classnames(css.textarea, {
    [css.resizeVerticalOnly]: resizeVerticalOnly,
  })

  return (
    <div className={css.root}>
      {label && (
        <label for={props.id || props.name} className={labelClasses}>
          <span className={css.labelText}>{props.label}</span>{field.required() ? " *" : ""}
          <textarea
            id={props.id || props.name}
            className={textareaClasses}
            name={props.name}
            value={field.value()}
            //@ts-ignore
            use:formHandler //still need to properly type the handler
            {...props}
          />
          {field.error() ? (
            <div className={css.errorText}>
              <Icon
                icon={faExclamationCircle}
                extraClasses={{ icon: css.errorIcon }}
              />
              {field.error()}
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

// TextArea.propTypes = {
//   /**
//    * Determines if this textarea is can only be resized vertically
//    */
//   resizeVerticalOnly: PropTypes.bool,
// }
