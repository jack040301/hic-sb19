import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import SecondaryButton from '../components/secondary-button'
import PostReaction from '../components/post-reaction'
import Label from '../components/label'
import ArticleCard from '../components/article-card'
import Footer from '../components/footer'
import './blog-post.css'

const BlogPost = (props) => {
  return (
    <div className="blog-post-container">
      <Helmet>
        <title>About Us - Developers</title>
        <meta property="og:title" content="About Developers" />
      </Helmet>
      <div className="blog-post-hero">
        <div className="blog-post-fixed-header">
          <Header rootClassName="header-root-class-name"></Header>
        </div>
        <h1 className="blog-post-text Text2XL">
         About The Project and Developers
        </h1>
        <div className="blog-post-bg"></div>
      </div>
 
      <div className="blog-post-container02">
        <div className="blog-post-story">
          <span className="blog-post-text08 TextLG">
            <span>Created on January - April 2023</span>
          </span>
          <h3 className="blog-post-text10 Text2XL">
            About The Project...
          </h3>
        
          <span className="blog-post-text11 TextLG">
            <span className="blog-post-text12">
             This project is created as a requirement for the completion in one of the Major Subject (Human Computer Interaction) of the Developers and as 
             a fan of the Boyband SB19, we decided to create a website that will help the fans to know more about the members of the group. The group inspired
             us through their music and experience in life which make us want to know more about them. We hope that this website will help the fans to know more about them.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span className="blog-post-text15">
           And as of now, we are still working on the project to make it more interactive and user friendly. We hope that you will support us in this project. This project is not developed
           for commercial use and is only for educational purposes.
            </span>
            <br></br>
          </span>
          <div className="blog-post-container03">
            <span className="TextLG">
              <span className="blog-post-text17">&quot;</span>
              <span className="blog-post-text18">
              Don't rush a masterpiece
              </span>
              <span className="blog-post-text19">&quot;</span>
            </span>
            <span className="blog-post-text20">
              <span className="blog-post-text21">SB19, PINUNO - PABLO</span>
              <span className="blog-post-text22"></span>
            </span>
          </div>
         
      
        </div>
      </div>
      <div className="blog-post-posts">
        <div className="blog-post-container12">
          <Label text="Programmers"></Label>
          <h3 className="blog-post-text46 Healine">
            <span className="blog-post-text47">Developers </span>
          </h3>
          <span className="blog-post-text48 TextXL">
          Therefore we do not lose heart. Though outwardly we are wasting away, yet inwardly we are being renewed day by day. For our light and momentary troubles are achieving for us an eternal glory that far outweighs them all. So we fix our eyes not on what is seen, but on what is unseen, since what is seen is temporary, but what is unseen is eternal.
          - 2 Corinthians 4:16-18
          </span>
        </div>
        <ArticleCard avatar_src="/playground_assets/team3-200h.jpg"></ArticleCard>
        <ArticleCard
          name="Demverleen Espinola"
          time="Bachelor of Science in Computer Science"
          title="MateLabs mixes learning with IFTTT"
          image_src="/playground_assets/team3-200h.jpg"
          avatar_src="/playground_assets/team2-200h.jpg"
          description="We&apos;ve got time, but we are only doing what they say and want. I
          do not want to live as I will never die, cause life&apos;s too
          short, and I do not want to drown myself, as others would like"
        ></ArticleCard>

      </div>
      <Footer></Footer>
    </div>
  )
}

export default BlogPost
