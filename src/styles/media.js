/* eslint-disable */
import { css } from 'styled-components';

export const sizes = {
  // feel free to edit this
  giant: 1440,
  bigDesktop: 1200,
  desktop: 1000,
  tablet: 768,
  phone: 376,
}

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {})

export default media
