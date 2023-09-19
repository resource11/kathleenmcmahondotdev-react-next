/** @jsxImportSource: solid-js */
// import PropTypes from "prop-types"
import classnames from "classnames"
import { useExtraClasses } from "../../utils/helpers"
import { Image } from "astro:assets";
import styles from "./Card.module.css"

export const SolidCard = (props) => {
  const css = useExtraClasses(styles, props.extraClasses)
  const cardCSSContentWrapper = classnames(css.cardContentWrapper,  props.cardContentWrapperClasses)
  const cardCSSFooterWrapper = classnames(css.cardFooterWrapper,  props.cardFooterWrapperClasses)
  const cardCSS = classnames(css.cardRoot, css[props.display], {
    [css.horizontal]: props.horizontal,
  })
  return (
    <article class={cardCSS}>
      {props.image && (
        <header class={css.cardHeader}>
          <Image src={props.image} alt={props.imageAlt} />
        </header>
      )}
      <div class={cardCSSContentWrapper}>
          <footer class={cardCSSFooterWrapper}>{props.children}</footer>
      </div>
    </article>
  )
}

export default SolidCard

// Card.defaultProps = {
//   display: "flex",
//   imageAlt: "",
// }


// Card.propTypes = {
//   /**
//    * Card contents
//    */
//   children: PropTypes.node,

//   /**
//    * The CSS display property of the Card wrapper
//    */
//   display: PropTypes.oneOf(["block", "flex"]),

//   /**
//    * A map of CSS classes used to override specific CSS in the component
//    */
//   extraClasses: PropTypes.objectOf(PropTypes.string),

//   /**
//    * Content to place in the footer region of the Card
//    */
//   footerContent: PropTypes.node,

//   /**
//    * Display the Card with image stacked horizontally
//    */
//   horizontal: PropTypes.bool,

//   /**
//    * The Card image
//    */
//   image: PropTypes.string,

//   /**
//    * The Card image alt attribute
//    */
//   imageAlt: PropTypes.string,
// }
