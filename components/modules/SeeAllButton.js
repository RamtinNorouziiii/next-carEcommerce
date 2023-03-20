import React from 'react'
import Link from 'next/link'
import styles from "./SeeAllButton.module.css"
function SeeAllButton() {
  return (
    <div className={styles.container}>
    <Link href="/cars">See all cars</Link>
  </div>
  )
}

export default SeeAllButton