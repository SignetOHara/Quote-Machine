import styles from './Fader.module.scss';

import React from 'react';

export const Fader = ({ children, isFading }) => {
  return (
    <div className={isFading ? styles.fadeOut : styles.fadeIn}>{children}</div>
  );
};
