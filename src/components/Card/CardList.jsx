/** @jsxImportSource: react */
import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import { useExtraClasses } from "../../utils/helpers"
import { Image } from "astro:assets";
import styles from "./CardList.module.css"

<ul>
{
  recentSpeaking.map((speak) => (
    <li class="cardListItem">
      <article>
        {speak.image && (
          <header>
            <Image
              slot="image"
              src={speak.image}
              alt={speak.name}
              width={1600}
              height={900}
              style="height: 100%; width: 100%; object-fit: cover;"
            />
          </header>
        )}
        <div class={"cardContentWrapper"}>
          <footer class={"cardFooterWrapper"}>
            <Link
              href={speak.link}
              aria-label={speak.ctaAria ? speak.ctaAria : null}
              linkClasses="cardFooterLink"
              icon={"arrow-right"}
              iconAfter
              size="small"
              iconSpanClasses="cardFooterLinkIcon"
            >
              {speak.cta}
            </Link>
          </footer>
        </div>
      </article>
    </li>
  ))
}
</ul>