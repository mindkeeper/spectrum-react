import React from 'react'

import css from './Blogdetail.module.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import CardComment from '../../components/card-comment/CardComment'
import CardInputComment from '../../components/card-input-comment/CardInputComment'

import img_1 from '../../asset/blog/right_1.png'
import img_2 from '../../asset/blog/right_2.png'
import img_3 from '../../asset/blog/right_3.png'
import img_4 from '../../asset/blog/right_4.png'
import image_1 from '../../asset/blog/Mask_1.png'
import image_2 from '../../asset/blogdetail/image-1.png'



function Blogdetail() {
    return (
        <>
            <Header />

            {/* our blog */}
            <div className={`container-fluid ${css['blog-top']}`}>
                <div className={`container ${css['link-bar']}`}>
                    <p>Blog <i className="fa-solid fa-angle-right"></i></p>
                    <p>Blog Detail</p>
                </div>
                <div className={`${css['our-blog']}`}>
                    <p className={`${css['our-blog-1']}`}>Our Blog</p>
                    <p className={`${css['our-blog-2']}`}>Read and enjoy content from us</p>
                </div>
            </div>

            {/* content blog */}
            <div className="container">
                <div className="row">
                    <div className={`col-lg-3 col-md-4 col-sm-12 ${css['right-content']}`}>
                        <div className={css.search}>
                            <input type="text" name="" id="" placeholder='search' />
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>

                        <p className={css.cate}>Categories</p>
                        <div className={css.categories}>
                            <div className={css.categories_1}>
                                <p>Furniture</p>
                                <p>Interior</p>
                                <p>Real Estate</p>
                                <p>Construction</p>
                                <p>Buisness</p>
                                <p>Industrial</p>
                                <p>Furniture</p>
                            </div>
                            <div className={css.categories_1}>
                                <p>1</p>
                                <p>2</p>
                                <p>3</p>
                                <p>4</p>
                                <p>5</p>
                                <p>6</p>
                                <p>7</p>
                            </div>
                        </div>

                        <p className={css.cate}>Recent News</p>
                        <div className={css.recent_news}>
                            <div className={css.recent}>
                                <div className={css.news}>
                                    <img src={img_1} alt="news" />
                                </div>
                                <div className={css.news_}>
                                    <p className={css.news_1}>How To Put Movies On Iphone</p>
                                    <p className={css.news_2}>24 Apr 2019, 45 mins ago</p>
                                </div>
                            </div>
                            <div className={css.recent}>
                                <div className={css.news}>
                                    <img src={img_2} alt="news" />
                                </div>
                                <div className={css.news_}>
                                    <p className={css.news_1}>Windows Registry Cleaner Checklist</p>
                                    <p className={css.news_2}>24 Apr 2019, 45 mins ago</p>
                                </div>
                            </div>
                            <div className={css.recent}>
                                <div className={css.news}>
                                    <img src={img_3} alt="news" />
                                </div>
                                <div className={css.news_}>
                                    <p className={css.news_1}>Messes Make Memories</p>
                                    <p className={css.news_2}>24 Apr 2019, 45 mins ago</p>
                                </div>
                            </div>
                            <div className={css.recent_1}>
                                <div className={css.news}>
                                    <img src={img_4} alt="news" />
                                </div>
                                <div className={css.news_}>
                                    <p className={css.news_1}>Modern Light House</p>
                                    <p className={css.news_2}>24 Apr 2019, 45 mins ago</p>
                                </div>
                            </div>
                        </div>

                        <p className={css.cate}>Archives</p>
                        <div className={css.arcive}>
                            <div className={css.search}>
                                <input type="text" name="" id="" placeholder='select month' />
                                <i className="fa-solid fa-chevron-down"></i>
                            </div>
                        </div>

                        <p className={css.cate}>Tags</p>
                        <div className={css.button_tags}>
                            <button>furniture</button>
                            <button>style</button>
                            <button>life style</button>
                            <button>suka</button>
                            <button>online store</button>
                            <button>real estate</button>
                        </div>

                        <div className={css.banner}>
                            <p className={css.banner_1}>add Banner</p>
                            <p className={css.banner_2}>spectrum@gmail.com</p>
                        </div>
                    </div>



                    {/* content right */}
                    <div className={`col-lg-9 col-md-8 col-sm-12 ${css['right-content']}`}>
                        {/* image right 1 */}
                        <img src={image_1} alt="banner" className={css.image_preview} />
                        <p className={css.title_banner}>How to open interior shop?</p>
                        <div className={css.clock_discount}>
                            <div className={css.clock}>
                                <i className="fa-solid fa-clock"></i>
                                <span>24 Apr 2019, 45 mins ago, by Admin</span>
                            </div>
                            <div className={css.clock}>
                                <i className="fa-solid fa-tag"></i>
                                <span>Kids, Interior, Photos</span>
                            </div>
                        </div>
                        <p className={css.desc_banner}>Maecenas eget congue augue. Sed mollis tempor velit, et tempor justo cursus vel. Phasellus lacinia placerat lacus, vulputate volutpat tellus fringilla eu. Phasellus rhoncus varius tortor, non ultricies felis condimentum eget unc ornare suscipit nulla sagittis faucibuDonec non velit ut nisl ultrices lobortis eget et odio. Sed mollis, libero ut lacinia ultrices, ex urna sodales tortor, sed pulvinar ex eros vel orci. Sed tempor placerat tristique. Ut tristique leo sit amet nisi blandit rutrum. Nunc hendrerit a diam vel ultricies. Morbi gravida, dui eu efficitur aliquet, ante nisl mollis ex, eget venenatis magna urna non ex. Suspendisse et orci viverra lacus consectetur posuere. Curabitur bibendum nisi at sapien viverra ultricies. Praesent commodo volutpat leo, ut accumsan ipsum egestas in. Integer elementum ligula vel cursus bibendum. Nulla nibh ante, iaculis at consequat id, euismod a sem. Fusce et sapien cursus, placerat dui non, rhoncus diam. Praesent ac consectetur dui.</p>
                        <p className={css.desc_banner}>Phasellus ac sem eu mauris sodales tristique sed non ligula. Aenean in mauris ac libero condimentum vulputate quis ut sapien. Phasellus euismod mi eget interdum pellentesque. Maecenas molestie vitae risus vitae volutpat. Maecenas a velit rutrum, auctor quam et, commodo est. Cras leo sem, maximus non ex ac, porttitor egestas dolor. Fusce ut metus sodales, pellentesque diam sed, sodales massa. Nulla facilisi. Sed sed quam eget metus interdum condimentum non et odio. Nam magna tortor, vulputate in venenatis et, porta ac orci. Sed venenatis scelerisque scelerisque. Nullam ut neque sed libero feugiat fermentum et non odio. Aenean et justo elementum, volutpat arcu vitae, tincidunt lorem.</p>



                        <div className={`row ${css["cont-banner-2"]}`}>
                            <div className={`col-lg-5 col-md-12 ${css.box_center}`}>
                                <img src={image_2} alt="" />
                            </div>
                            <div className={`col-lg-7 col-md-12 ${css['desc-script']}`}>
                                <p className={css.title_desain}>Scandinavian Design</p>
                                <p className={css.desc_banner}>Nunc hendrerit a diam vel ultricies. Morbi gravida, dui eu efficitur aliquet, ante nisl mollis ex, eget venenatis magna urna non ex. Suspendisse et orci viverra lacus consectetur posuere. Curabitur bibendum nisi at sapien viverra ultricies. Praesent commodo volutpat leo, ut accumsan ipsum egestas in. Integer elementum ligula vel cursus bibendum. Nulla nibh ante, iaculis at consequat id, euismod a sem. Fusce et sapien cursus, placerat dui non, rhoncus diam. Praesent ac consectetur dui.</p>
                                <p className={css.desc_banner}>Phasellus ac sem eu mauris sodales tristique sed non ligula. Aenean in mauris ac libero condimentum vulputate quis ut sapien. Phasellus euismod mi eget interdum pellentesque.</p>
                            </div>
                            <p className={css.desc_banner}>Sed mollis, libero ut lacinia ultrices, ex urna sodales tortor, sed pulvinar ex eros vel orci. Sed tempor placerat tristique. Ut tristique leo sit amet nisi blandit rutrum. Nunc hendrerit a diam vel ultricies. Morbi gravida, dui eu efficitur aliquet, ante nisl mollis ex, eget venenatis magna urna non ex. Suspendisse et orci viverra lacus consectetur posuere. Curabitur bibendum nisi at sapien viverra ultricies. Praesent commodo volutpat leo, ut accumsan ipsum egestas in. Integer elementum ligula vel cursus bibendum. Nulla nibh ante, iaculis at consequat id, euismod a sem. Fusce et sapien cursus, placerat dui non, rhoncus diam. Praesent ac consectetur dui.</p>
                            <p className={css.desc_banner}>Phasellus ac sem eu mauris sodales tristique sed non ligula. Aenean in mauris ac libero condimentum vulputate quis ut sapien. Phasellus euismod mi eget interdum pellentesque. Maecenas molestie vitae risus vitae volutpat. Maecenas a velit rutrum, auctor quam et, commodo est. Cras leo sem, maximus non ex ac, porttitor egestas dolor. Fusce ut metus sodales, pellentesque diam sed, sodales massa. Nulla facilisi. Sed sed quam eget metus interdum condimentum non et odio.</p>
                        </div>

                        <div className={css.quotes}>
                            <p className={css.quotes1}>“Luxury Is In Each Detail”</p>
                            <p className={css.quotes2}>Hubert de Givenchy - Scoutandnimble.com</p>
                        </div>

                        <p className={css.desc_banner}>Sed mollis, libero ut lacinia ultrices, ex urna sodales tortor, sed pulvinar ex eros vel orci. Sed tempor placerat tristique. Ut tristique leo sit amet nisi blandit rutrum. Nunc hendrerit a diam vel ultricies. Morbi gravida, dui eu efficitur aliquet, ante nisl mollis ex, eget venenatis magna urna non ex. Suspendisse et orci viverra lacus consectetur posuere. Curabitur bibendum nisi at sapien viverra ultricies. Praesent commodo volutpat leo, ut accumsan ipsum egestas in. Integer elementum ligula vel cursus bibendum. Nulla nibh ante, iaculis at consequat id, euismod a sem. Fusce et sapien cursus, placerat dui non, rhoncus diam. Praesent ac consectetur dui.</p>
                        <p className={css.desc_banner}>Phasellus ac sem eu mauris sodales tristique sed non ligula. Aenean in mauris ac libero condimentum vulputate quis ut sapien. Phasellus euismod mi eget interdum pellentesque. Maecenas molestie vitae risus vitae volutpat. Maecenas a velit rutrum, auctor quam et, commodo est. Cras leo sem, maximus non ex ac, porttitor egestas dolor. Fusce ut metus sodales, pellentesque diam sed, sodales massa. Nulla facilisi. Sed sed quam eget metus interdum condimentum non et odio.</p>

                        <div className={css.share_with}>
                            <span>Share with</span>
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-youtube"></i>
                            <i className="fa-solid fa-basketball"></i>
                        </div>
                        <hr />

                        <div className={`row ${css['page-detail']}`}>
                            <div className={`col-lg-6 ${css['page-left']}`}>
                                <div className={css.recent_1}>
                                    <div className={css.news}>
                                        <img src={img_4} alt="news" />
                                    </div>
                                    <div className={css.news_detail}>
                                        <p className={css.news_1}>Modern Light House</p>
                                        <p className={css.news_2}>24 Apr 2019, 45 mins ago</p>
                                    </div>
                                </div>
                                <p className={css.prev}>Prev</p>
                            </div>
                            <div className={`col-lg-6 ${css['page-right']}`}>
                                <div className={css.recent_2}>
                                    <div className={css.news}>
                                        <img src={img_4} alt="news" />
                                    </div>
                                    <div className={css.news_detail}>
                                        <p className={css.news_1}>Modern Light House</p>
                                        <p className={css.news_2}>24 Apr 2019, 45 mins ago</p>
                                    </div>
                                </div>
                                <p className={css.prev}>next</p>
                            </div>
                        </div>

                        <p className={css.komen}>4 Comment</p>
                        <div className={css.border_comment}>
                            <CardComment />
                        </div>

                        {/* input koment */}
                        <CardInputComment />

                        <div className={css.give_botton}></div>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    )
}

export default Blogdetail;