import React from 'react'
import { Link } from 'react-router-dom'

export const HGiveNumber = () => {
  return (
    <div>
    <div style={{ fontSize:'22px', color:'#757b81', marginLeft:'10px',fontWeight:'500', float: 'left' }}>Cấp số</div>
    <div style={{ fontSize:'22px', color:'#757b81', marginLeft:'10px',fontWeight:'500', float: 'left' }}> {'>'} </div>
    <div style={{ fontSize:'22px', color:'#FF9138', marginLeft:'10px',fontWeight:'500', float: 'left' }}>Danh sách cấp số</div>
    </div>
  )
}
export const HDetailGiveNumber = () => {
    return (
      <div>
      <div style={{ fontSize:'22px', color:'#757b81', marginLeft:'10px',fontWeight:'500', float: 'left' }}>Cấp số</div>
      <div style={{ fontSize:'22px', color:'#757b81', marginLeft:'10px',fontWeight:'500', float: 'left' }}> {'>'} </div>
      <Link to='/givenumber'>
      <div style={{ fontSize:'22px', color:'#757b81', marginLeft:'10px',fontWeight:'500', float: 'left' }}>Danh sách cấp số</div>
      </Link>
      <div style={{ fontSize:'22px', color:'#757b81', marginLeft:'10px',fontWeight:'500', float: 'left' }}> {'>'} </div>
      <div style={{ fontSize:'22px', color:'#FF9138', marginLeft:'10px',fontWeight:'500', float: 'left' }}>Chi tiết</div>
      </div>
    )
  }
  export const HNewGiveNumber = () => {
    return (
      <div>
      <div style={{ fontSize:'22px', color:'#757b81', marginLeft:'10px',fontWeight:'500', float: 'left' }}>Cấp số</div>
      <div style={{ fontSize:'22px', color:'#757b81', marginLeft:'10px',fontWeight:'500', float: 'left' }}> {'>'} </div>
      <Link to='/givenumber'>
      <div style={{ fontSize:'22px', color:'#757b81', marginLeft:'10px',fontWeight:'500', float: 'left' }}>Danh sách cấp số</div>
      </Link>
      <div style={{ fontSize:'22px', color:'#757b81', marginLeft:'10px',fontWeight:'500', float: 'left' }}> {'>'} </div>
      <div style={{ fontSize:'22px', color:'#FF9138', marginLeft:'10px',fontWeight:'500', float: 'left' }}>Cấp số mới</div>
      </div>
    )
  }