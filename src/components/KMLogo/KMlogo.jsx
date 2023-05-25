import React from "react"
import KMLogo from "../../images/svgs/KMLogo.svg"
import KMtxt from "../../images/svgs/KMtxt.svg"
import redOrangeSq from "../../images/svgs/redOrangeSq.svg"
import redPurpleSq from "../../images/svgs/redPurpleSq.svg"
import css from "./KMlogo.module.css"

export const KMlogo = () => {
  return (
    <>
      <img src={KMtxt} alt="" className={css.KMtxt} />
      <div className={css.logoTmpGroup}>
        <img
          src={KMLogo}
          alt="KathleenMcMahon.dev"
          className={css.logoImg}
          role="img"
        />
      </div>
      <a className={css.logoImgLink} href="#">
        <div className={css.logoSqGroup}>
          <img src={redOrangeSq} alt="" className={css.redOrangeSq} />
          <img src={redPurpleSq} alt="" className={css.redPurpleSq} />
        </div>
      </a>
    </>
  )
}

export default KMlogo