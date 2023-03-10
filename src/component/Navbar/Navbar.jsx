import React from 'react'
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar_logo'>
            <img src="https://png.pngtree.com/template/20191024/ourmid/pngtree-shopping-cart-vector-logo-design-shopping-logo-design-on-line-shopping-image_322990.jpg"  alt="navbar-logo"/>
        </div>

        <div className='navbar_links'>
            <h6>MEN</h6>
            <h6>WOMEN</h6>
            <h6>KIDS</h6>
            <h6>HOME & LIVING</h6>
            <h6>BEAUTY</h6>
            <h6>STUDIO</h6>
        </div>

        <div className='navbar_search'>
            <SearchIcon />
            <input type="text" placeholder='Search for products, brands and more' />
        </div>

        <div className='navbar_right'>
            <div className='navbar_profile'>
                <Person2OutlinedIcon />
                <h6>Profile</h6>
            </div>

            <div className='navbar_profile'>
                <FavoriteBorderOutlinedIcon />
                <h6>Wishlist</h6>
            </div>


            <div className='navbar_profile'>
                <ShoppingBagOutlinedIcon />
                <h6>Bag</h6>
            </div>
        </div>

    </div>
  )
}

export default Navbar