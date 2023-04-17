'use client';

import { NavbarStyle } from '@/app/utils/constantStyle'
import { Container } from '../../features/Container/Container'
import { Logo } from './Logo'
import { Search } from './Search'
import { UserMenu } from './UserMenu'

export default function Navbar() {
  return (
    <div className={NavbarStyle.navmain}>
      <div className={NavbarStyle.subDivNav}>
        <Container>
            <div className={NavbarStyle.navItem}>
                <Logo/>
                <Search/>
                <UserMenu/>
            </div>
        </Container>
      </div>
    </div>
  )
}
