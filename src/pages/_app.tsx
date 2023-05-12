import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import Header from '../components/Header'
import UserList from '../components/UserList'
export default function _app() {
  return (
    <div>
      <Header/>
      <UserList/>
    </div>
  )
}
