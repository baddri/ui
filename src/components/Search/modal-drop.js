/*
 * @license
 * Copyright OAH Technology. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { css, keyframes } from 'styled-components';

const scaleUpDown = keyframes`
  0% {
    opacity: 1;
    transform: scale3d(1, 0, 1);
  }
  50% {
    transform: scale3d(1, 1, 1);
    transform-origin: 50% 0;
    transition-timing-function: ease-out;
  }
  50.1% {
    transform-origin: 50% 100%;
    transition-timing-function: ease-out;
  }
  100% {
    opacity: 1;
    transform: scale3d(1, 0, 1);
    transform-origin: 50% 100%;
    transition-timing-function: ease-out;
  }   
`;

const modalDrop = css`
  .search {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 1050;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: 0 0;
    pointer-events: none;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: opacity 0.4s;
    }

    button {
      font-size: 2.5rem;
      position: absolute;
      top: 3rem;
      ${({ theme }) => (theme.dir === 'rtl' ? 'left: 3rem;' : 'right: 3rem;')}
      display: block;
      opacity: 0;
      transition: opacity 0.4s;
    }

    .form {
      position: relative;
      margin: 5rem 0 2rem;
    }

    input {
      font-size: 6vw;
      width: 60%;
      padding: 0.25rem;
      text-align: center;
      opacity: 0;
      transition: opacity 0.4s;
    }

    span {
      position: relative;
      z-index: 9;
      display: block;
      width: 60%;
      padding: 0.85rem 0;
      opacity: 0;
      transform: translate3d(0, -50px, 0);
      transition: opacity 0.4s, transform 0.4s;
    }

    .form-content {
      position: relative;
      z-index: 10;
      overflow: hidden;
      transform: translate3d(0, -50px, 0);
      transition: transform 0.4s;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 20%;
        width: 60%;
        height: 105%;
        opacity: 0;
        transform-origin: 50% 0;
      }
    }
  }

  &.show {
    .search {
      pointer-events: auto;

      &::before {
        opacity: 1;
      }

      button {
        opacity: 1;
      }

      .form-content {
        transform: translate3d(0, 0, 0);
        transition: none;

        &::after {
          animation: ${scaleUpDown} 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      }

      input {
        opacity: 1;
        transition: opacity 0s 0.4s;
      }

      span {
        opacity: 1;
        transform: translate3d(0, 0, 0);
        transition-delay: 0.4s;
        transition-timing-function: ease-out;
      }
    }
  }

  @media screen and (max-width: 40rem) {
    .form {
      margin: 2rem 0;
    }

    input {
      width: 100%;
      left: 0;
    }
  }
`;

export default modalDrop;
