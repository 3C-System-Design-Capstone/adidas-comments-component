import React from 'react';
import StarListEntry from './StarListEntry';
import styles from '../css/Rating.css';

const Rating = props => {

  const filterStatus = (
    <div className={styles.filterStatus}>
      Showing reviews:{' '}
      <ul className={styles.filterList}>
        {props.filters.map((star, i) => (
          <li className={styles.filterListItem} key={i}>{star} STARS</li>
        ))}
      </ul>
      <a className={styles.removeFilter} onClick={props.handleRemoveFilterClick}>Remove all filters</a>
    </div>
  );

  return (
    <div className={styles.ratingM}>
      <h5 id={styles.breakdown}>Rating Breakdown</h5>
      {props.filters.length > 0 ? filterStatus : ''}
      <ul className={styles.listOfStars}>
        <StarListEntry
          id={5}
          handleRateClick={props.handleRateClick}
          totalNumReviews={props.totalNumReviews}
          count={props.numReviewsIndexedByRating[4]}
        />
        <StarListEntry
          id={4}
          handleRateClick={props.handleRateClick}
          totalNumReviews={props.totalNumReviews}
          count={props.numReviewsIndexedByRating[3]}
        />
        <StarListEntry
          id={3}
          handleRateClick={props.handleRateClick}
          totalNumReviews={props.totalNumReviews}
          count={props.numReviewsIndexedByRating[2]}
        />
        <StarListEntry
          id={2}
          handleRateClick={props.handleRateClick}
          totalNumReviews={props.totalNumReviews}
          count={props.numReviewsIndexedByRating[1]}
        />
        <StarListEntry
          id={1}
          handleRateClick={props.handleRateClick}
          totalNumReviews={props.totalNumReviews}
          count={props.numReviewsIndexedByRating[0]}
        />
      </ul>
    </div>
  );
}

export default Rating;
