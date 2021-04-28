import React, { useEffect } from 'react';
import './Detail.css';

function Detail({ location, history }) {
  useEffect(() => {
    if (location.state === undefined) {
      history.push('/');
    }
  }, [location, history]);

  if (location.state) {
    return (
      <div className='detail__container'>
        <img src={location.state.poster} alt={location.state.title} />
        <div className='detail__data'>
          <span className='detail__title'>{location.state.title}</span>
          <p className='detail__year'>{location.state.year}</p>
          <ul className='detail__genres'>
            {location.state.genres.map((genre, index) => (
              <li key={index} className='genres__genre'>
                {genre}
              </li>
            ))}
          </ul>
          <p className='detail__summary'>{location.state.summary}</p>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Detail;
