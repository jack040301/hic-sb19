import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Label from '../components/label'
import MemberDetails from '../components/member-details'
import Footer from '../components/footer'
import './home.css'
import AOS from 'aos'
import 'aos/dist/aos.css'; 

import { Slider } from '../components/slider'



const Home = (props) => {

 

  useEffect(()=>{
    AOS.init({duration: 2000});
  },[]);
  return (
    <div className="home-container">
      <Helmet>
        <title>SB19</title>
        <meta property="og:title" content="SB19" />
      </Helmet>
      <div className="home-hero">
        <div className="home-bg"></div>
        <Header></Header>
        <div className="home-container01">
          <div className="home-container02" >
            <h1 className="home-text">Get in the Zone, <span data-aos="zoom-in-left"> Break. </span></h1>
            <span className="home-text01">
              <span></span>
              <span>
               Filipino boy band that debuted in 2018, the pentad—consisting of members Pablo, Stell, Ken, Justin, and Josh.
              </span>
            </span>
          </div>
          <img
            alt="image"
            src="/playground_assets/gray-vector.svg"
            className="home-image"
          />
          <img
            alt="image"
            src="/playground_assets/white-vector.svg"
            className="home-image1"
          />
        </div>
      </div>
      <div className="home-section1">
        <div className="home-container03">
          <div className="home-container04" >
            <h6 className="home-text04">
              <span>SOUND BREAK</span>
              <span></span>
            </h6>
            <h3 className="home-text07 Healine">
            Break into the music scene
            </h3>
            <span className="home-text08 TextXL">
              <span className="home-text09">
              As we all know, “SB” in SB19 initially stands for ShowBT because we are the first Pinoy idol group in our company, while “19” derived from the Philippines’ (+63) and South Korea’s (+82) country codes. When each number sums up (6+3+8+2), we get 19.The members themselves, however, used the phrase "Sound Break"—for the goal to "break into the music scene" and improve the quality of Philippine boy groups.
              </span>
            </span>
          </div>
          <div className="home-cards-container">
            <div className="home-card1" data-aos="fade-right">
           {/*   <div className="home-container05">
                 <svg viewBox="0 0 1024 1024" className="home-icon">
          <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                
                </svg> 
              </div>*/}
              <h6 className="home-text04 TextXL">ATIN</h6>
              <span className="home-text15">
              The group fandom name is A'TIN, which is pronounced as "eighteen" and in Tagalog it pronounce "Atin" meaning "ours".
              </span>
            </div>
            <div className="home-card2" data-aos="fade-right">
             {/*  <div className="home-container06">
                <svg
                  viewBox="0 0 1097.142857142857 1024"
                  className="home-icon02"
                >
          <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  
                </svg> 
              </div>*/}
              <h6 className="home-text04 TextXL">SHOW BT PHILIPPINES</h6>
              <span className="home-text15">
              SB19 was formed by ShowBT Philippines, the Philippine subsidiary of ShowBT Group in Korea.
              </span>
            </div>
            <div className="home-card3" data-aos="fade-right">
            {/*   <div className="home-container07">
                <svg viewBox="0 0 1024 1024" className="home-icon04">
          <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                
                </svg>
              </div> */}
              <h6 className="home-text04 TextXL">Go Up</h6>
              <span className="home-text15">
              Go up is their "last shot" song. They gained public attention after the dance practice video of the song.
              </span>
            </div>
          </div>
       
        </div>
        <img
          alt="image"
          src="/playground_assets/white-vector.svg"
          className="home-image3"
        />
      </div>
      <div className="home-section2">
        <div className="home-container13" data-aos="zoom-in">
          <Label text="BACKGROUND ABOUT SB19​"></Label>
          <h2 className="home-text27 Text2XL">
            <span className="home-text28">
              ShowBT Entertainment Philippines
            </span>
            <br></br>
          </h2>
          <span className="home-text29 TextXL">
          ShowBT Philippines, simply referred to as ShowBT Entertainment, is an events and media company based in Makati, Philippines. They are a part of the SBT Group of Companies from South Korea. They produce concerts, corporate events, and cultural events.
          </span>
        </div>
        <div className="home-growing-company-section">
        <div className="home-container10" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
              <div className="home-container11">
                <img
                  alt="image"
                  src="/playground_assets/blue_wave.svg"
                  className="home-image2"
                />
              </div>
              
              <div className="home-container12">
                <h4 className="home-text23 Healine">
                  <span className="home-text24">SB19 - Our Zone</span>
                  <br></br>
                </h4>
                <span className="home-text25">
                  <span>
                  special celebration of the group’s third year in the industry. The name Our Zone comes from the fact that the boys are ready to share what the zone means to them and basically invite us into their space. This actually marks the first time the group is celebrating their anniversary through a concert. 
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
          <div className="home-container14" data-aos="fade-left">
        
            <h3 className="home-text30 Healine">SHOW BT Philippines</h3>
            <span className="home-text31">
            ShowBT Philippines is an entertainment, creative content and event promotion group based in the Philippines. The company was founded on 2012 by Jung Seong-han (정성한), a South Korean comedian and a former member of the popular comedic team Cult Triple in 2012 to commercially develop world class individuals and entertainment properties with an established music or fashion pedigree.
            </span>
            <div className="home-container16">
            <a href="https://www.facebook.com/showbtph/">
              <div className="home-container32">

              <svg viewBox="0 0 1024 1024" className="home-icon25">
                      <path d="M783.104 239.957c-74.667-74.283-165.888-111.957-271.104-111.957-106.197 0-197.675 37.717-271.915 112-74.368 74.283-112.085 165.845-112.085 272 0 105.173 37.675 196.395 111.957 271.104 74.283 74.923 165.803 112.896 272.043 112.896 105.259 0 196.48-37.973 271.189-112.768 74.88-74.795 112.811-166.059 112.811-271.232 0-106.155-37.973-197.717-112.896-272.043zM722.859 722.901c-48.512 48.597-103.936 76.288-168.192 84.693v-210.261h85.333v-85.333h-85.333v-59.733c0-14.123 11.477-25.6 25.643-25.6h59.691v-85.333h-59.605c-31.659 0-58.069 11.648-79.232 35.072-21.163 23.339-31.829 51.84-31.829 85.675v49.92h-85.333v85.333h85.333v210.347c-64.939-8.32-120.576-36.053-168.832-84.651-58.667-59.051-87.168-128.085-87.168-211.029 0-83.883 28.459-153.088 87.125-211.627 58.453-58.581 127.659-87.040 211.541-87.040 82.987 0 151.979 28.501 210.987 87.168 59.008 58.539 87.68 127.744 87.68 211.499 0 82.816-28.715 151.851-87.808 210.901z"></path>
                    </svg>
              </div>
              </a>
              <span className="home-text32">ShowBT Facebook</span>
     
            </div>
            <div className="home-container18">
              <div className="home-container32">
              <a href="https://www.instagram.com/showbt.ph/?hl=en">
              <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon39"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                    </a>
              </div>
              <span className="home-text33">ShowBT Instagram</span>
            </div>
            <div className="home-container20">
              <div className="home-container32">
              <a href="https://twitter.com/showbtph">
              <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="home-icon33"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                    </a>
              </div>
              <span className="home-text34">ShowBT Twitter</span>
            </div>
          </div>
        </div>
        <div className="home-container22" data-aos="flip-up">
          <h6 className="home-text35">
            <span>THE MEMBERS</span>
          </h6>
          <h3 className="home-text37 Healine">
          Where words fail, music speaks
          </h3>
          <span className="home-text38 TextXL">
            <span className="home-text39">
            You need to love yourself for you to be able to project the whole potential of yourself - Pablo
            </span>
          </span>
        </div>
        <div className="home-team">
          <div className="home-container23">
            <Link to="/profile" className="home-navlink">
              <div className="home-container24" data-aos="fade-up">
                <MemberDetails image_src="/playground_assets/pablo.jpg"></MemberDetails>
            
              </div>
            </Link>
            <Link to="/profile" className="home-navlink1">
              <div className="home-container29" data-aos="fade-down">
                <MemberDetails
                  heading1="Felip Jhon Suson"
                  heading11="Main Dancer, Lead Vocalist, Lead Rapper"
                  image_src="/playground_assets/ken.jpg"
                ></MemberDetails>
           
              </div>
            </Link>

            <Link to="/profile" className="home-navlink1">
              <div className="home-container29" data-aos="fade-up">
                <MemberDetails
                  heading1="Justin De Dios"
                  heading11="Sub-Vocalist, Visual, Bunso, Creative Lead"
                  image_src="/playground_assets/justin.png"
                ></MemberDetails>
       
              </div>
            </Link>


            <Link to="/profile" className="home-navlink2">
              <div className="home-container33" data-aos="fade-down">
                <MemberDetails
                  heading1="Josh Cullen Santos"
                  heading11="Lead Rapper, Lead Dancer, Sub-Vocalist, Eldest"
                  image_src="/playground_assets/josh.jpg"
                ></MemberDetails>
           
              </div>
            </Link>
            <Link to="/profile" className="home-navlink3">
              <div className="home-container38" data-aos="fade-up"> 
                <MemberDetails
                  heading1="Stellvester Ajero"
                  heading11="Main Vocalist, Lead Dancer, Choreographer"
                  image_src="/playground_assets/stell.jpg"
                ></MemberDetails>
           
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="home-section3" data-aos="zoom-out">
        <div className="home-container44">

          <h6 className="home-text40 TextSM">
            <span>Songs & Album</span>
          </h6>
          <h3 className="home-text42 Healine">Single's and Albums</h3>
          <span className="home-text43 TextXL">
            <span className="home-text44">
        <br></br>
        <br></br> 
        <br></br>
            </span>
            <br></br>
          </span>
          <div className="home-services"data-aos="zoom-in" >
      
          <div className="home-container45" >
              <div className="home-cont46">
              <div className='SlideApp'>
       <Slider/> 
                

          </div>
               </div>
            </div>
            <span className="home-text44">
        <br></br>
        <br></br> 
        <br></br>
        <br></br> 
        <br></br> 

            </span>
          </div>

    
       {/*    <div className="home-contact">
            <Label text="MESSAGE US"></Label>
            <h2 className="home-text49">Type in the bellow form</h2>
            <span className="home-text50 TextXL">
              They say there&apos;s no future for the street rascals, nothing
              for them, leave them to fall. But it isn&apos;t always how you
              would like it to be, especially when you do nothing for yourself.
            </span>
            <div className="home-form">
              <h1 className="home-text51">Want to work with us?</h1>
              <span className="home-text52 TextXL">
                Complete this form and we will get back to you in 24 hours.
              </span>
              <span className="home-text53 TextXS">FULL NAME</span>
              <input
                type="text"
                placeholder="Full Name"
                className="home-textinput TextSM input"
              />
              <span className="home-text54 TextXS">EMAIL</span>
              <input
                type="text"
                placeholder="Email"
                className="home-textinput1 TextSM input"
              />
              <span className="home-text55 TextXS">MESSAGE</span>
              <textarea
                cols="80"
                rows="4"
                disabled="true"
                placeholder="Type a message"
                className="home-textarea TextSM textarea"
              ></textarea>
              <div className="home-container49">
                <SecondaryButton
                  button="Send message"
                  rootClassName="secondary-button-root-class-name"
                ></SecondaryButton>
              </div>
            </div>
          </div> */}
        </div>
        <img
          alt="image"
          src="/playground_assets/gray-vector.svg"
          className="home-image5"
        />
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
