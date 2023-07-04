import React from 'react';
import './Card.css';
import CardItem from './CardItem';
import img_1 from '../../images/img-1.png'; 
import img_2 from '../../images/img-2.png'; 
import img_3 from '../../images/img-3.png'; 
import img_4 from '../../images/img-4.png'; 
import img_5 from '../../images/img-5.png'; 
import img_6 from '../../images/img-6.png'; 
import img_7 from '../../images/img-7.png'; 
import img_8 from '../../images/img-8.png'; 
import img_9 from '../../images/img-9.png'; 

function Cards() {
  return (
    <div className='cards'>
      <h1>Purely Handcrafted</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={img_1}
              text='Pure cold pressed coconut oil, organically grown hibiscus flower & leaves, thoongamalli herb, organically grown curry leaves & stems, organically grown amla, organically grown henna leaves.'
              label='BestSeller'
            
            />
            <CardItem
              src={img_2}
              text='Pure saffron (from Himalayan ranges) red tree barks, organic rose petals, organic hibiscus flowers dried aloe vera, organic lotus petals, badham'
              label='BestSeller'
             
              
            />
            <CardItem
              src={img_3}
              text='Traditional Wood Pressed Pungam Oil, Soda Crystals ( used for thickening the soap ), essential oil for fragrance.'
              label='BestSeller'
              
            />
          </ul>
          <ul className='cards__items' >
            
            <CardItem
              src={img_4}
              text='Xanthan Gum, Fresh Aloe Vera extract, Organic Amla extract, Organically grown hibiscus flowers and leaves, Soap nuts, Essential Oil, Food Grade powder colours, Geoguard preservative, indigo, henna leaves.'
              label='BestSeller'
              
            />
            <CardItem
              src={img_5}
              text='Xanthan Gum, Fresh Aloe Vera extract, Organic Amla extract, Organically grown hibiscus flowers and leaves, Soap nuts, Essential Oil, Food Grade powder colours, Geoguard preservative, organic handpicked avarampoo, dried avaram leaves, fenugreek, vettiver & amla'
              label='BestSeller'
              
            />
            <CardItem
              src={img_6}
              text='Organically cultivated Kasthuri Manjal, pure orange peel, pure lemon peel, and hand-picked tulsi leaves.'
              label='BestSeller'
              
            />
            
            
          </ul>
          <ul className='cards__items'>
          <CardItem
              src={img_7}
              text='Pure Goat’s milk base (manufactured using farm fresh goat’s milk), essential oils, Demineralised Water.'
              label='BestSeller'
              
            />
            <CardItem
              src={img_8}
              text='Carefully Selected unprocessed (natural) papaya pulp, Traditional Wood Pressed Coconut Oil , Castor Oil, Soda Crystals ( used for thickening the soap ), essential oil for fragrance.'
              label='BestSeller'
            
            />
            <CardItem
              src={img_9}
              text='Fresh aloe vera pulp, organic cucumber with seeds, vitamin e oil.'
              label='BestSeller'
              
            />
           
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;