'use client';

import { NavbarStyle } from '@/app/utils/constantStyle'
import React from 'react'
import { BiSearch } from 'react-icons/bi'
export const Search = () => {
    return (
        <div className={NavbarStyle.searchNavStyle.search}>
            <div className={NavbarStyle.searchNavStyle.bloc1}>
                <div className={NavbarStyle.searchNavStyle.bloc2}>
                    Anywhere
                </div>
                <div className={NavbarStyle.searchNavStyle.bloc3}>
                    Any week
                </div>
                <div className={NavbarStyle.searchNavStyle.addGuestsBlock.main}>
                    <div className={NavbarStyle.searchNavStyle.addGuestsBlock.addGuests}>Add Guests</div>
                    <div className={NavbarStyle.searchNavStyle.addGuestsBlock.searchIcon}>
                        <BiSearch size={18}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
