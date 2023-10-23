
import React from 'react';
import styles from './ShipCard.module.css';
import { Ship } from '../data/types';

interface ShipCardProps {
  ship: Ship;
}

const ShipCard: React.FC<ShipCardProps> = ({ ship }) => {
  return (
    <div className={styles.card}>
      <div className={styles.poster}>
        <img src={ship.icons.large} alt={ship.title} />
      </div>
      <div className={styles.details}>
        <h1>{ship.title}</h1>
        <h2>{`Level ${ship.level}`}</h2>
        <div className={styles.tags}>
          <span className={styles.tag}>{ship.type.name}</span>
          <span className={styles.tag}>{ship.nation.name}</span>
        </div>
        <p className={styles.desc}>{ship.description}</p>
      </div>
    </div>
  );
};

export default ShipCard;
