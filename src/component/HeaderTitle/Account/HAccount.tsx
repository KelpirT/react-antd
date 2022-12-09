import React from 'react'
import { Link } from 'react-router-dom'


export const HMAccount = () => {
    return (
      <div>
      <div style={{ fontSize:'22px', color:'#FF9138', marginLeft:'10px',fontWeight:'500', float: 'left' }}>Thông tin cá nhân</div>
      </div>
    )
  }
export const HAccount = () => {
  return (
    <div>
    <div style={{ fontSize:'22px', color:'#757b81', marginLeft:'10px',fontWeight:'500', float: 'left' }}>Cài đặt hệ thống</div>
    <div style={{ fontSize:'22px', color:'#757b81', marginLeft:'10px',fontWeight:'500', float: 'left' }}> {'>'} </div>
    <div style={{ fontSize:'22px', color:'#FF9138', marginLeft:'10px',fontWeight:'500', float: 'left' }}>Quản lý tài khoản</div>
    </div>
  )
}
export const HUpdateAccount = () => {
    return (
      <div>
      <div style={{ fontSize:'22px', color:'#757b81', marginLeft:'10px',fontWeight:'500', float: 'left' }}>Cài đặt hệ thống</div>
      <div style={{ fontSize:'22px', color:'#757b81', marginLeft:'10px',fontWeight:'500', float: 'left' }}> {'>'} </div>
      <Link to='/setting/accounts'>
      <div style={{ fontSize:'22px', color:'#757b81', marginLeft:'10px',fontWeight:'500', float: 'left' }}>Quản lý tài khoản</div>
      </Link>
      <div style={{ fontSize:'22px', color:'#757b81', marginLeft:'10px',fontWeight:'500', float: 'left' }}> {'>'} </div>
      <div style={{ fontSize:'22px', color:'#FF9138', marginLeft:'10px',fontWeight:'500', float: 'left' }}>Cập nhật tài khoản</div>
      </div>
    )
  }
  export const HAddAccount = () => {
    return (
      <div>
      <div style={{ fontSize:'22px', color:'#757b81', marginLeft:'10px',fontWeight:'500', float: 'left' }}>Cài đặt hệ thống</div>
      <div style={{ fontSize:'22px', color:'#757b81', marginLeft:'10px',fontWeight:'500', float: 'left' }}> {'>'} </div>
      <Link to='/setting/accounts'>
      <div style={{ fontSize:'22px', color:'#757b81', marginLeft:'10px',fontWeight:'500', float: 'left' }}>Quản lý tài khoản</div>
      </Link>
      <div style={{ fontSize:'22px', color:'#757b81', marginLeft:'10px',fontWeight:'500', float: 'left' }}> {'>'} </div>
      <div style={{ fontSize:'22px', color:'#FF9138', marginLeft:'10px',fontWeight:'500', float: 'left' }}>Thêm tài khoản</div>
      </div>
    )
  }