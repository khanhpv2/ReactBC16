import React, { Component } from 'react'
import KetQuaTroChoi from './KetQuaTroChoi'
import XucXac from './XucXac'
import style from './BTGameXucXac.module.css'
export default class BtGameXucXac extends Component {
  render() {
    return (
      <div className={`${style['game-xuc-xac']}`}>
          <div className="container">
            <h3 className='display-4 text-center pt-3'>BÀI TẬP GAME XÚC XẮC</h3>
            <XucXac />
            <KetQuaTroChoi/>
          </div>
      </div>
    )
  }
}
