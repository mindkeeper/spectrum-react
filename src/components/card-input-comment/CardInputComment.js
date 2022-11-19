import React from 'react'

import css from './CardInputComment.module.css'

function CardInputComment() {
    return (
        <>
            <p className={css.comment_input}>Leave A Comment</p>
            <p className={css.coment_input_desc}>Your email address will not be published. Required fields are marked *</p>
            <div className={css.jarak_button}>
                <div className={css.give_border}>
                    <label htmlFor="">Name *</label>
                    <input type="text" name="" id="" />
                </div>
                <div className={css.give_border}>
                    <label htmlFor="">Email *</label>
                    <input type="text" name="" id="" />
                </div>
                <div className={css.give_border}>
                    <label htmlFor="">Website *</label>
                    <input type="text" name="" id="" />
                </div>
            </div>
            <div className={css.isi_comment}>
                <div className={css.content_isi_comment}>
                    <label htmlFor="">Your comment *</label>
                    <textarea id="txtid" name="txtname" rows="4" cols="50" maxlength="200">
                    </textarea>
                </div>
            </div>
            <div className={css.button_send}>
                <button>Send</button>
            </div>
        </>
    )
}

export default CardInputComment