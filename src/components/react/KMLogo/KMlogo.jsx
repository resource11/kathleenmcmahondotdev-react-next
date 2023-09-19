import React from "react"
import KMLogo from "../../assets/images/svgs/KMLogo.svg"
import KMtxt from "../../assets/images/svgs/KMtxt.svg"
import redOrangeSq from "../../assetsimages/svgs/redOrangeSq.svg"
import redPurpleSq from "../../assetsimages/svgs/redPurpleSq.svg"
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