import React from 'react'

import css from './CardComment.module.css'
import comment1 from '../../asset/blogdetail/Oval.png'
import comment2 from '../../asset/blogdetail/Oval_1.png'
import comment3 from '../../asset/blogdetail/Oval_2.png'
import comment4 from '../../asset/blogdetail/Oval_3.png'

function CardComment() {
    return (
        <>
            <div className={css.bungkus_komen}>
                <div className={css.image_change}>
                    <img src={comment1} alt="comment" className='rounded-circle' />
                </div>
                <div className={css.comment_1}>
                    <p>“Theme is very flexible and easy to use. Perfect for us. Customer support has been excellent and answered every question we've thrown at them”</p>
                    <span className={css.comment_time}>35 mins ago, 15 November 2019</span>
                    <span className={css.comment_reply}>Reply</span>
                </div>
            </div>
            <div className={css.bungkus_komen}>
                <i className="fa-solid fa-minus"></i>
                <div className={css.image_change}>
                    <img src={comment2} alt="comment" className='rounded-circle' />
                </div>
                <div className={css.comment_1}>
                    <p>“This theme is indeed a great purchase. Support center is also helpful and quick to answer. No issues so far.”</p>
                    <span className={css.comment_time}>35 mins ago, 15 November 2019</span>
                    <span className={css.comment_reply}>Reply</span>
                </div>
            </div>
            <hr />
            <div className={css.bungkus_komen}>
                <div className={css.image_change}>
                    <img src={comment3} alt="comment" className='rounded-circle' />
                </div>
                <div className={css.comment_1}>
                    <p>“Exceptional service, beautiful and straightforward theme! Can't recommend enough.”</p>
                    <span className={css.comment_time}>35 mins ago, 15 November 2019</span>
                    <span className={css.comment_reply}>Reply</span>
                </div>
            </div>
            <hr />
            <div className={css.bungkus_komen}>
                <div className={css.image_change}>
                    <img src={comment4} alt="comment" className='rounded-circle' />
                </div>
                <div className={css.comment_1}>
                    <p>“Highly customizable. Excellent design. Customer services has exceeded my expectation. They are quick to answer and even when they don't know the answer right away. They'll work with you towards a solution.”</p>
                    <span className={css.comment_time}>35 mins ago, 15 November 2019</span>
                    <span className={css.comment_reply}>Reply</span>
                </div>
            </div>
        </>
    )
}

export default CardComment;