import React from 'react'
import * as ReactDOM from 'react-dom';
import { Loading } from '../Loading';
import styles from "./LoadingPage.module.css"

export const LoadingPage = () => {
  return ReactDOM.createPortal(
    <div className={`${styles.show} ${styles.modal}`}>
      <Loading />
    </div>,
    document.getElementById('root-modal'));
}