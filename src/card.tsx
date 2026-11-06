import { useState } from 'react'
import styles from './Card.module.css'

type Props = {
  name: string
  Position: string
  Spiele: number
  Tore: number
}

export default function Card({ name, Position, Spiele, Tore }: Props) {
  const [isInSquad, setIsInSquad] = useState(false)

  return (
    <div>
      <article className={`${styles.card} ${isInSquad ? styles.selected : ''}`}>
        <h2>{name}</h2>
        <p>{Position}</p>
        <p>Spiele: {Spiele}</p>
        <p>Tore: {Tore}</p>
        <button onClick={() => setIsInSquad(!isInSquad)}> Kader</button>
      </article>
    </div>
  )
}