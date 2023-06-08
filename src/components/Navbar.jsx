import React from 'react'
import {navbarItems} from '../data.js'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        {navbarItems.map(items => {
            return (
                <div key={items.id}>
                <Link to={items.path}>{items.title}</Link>
                <ul>
                    {items.subtitles && items.subtitles.map(subtitle => {
                        return (
                            <div key={subtitle.id}>
                            <li><Link to={subtitle.path}>{subtitle.subtitle}</Link></li>
                            <ul>
                                {subtitle.items && subtitle.items.map(items => {
                                    return (
                                        <div key={items.id}>
                                        <li><Link to={items.path}>{items.item}</Link></li>
                                        <ul>
                                        {items.subitems && items.subitems.map(subitems => {
                                            return (
                                                <li key={subitems.id}><Link to={subitems.path}>{subitems.subitem}</Link></li>
                                            )
                                        })}
                                        </ul>
                                        </div>
                                    )
                                })}
                            </ul>
                            </div>
                        )
                    })}
                </ul>
                </div>
            )
        })}
    </div>
  )
}

export default Navbar