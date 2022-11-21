import React, { useEffect } from "react";

import css from "./Blog.module.css";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import img_1 from "../../asset/blog/right_1.png";
import img_2 from "../../asset/blog/right_2.png";
import img_3 from "../../asset/blog/right_3.png";
import img_4 from "../../asset/blog/right_4.png";
import image_1 from "../../asset/blog/Mask_1.png";
import image_4 from "../../asset/blog/Mask_4.png";
import { useNavigate } from "react-router-dom";
import title from "../../components/title/Title";

function Blog() {
  const navigate = useNavigate();
  title("Spectrum | Blog");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toBlogDetail = () => navigate("/blog/detail");
  return (
    <>
      <Header />

      {/* our blog */}
      <div className={`container-fluid ${css["blog-top"]}`}>
        <div className={`container ${css["link-bar"]}`}>
          <p>
            Blog <i className="fa-solid fa-angle-right"></i>
          </p>
        </div>
        <div className={`${css["our-blog"]}`}>
          <p className={`${css["our-blog-1"]}`}>Our Blog</p>
          <p className={`${css["our-blog-2"]}`}>
            Read and enjoy content from us
          </p>
        </div>
      </div>

      {/* content blog */}
      <div className="container">
        <div className="row">
          <div
            className={`col-lg-3 col-md-4 col-sm-12 ${css["right-content"]}`}
          >
            <div className={css.search}>
              <input type="text" name="" id="" placeholder="search" />
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
                  <p className={css.news_1}>
                    Windows Registry Cleaner Checklist
                  </p>
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
                <input type="text" name="" id="" placeholder="select month" />
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

          <div
            className={`col-lg-9 col-md-8 col-sm-12 ${css["right-content"]}`}
          >
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
            <p className={css.desc_banner}>
              Maecenas eget congue augue. Sed mollis tempor velit, et tempor
              justo cursus vel. Phasellus lacinia placerat lacus, vulputate
              volutpat tellus fringilla eu. Phasellus rhoncus varius tortor, non
              ultricies felis condimentum eget unc ornare suscipit nulla
              sagittis faucibu
            </p>
            <div className={css.readmore}>
              <p onClick={toBlogDetail}>Read More</p>
              <div className={css.garis}></div>
            </div>

            {/* image 2 */}
            <div className={css.image_preview}>
              <div className={css.play}>
                <div className={css.play_row}>
                  <i className="fa-regular fa-circle-play"></i>
                </div>
              </div>
            </div>
            <div className="">
              <p className={css.title_banner}>Scandinavian Style 2019</p>
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
              <p className={css.desc_banner}>
                Maecenas eget congue augue. Sed mollis tempor velit, et tempor
                justo cursus vel. Phasellus lacinia placerat lacus, vulputate
                volutpat tellus fringilla eu. Phasellus rhoncus varius tortor,
                non ultricies felis condimentum eget unc ornare suscipit nulla
                sagittis faucibu
              </p>
              <div className={css.readmore}>
                <p onClick={toBlogDetail}>Read More</p>
                <div className={css.garis}></div>
              </div>
            </div>

            {/* image 3 */}
            <div className={css.image_preview_1}>
              <div className={css.geser}>
                <div className={css.geser_row}>
                  <i className="fa-solid fa-circle-left"></i>
                  <i className="fa-solid fa-circle-right"></i>
                </div>
              </div>
            </div>
            <div className="">
              <p className={css.title_banner}>
                Beautiful Workspace for Designer
              </p>
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
              <p className={css.desc_banner}>
                Maecenas eget congue augue. Sed mollis tempor velit, et tempor
                justo cursus vel. Phasellus lacinia placerat lacus, vulputate
                volutpat tellus fringilla eu. Phasellus rhoncus varius tortor,
                non ultricies felis condimentum eget unc ornare suscipit nulla
                sagittis faucibu
              </p>
              <div className={css.readmore}>
                <p onClick={toBlogDetail}>Read More</p>
                <div className={css.garis}></div>
              </div>
            </div>

            {/* image 4 */}
            <div className={css.image_preview_2}>
              <p>Design is the silent ambassador of your brand.</p>
              <div className={css.readmore_1}>
                <div className={css.garis_1}></div>
                <p>Joshua Freeman</p>
              </div>
            </div>
            <div className="">
              <p className={css.title_banner}>26 Photos of Conner Kid</p>
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
              <p className={css.desc_banner}>
                Maecenas eget congue augue. Sed mollis tempor velit, et tempor
                justo cursus vel. Phasellus lacinia placerat lacus, vulputate
                volutpat tellus fringilla eu. Phasellus rhoncus varius tortor,
                non ultricies felis condimentum eget unc ornare suscipit nulla
                sagittis faucibu
              </p>
              <div className={css.readmore}>
                <p onClick={toBlogDetail}>Read More</p>
                <div className={css.garis}></div>
              </div>
            </div>

            {/* image right 1 */}
            <img src={image_4} alt="banner" className={css.image_preview} />
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
            <p className={css.desc_banner}>
              Maecenas eget congue augue. Sed mollis tempor velit, et tempor
              justo cursus vel. Phasellus lacinia placerat lacus, vulputate
              volutpat tellus fringilla eu. Phasellus rhoncus varius tortor, non
              ultricies felis condimentum eget unc ornare suscipit nulla
              sagittis faucibu
            </p>
            <div className={css.readmore}>
              <p onClick={toBlogDetail}>Read More</p>
              <div className={css.garis}></div>
            </div>

            <div className={css.button_page}>
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Blog;
