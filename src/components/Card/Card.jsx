/** @jsxImportSource: react */
import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import { useExtraClasses } from "../../utils/helpers"
// import { Image } from "astro:assets";
import styles from "./Card.module.css"

export const ReactCard = ({
  cardContentWrapperClasses,
  cardFooterWrapperClasses,
  children,
  display,
  extraClasses,
  horizontal,
  image,
  imageAlt,
}) => {
  const css = useExtraClasses(styles, extraClasses)
  const cardCSSContentWrapper = classnames(css.cardContentWrapper,  cardContentWrapperClasses)
  const cardCSSFooterWrapper = classnames(css.cardFooterWrapper,  cardFooterWrapperClasses)
  const cardCSS = classnames(css.root, css[display], {
    [css.horizontal]: horizontal,
  })
  return (
    <article className={cardCSS}>
      {image && (
        <header className={css.cardHeader}>
          <Image src={image} alt={imageAlt} />
        </header>
      )}
      <div className={cardCSSContentWrapper}>
          <footer className={cardCSSFooterWrapper}>{children}</footer>
      </div>
    </article>
  )
}

export default ReactCard

ReactCard.defaultProps = {
  display: "flex",
  imageAlt: "",
}

ReactCard.propTypes = {
  /**
   * Card contents
   */
  children: PropTypes.node,

  /**
   * The CSS display property of the Card wrapper
   */
  display: PropTypes.oneOf(["block", "flex"]),

  /**
   * A map of CSS classes used to override specific CSS in the component
   */
  extraClasses: PropTypes.objectOf(PropTypes.string),

  /**
   * Content to place in the footer region of the Card
   */
  footerContent: PropTypes.node,

  /**
   * Display the Card with image stacked horizontally
   */
  horizontal: PropTypes.bool,

  /**
   * The Card image
   */
  image: PropTypes.string,

  /**
   * The Card image alt attribute
   */
  imageAlt: PropTypes.string,
}
