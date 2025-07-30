"use client"

import { PrimaryTabContainer } from '@/components/Container'
import React from 'react'
import Overview from './tabpages/Overview'
import Prospects from './tabpages/Contacts'
import Customers from './tabpages/Customers'
// import Partners from './tabPages/Partners'
import Queue from './tabpages/Partners'

const Barns = () => {
  return (
    <PrimaryTabContainer TabData={TabData}/>
  )
}

export default Barns

const TabData = [
  { title: 'Overview', content: <Customers/> },
  { title: 'Contacts', content: <Prospects/> },
  { title: 'Customer', content: <Overview/> },
  { title: 'Queue', content: <Queue/> },
];