

import classnames from "classnames"
import { useExtraClasses } from "../../../utils/useExtraClasses"
// import { Icon } from "../Icon/Icon"
import styles from "./Link.module.css"

export const LinkSizes = {
  small: "small",
  large: "large",
}

export const LinkVariants = {
  a: "a",
  link: "link",
}

export const Link = ({
  ariaCurrent,
  ariaLabel,
  children,
  extraClasses,
  icon,
  iconAfter,
  linkRef,
  size,
  href,
}) => {
  const css = useExtraClasses(styles, extraClasses)
  const linkClasses = classnames(css.root, css[size], { [css.hasIcon]: icon })
  const iconClasses = classnames(css.icon, { [css.iconAfter]: iconAfter })
  const linkIcon = icon && (
    <Icon
      icon={icon}
      extraClasses={{ icon: iconClasses, iconSpan: css.iconSpan }}
      size={size !== LinkSizes.small ? "1x" : "sm"}
    />
  )
  const content = (
    <>
      {!iconAfter && linkIcon}
      {children}
      {iconAfter && linkIcon}
    </>
  )

  let ariaCurrentValue
  if (ariaCurrent) {
    ariaCurrentValue = ariaCurrent
  }

    return (
      <a
        aria-current={ariaCurrentValue}
        aria-label={ariaLabel}
        className={linkClasses}
        href={href}
        ref={linkRef}
      >
        {content}
      </a>
    )
}

export default Link