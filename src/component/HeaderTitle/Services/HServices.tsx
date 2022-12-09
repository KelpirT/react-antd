import React from 'react'
import { Link } from 'react-router-dom'

export const HServices = () => {
  return (
    <div>
    <div style={{ fontSize:'22px', color:'#757b81', marginLeft:'10px',fontWeight:'500', float: 'left' }}>Dịch vụ</div>
    <div style={{ fontSize:'22px', color:'#757b81', marginLeft:'10px',fontWeight:'500', float: 'left' }}> {'>'} </div>
    <div style={{ fontSize:'22px', color:'#FF9138', marginLeft:'10px',fontWeight:'500', float: 'left' }}>Danh sách dịch vụ</div>
    </div>
  )
}
export const HDetailServices = () => {
    return (
      <div>
      <div style={{ fontSize:'22px', color:'#757b81', marginLeft:'10px',fontWeight:'500', float: 'left' }}>Dịch vụ</div>
      <div style={{ fontSize:'22px', color:'#757b81', marginLeft:'10px',fontWeight:'500', float: 'left' }}> {'>'} </div>
      <Link to='/services'>
      <div style={{ fontSize:'22px', color:'#757b81', marginLeft:'10px',fontWeight:'500', float: 'left' }}>Danh sách dịch vụ</div>
      </Link>
      <div style={{ fontSize:'22px', color:'#757b81', marginLeft:'10px',fontWeight:'500', float: 'left' }}> {'>'} </div>
      <div style={{ fontSize:'22px', color:'#FF9138', marginLeft:'10px',fontWeight:'500', float: 'left' }}>Chi tiết</div>
      </div>
    )
  }
export const HUpdateServices = () => {
    return (
      <div>
      <div style={{ fontSize:'22px', color:'#757b81', marginLeft:'10px',fontWeight:'500', float: 'left' }}>Dịch vụ</div>
      <div style={{ fontSize:'22px', color:'#757b81', marginLeft:'10px',fontWeight:'500', float: 'left' }}> {'>'} </div>
      <Link to='/services'>
      <div style={{ fontSize:'22px', color:'#757b81', marginLeft:'10px',fontWeight:'500', float: 'left' }}>Danh sách dịch vụ</div>
      </Link>
      <div style={{ fontSize:'22px', color:'#757b81', marginLeft:'10px',fontWeight:'500', float: 'left' }}> {'>'} </div>
      <Link to='/detailservice'>
      <div style={{ fontSize:'22px', color:'#757b81', marginLeft:'10px',fontWeight:'500', float: 'left' }}>Chi tiết</div>
      </Link>
      <div style={{ fontSize:'22px', color:'#757b81', marginLeft:'10px',fontWeight:'500', float: 'left' }}> {'>'} </div>
      <div style={{ fontSize:'22px', color:'#FF9138', marginLeft:'10px',fontWeight:'500', float: 'left' }}>Cập nhật</div>
      </div>
    )
}