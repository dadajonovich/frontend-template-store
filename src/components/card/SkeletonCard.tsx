import React from 'react';
import ContentLoader from 'react-content-loader';

const SkeletonCard = (props) => (
  <ContentLoader
    speed={2}
    width={384}
    height={484}
    viewBox='0 0 384 484'
    // backgroundColor='#a6adbb'
    backgroundColor='#ecebeb'
    foregroundColor='#a6adbb'
    {...props}
  >
    <rect x='0' y='0' rx='15' ry='15' width='384' height='484' />
  </ContentLoader>
);

export default SkeletonCard;
