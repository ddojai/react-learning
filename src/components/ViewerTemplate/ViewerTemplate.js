import React from 'react';
import styles from './ViewerTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ViewTemplate = ({viewer, spaceNavigator}) => (
  <div className={cx('viewer-template')}>
    <header>
      Astonomy Picture of the Day
    </header>
    <div className={cx('viewer-wrapper')}>
      {viewer}
      <div className={cx('space-navigator-wrapper')}>
        {spaceNavigator}
      </div>
    </div>
  </div>
);

export default ViewTemplate;