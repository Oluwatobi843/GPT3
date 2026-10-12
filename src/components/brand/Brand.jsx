import React from 'react';
import './brand.css';
import { google, slack, dropbox, atlassian, shopify } from './imports';

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <diV>
          <img src={google} alt='google' />
      </diV>
      <diV>
          <img src={slack} alt='slack' />
      </diV>
      <diV>
          <img src={dropbox} alt='dropbox' />
      </diV>
      <diV>
          <img src={atlassian} alt='atlassian' />
      </diV>
      <diV>
          <img src={shopify} alt='shopify' />
      </diV>
      
    </div>
  )
}

export default Brand