import React from 'react'
import { Link } from 'react-router-dom'

export const HDetailDevices = () => {
  return (
    <div>
    <div style={{ fontSize:'22px', color:'#757b81', marginLeft:'10px',fontWeight:'500', float: 'left' }}>Thiết bị</div>
    <div style={{ fontSize:'22px', color:'#757b81', marginLeft:'10px',fontWeight:'500', float: 'left' }}> {'>'} </div>
    <Link to='/devices'>
    <div style={{ fontSize:'22px', color:'#757b81', marginLeft:'10px',fontWeight:'500', float: 'left' }}>Danh sách thiết bị</div>
    </Link>
    <div style={{ fontSize:'22px', color:'#757b81', marginLeft:'10px',fontWeight:'500', float: 'left' }}> {'>'} </div>
    <div style={{ fontSize:'22px', color:'#FF9138', marginLeft:'10px',fontWeight:'500', float: 'left' }}>Chi tiết thiết bị</div>
    </div>
  )
}