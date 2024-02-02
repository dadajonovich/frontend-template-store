import {
  AiOutlineShopping,
  AiOutlineClear,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
  AiOutlineDelete,
} from 'react-icons/ai';

function Cart() {
  return (
    <section className='cart'>
      <article className='cart__header'>
        <div className='cart__header-left'>
          <div className='cart__icon'>
            <AiOutlineShopping />
          </div>
          <p className='cart__text'>Ware:</p>
        </div>
        <button className='cart__clean'>
          <AiOutlineClear />
        </button>
      </article>
      <hr style={{ width: '100%', margin: '15px' }} />
      <article className='cart__items'>
        <div className='cart__item'>
          <figure className='cart__figure'>
            <img
              src={'https://ir.ozone.ru/s3/multimedia-y/wc750/6108232234.jpg'}
              className='cart__item-pic'
              alt='pic-article'
            ></img>
            <p className='cart__item-article'>Ножичек</p>
          </figure>
          <article className='cart__item-counter'>
            <AiOutlineMinusCircle />
            <p className='cart__item-'>1</p>
            <AiOutlinePlusCircle />
          </article>
          <p className='cart__item-price'>666</p>
          <button className='cart__item-del'>
            <AiOutlineDelete />
          </button>
        </div>
        <div className='cart__item'>
          <figure className='cart__figure'>
            <img
              src={'https://ir.ozone.ru/s3/multimedia-y/wc750/6108232234.jpg'}
              className='cart__item-pic'
              alt='pic-article'
            ></img>
            <p className='cart__item-article'>Ножичек</p>
          </figure>
          <article className='cart__item-counter'>
            <AiOutlineMinusCircle />
            <p className='cart__item-'>1</p>
            <AiOutlinePlusCircle />
          </article>
          <p className='cart__item-price'>666</p>
          <button className='cart__item-del'>
            <AiOutlineDelete />
          </button>
        </div>
      </article>
      <hr style={{ width: '100%', margin: '15px' }} />
      <article className='cart__total'>
        <p className='cart__total-items'>Total: 7</p>
        <p className='cart__total-price'>Order: 123</p>
      </article>
      <div className='cart__wrapper-btn'>
        <button className='button cart__btn'>Buy</button>
      </div>
    </section>
  );
}

export default Cart;
