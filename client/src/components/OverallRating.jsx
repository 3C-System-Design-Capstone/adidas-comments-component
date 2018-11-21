import React from 'react';
import styles from '../css/OverallRating.css';
import Star from './Star';

const OverallRating = props => (
  <div className={styles.overallRating}>
    <div className={styles.ratingNumber}>{props.rating}</div>
    <div className={styles.container2}>
      <div className={styles.ratingStars}>
        {props.ratingToStarTranslation(props.rating).map((filling, i) => (
          <Star filling={filling} key={i} id={Math.random()} />
        ))}
      </div>
      <span className={styles.reviewNumber}>
        <strong className={styles.bold}>{props.totalNumReviews}</strong> Reviews
      </span>
    </div>
  </div>
);

export default OverallRating;
