import React from 'react'
import { Link } from 'react-router-dom'

export const HRole = () => {
  return (
    <div>
    <div style={{ fontSize:'22px', color:'#757b81', marginLeft:'10px',fontWeight:'500', float: 'left' }}>Cài đặt hệ thống</div>
    <div style={{ fontSize:'22px', color:'#757b81', marginLeft:'10px',fontWeight:'500', float: 'left' }}> {'>'} </div>
    <div style={{ fontSize:'22px', color:'#FF9138', marginLeft:'10px',fontWeight:'500', float: 'left' }}>Quản lý vai trò</div>
    </div>
  )
}
export const HUpdateRole = () => {
    return (
      <div>
      <div style={{ fontSize:'22px', color:'#757b81', marginLeft:'10px',fontWeight:'500', float: 'left' }}>Cài đặt hệ thống</div>
      <div style={{ fontSize:'22px', color:'#757b81', marginLeft:'10px',fontWeight:'500', float: 'left' }}> {'>'} </div>
      <Link to='/setting/manage-roles'>
      <div style={{ fontSize:'22px', color:'#757b81', marginLeft:'10px',fontWeight:'500', float: 'left' }}>Quản lý vai trò</div>
      </Link>
      <div style={{ fontSize:'22px', color:'#757b81', marginLeft:'10px',fontWeight:'500', float: 'left' }}> {'>'} </div>
      <div style={{ fontSize:'22px', color:'#FF9138', marginLeft:'10px',fontWeight:'500', float: 'left' }}>Cập nhật vai trò</div>
      </div>
    )
  }
  export const HAddRole = () => {
    return (
      <div>
      <div style={{ fontSize:'22px', color:'#757b81', marginLeft:'10px',fontWeight:'500', float: 'left' }}>Cài đặt hệ thống</div>
      <div style={{ fontSize:'22px', color:'#757b81', marginLeft:'10px',fontWeight:'500', float: 'left' }}> {'>'} </div>
      <Link to='/setting/manage-roles'>
      <div style={{ fontSize:'22px', color:'#757b81', marginLeft:'10px',fontWeight:'500', float: 'left' }}>Quản lý vai trò</div>
      </Link>
      <div style={{ fontSize:'22px', color:'#757b81', marginLeft:'10px',fontWeight:'500', float: 'left' }}> {'>'} </div>
      <div style={{ fontSize:'22px', color:'#FF9138', marginLeft:'10px',fontWeight:'500', float: 'left' }}>Thêm vai trò</div>
      </div>
    )
  }