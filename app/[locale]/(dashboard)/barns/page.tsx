"use client"

import { PrimaryTabContainer } from '@/components/Container'
import React from 'react'
import Overview from './tabPages/Overview'
import Prospects from './tabPages/Contacts'
import Customers from './tabPages/Customers'
// import Partners from './tabPages/Partners'
import Queue from './tabPages/Partners'

const Barns = () => {
  return (
    <PrimaryTabContainer TabData={TabData}/>
  )
}

export default Barns

const TabData = [
  { title: 'Overview', content: <Overview/> },
  { title: 'Contacts', content: <Prospects/> },
  { title: 'Customer', content: <Customers/> },
  { title: 'Queue', content: <Queue/> },
];