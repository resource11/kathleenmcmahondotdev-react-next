/** @jsxImportSource: solid-js */
import { Component } from "solid-js";
import { render } from "solid-js/web";
import { useField } from "solid-js-form";
// import PropTypes from "prop-types"
import classnames from "classnames"
import { useExtraClasses } from "../../../utils/helpers.js"
import { Icon } from "../Icon/Icon.jsx"
import styles from "./Input.module.css"
import { faArrowUp, faCircleExclamation } from "@fortawesome/free-solid-svg-icons"

export const InputSizes = {
  small: "small",
  large: "large",
}

// const Input: Component<{name:string, label:string}> = (props) => {
//     const {field, form} = useField(props.name);
//     const formHandler = form.formHandler;

//     return (
//         <>
//         <label for={props.name}>
//             {props.label}
//             {field.required() ? " *" : ""}
//         </label>
//         <input
//             name={props.name}
//             value={field.value()}
//             //@ts-ignore
//             use:formHandler //still need to properly type the handler
//         />
//         <span>{field.error()}</span>
//         </>
//     );
// };

export const Input = ({ extraClasses, isHidden, label, ...props }) => {
  const css = useExtraClasses(styles, extraClasses)

  const [field, form] = useField(props.name)
  const formHandler = form.formHandler

  const rootClasses = classnames(css.root, {
    [css.hidden]: isHidden,
  })

  const labelClasses = classnames(css.inputLabel, css.stackField)

  return (
    <div className={rootClasses}>
      {label && (
        <label for={props.id || props.name} className={labelClasses}>
          <span className={css.labelText}>{props.label}</span>{field.required() ? " *" : ""}
          <input
            id={props.id || props.name}
            className={css.input}
            name={props.name}
            value={field.value()}
            //@ts-ignore
            use:formHandler //still need to properly type the handler
            {...props}
          />
          {field.error() ? (
            <div className={css.errorText}>
              <Icon
                icon={faArrowUp}
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

export default Input

Input.defaultProps = {
  isHidden: null,
}

// Input.propTypes = {
//   /**
//    * Determines if this input is hidden from screen readers. Pair this with inputs of type hidden
//    */
//   isHidden: PropTypes.bool,
// }
