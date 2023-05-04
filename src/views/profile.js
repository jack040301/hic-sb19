import React from 'react'
import { useEffect } from 'react';
import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Counter from '../components/counter'
import PrimaryButton from '../components/primary-button'
import SecondaryButton from '../components/secondary-button'
import Footer from '../components/footer'
import './profile.css'


const Profile = (props) => {

  useEffect(() => {
    const id = window.location.hash.substr(1); // Get the ID from the URL hash
    const element = document.getElementById(id); // Get the element with the specified ID
    if (element) {
      element.scrollIntoView(); // Scroll to the element
    }
  }, []);


  return (
    <div className="profile-container">
      <Helmet>
        <title>Profile - SB19</title>
        <meta property="og:title" content="Profile - Notus Pro" />
      </Helmet>
      <div className="profile-image">
        <Header></Header>
        <img
          alt="image"
          src="/playground_assets/gray-vector.svg"
          className="profile-image1"
        />
        <div className="profile-bg"></div>
      </div>
      
      <div className="profile-container01">
        <div className="profile-container02">
          <div className="profile-container03">
 
          
            <Counter type="Youtube" number="124k"></Counter>
            <Counter type="Instagram" number="346k"></Counter> 
            <Counter type="Twitter" number="326.4k"></Counter> 
            <Counter type="Tiktok" number="529.2k"></Counter> 

          </div>
          
          <img
          id="pablo-id"
            alt="image"
            src="/playground_assets/pablo.jpg"
            className="profile-image2"
          />
          {/* social media account */}
          <div className="profile-container04">
            {/* twitter pablo*/}
            <div className="profile-container05">
              <div className="home-container40">
                <a href="https://twitter.com/imszmc?lang=en">
                  <svg viewBox="0 0 950.8571428571428 1024" className="home-icon33">
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                </a>
              </div>
            </div>
            {/* facebook */}
            <div className="profile-container05">
              <div className="home-container41">
                <a href="https://web.facebook.com/paulo.nase">
                  <svg viewBox="0 0 1024 1024" className="home-icon35">
                      <path d="M783.104 239.957c-74.667-74.283-165.888-111.957-271.104-111.957-106.197 0-197.675 37.717-271.915 112-74.368 74.283-112.085 165.845-112.085 272 0 105.173 37.675 196.395 111.957 271.104 74.283 74.923 165.803 112.896 272.043 112.896 105.259 0 196.48-37.973 271.189-112.768 74.88-74.795 112.811-166.059 112.811-271.232 0-106.155-37.973-197.717-112.896-272.043zM722.859 722.901c-48.512 48.597-103.936 76.288-168.192 84.693v-210.261h85.333v-85.333h-85.333v-59.733c0-14.123 11.477-25.6 25.643-25.6h59.691v-85.333h-59.605c-31.659 0-58.069 11.648-79.232 35.072-21.163 23.339-31.829 51.84-31.829 85.675v49.92h-85.333v85.333h85.333v210.347c-64.939-8.32-120.576-36.053-168.832-84.651-58.667-59.051-87.168-128.085-87.168-211.029 0-83.883 28.459-153.088 87.125-211.627 58.453-58.581 127.659-87.040 211.541-87.040 82.987 0 151.979 28.501 210.987 87.168 59.008 58.539 87.68 127.744 87.68 211.499 0 82.816-28.715 151.851-87.808 210.901z"></path>
                    </svg>
                  </a>
              </div>
            </div>
            {/* insta */}
            <div className="profile-container05">
              <div className="home-container43">
                <a href="https://twitter.com/imszmc?lang=en">
                  <svg viewBox="0 0 877.7142857142857 1024" className="home-icon39">
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </a>
              </div>
            </div>
          </div> 
          {/* social media close div */}
        </div>
        <div className="profile-container06">
        
          <h3 className="profile-text Text2XL" >John Paulo Nase</h3>
          <div className="profile-container07">
            <svg viewBox="0 0 1024 1024" className="profile-icon">
              <path d="M512 490q44 0 75-31t31-75-31-75-75-31-75 31-31 75 31 75 75 31zM512 86q124 0 211 87t87 211q0 62-31 142t-75 150-87 131-73 97l-32 34q-12-14-32-37t-72-92-91-134-71-147-32-144q0-124 87-211t211-87z"></path>
            </svg>
            <span className="profile-text1 TextSM">
             Imus, Cavite, Philippines
            </span>
          </div>
          <div className="profile-container08">
            <svg viewBox="0 0 1024 1024" className="profile-icon2">
              <path d="M810.667 213.333h-597.333l64-85.333h469.333zM929.877 230.059l-127.744-170.325c-8.363-11.136-21.077-17.024-34.133-17.067h-512c-13.909 0-26.283 6.656-34.133 17.067l-127.744 170.325c-1.835 2.389-3.456 5.035-4.736 7.808-2.773 5.803-4.096 12.032-4.053 18.133v597.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h597.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-597.333c0-9.344-3.029-18.005-8.064-24.96-0.171-0.213-0.299-0.427-0.469-0.64zM170.667 298.667h682.667v554.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-597.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165zM640 426.667c0 35.371-14.293 67.285-37.504 90.496s-55.125 37.504-90.496 37.504-67.285-14.293-90.496-37.504-37.504-55.125-37.504-90.496c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667c0 58.88 23.936 112.299 62.464 150.869s91.989 62.464 150.869 62.464 112.299-23.936 150.869-62.464 62.464-91.989 62.464-150.869c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"></path>
            </svg>
            <span className="profile-text2 TextSM">
            Leader, Main Rapper, Lead Vocalist
            </span>
          </div>
          <div className="profile-container09">
            <div className="profile-container10">
              <svg
                viewBox="0 0 1097.142857142857 1024"
                className="profile-icon4"
              >
                <path d="M548.571 0l548.571 219.429v73.143h-73.143c0 20-17.714 36.571-39.429 36.571h-872c-21.714 0-39.429-16.571-39.429-36.571h-73.143v-73.143zM146.286 365.714h146.286v438.857h73.143v-438.857h146.286v438.857h73.143v-438.857h146.286v438.857h73.143v-438.857h146.286v438.857h33.714c21.714 0 39.429 16.571 39.429 36.571v36.571h-950.857v-36.571c0-20 17.714-36.571 39.429-36.571h33.714v-438.857zM1057.714 914.286c21.714 0 39.429 16.571 39.429 36.571v73.143h-1097.143v-73.143c0-20 17.714-36.571 39.429-36.571h1018.286z"></path>
              </svg>
              <span className="profile-text3 TextSM">
              Bachelor of Arts in English degree from the Polytechnic University of the Philippines.
              </span>
            </div>
          </div>
          <div className="profile-container11"></div>
          <span className="profile-text4">
            <span className="profile-text5">
            I want someone who is dedicated and very passionate about what they do. I want someone who is understanding because this industry will be taking up so much of my time.
            {/* <br></br>
           - I want someone who is dedicated and very passionate about what they do. I want someone who is understanding because this industry will be taking up so much of my time. */}

            </span>
          </span>
          <span >
            <div className="profile-text0">
          - His representative color is Purple (based on Alab (Burning) MV).<br></br>
          - He trained for the longest.<br></br>
          - Hobbies: Compose/Write Songs<br></br>
          - Pablo is the main composer and writer of their songs.<br></br>
          - His music inspiration is G-Dragon.<br></br>
          - His Filipino music inspiration is Loonie and Gloc-9.<br></br>
          - In the past he worked as a call center agent and a data analyst.<br></br>
          - His Filipino celebrity crush is Nadine Lustre.<br></br>
          - He loves hotdogs.<br></br>
          - He currently has braces.<br></br>
          - He is the most romantic member.<br></br>
          - He used to be apart of basketball varsity in high school as the point guard.<br></br>
          - He loves sour food.<br></br>
          - He loves reading books.<br></br>
          - His favourite author is Neil Gaiman.<br></br>
          - His favourite book is Smoke and Mirrors.<br></br>
          - His favourite Korean food is gungjatang.<br></br>
          - He was the part of PHP.<br></br>
          - He changed his stage name from Sejun to Pablo<br></br>
          </div>
          </span>
        </div>
      </div>
      {/* close div for pablo */}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

{/* josh */}
      <div className="profile-container01">
        <div className="profile-container02">
          <div className="profile-container03">
 
            <Counter type="Youtube" number="222k"></Counter>
            <Counter type="Instagram" number="422k"></Counter> 
            <Counter type="Twitter" number="351.4k"></Counter> 
            <Counter type="Tiktok" number="885k"></Counter> 

          </div>
          <img
           id="josh-id"
            alt="image"
            src="/playground_assets/josh.jpg"
            className="profile-image2"
          />
          <div className="profile-container04">
            {/* twitter josh*/}
            <div className="profile-container05">
              <div className="home-container40">
                <a href="https://twitter.com/JoshCullen_s">
                  <svg viewBox="0 0 950.8571428571428 1024" className="home-icon33">
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                </a>
              </div>
            </div>
            {/* facebook */}
            <div className="profile-container05">
              <div className="home-container41">
                <a href="https://web.facebook.com/JoshCullen22">
                  <svg viewBox="0 0 1024 1024" className="home-icon35">
                      <path d="M783.104 239.957c-74.667-74.283-165.888-111.957-271.104-111.957-106.197 0-197.675 37.717-271.915 112-74.368 74.283-112.085 165.845-112.085 272 0 105.173 37.675 196.395 111.957 271.104 74.283 74.923 165.803 112.896 272.043 112.896 105.259 0 196.48-37.973 271.189-112.768 74.88-74.795 112.811-166.059 112.811-271.232 0-106.155-37.973-197.717-112.896-272.043zM722.859 722.901c-48.512 48.597-103.936 76.288-168.192 84.693v-210.261h85.333v-85.333h-85.333v-59.733c0-14.123 11.477-25.6 25.643-25.6h59.691v-85.333h-59.605c-31.659 0-58.069 11.648-79.232 35.072-21.163 23.339-31.829 51.84-31.829 85.675v49.92h-85.333v85.333h85.333v210.347c-64.939-8.32-120.576-36.053-168.832-84.651-58.667-59.051-87.168-128.085-87.168-211.029 0-83.883 28.459-153.088 87.125-211.627 58.453-58.581 127.659-87.040 211.541-87.040 82.987 0 151.979 28.501 210.987 87.168 59.008 58.539 87.68 127.744 87.68 211.499 0 82.816-28.715 151.851-87.808 210.901z"></path>
                    </svg>
                  </a>
              </div>
            </div>
            {/* insta */}
            <div className="profile-container05">
              <div className="home-container43">
                <a href="https://www.instagram.com/josh_cullen_s/">
                  <svg viewBox="0 0 877.7142857142857 1024" className="home-icon39">
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </a>
              </div>
            </div>
          </div> 
          {/* social media close div */}
        </div>
        <div className="profile-container06">
          <h3 className="profile-text Text2XL">Josh Cullen Santos</h3>
          <div className="profile-container07">
            <svg viewBox="0 0 1024 1024" className="profile-icon">
              <path d="M512 490q44 0 75-31t31-75-31-75-75-31-75 31-31 75 31 75 75 31zM512 86q124 0 211 87t87 211q0 62-31 142t-75 150-87 131-73 97l-32 34q-12-14-32-37t-72-92-91-134-71-147-32-144q0-124 87-211t211-87z"></path>
            </svg>
            <span className="profile-text1 TextSM">
            Pasig City, Philippines
            </span>
          </div>
          <div className="profile-container08">
            <svg viewBox="0 0 1024 1024" className="profile-icon2">
              <path d="M810.667 213.333h-597.333l64-85.333h469.333zM929.877 230.059l-127.744-170.325c-8.363-11.136-21.077-17.024-34.133-17.067h-512c-13.909 0-26.283 6.656-34.133 17.067l-127.744 170.325c-1.835 2.389-3.456 5.035-4.736 7.808-2.773 5.803-4.096 12.032-4.053 18.133v597.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h597.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-597.333c0-9.344-3.029-18.005-8.064-24.96-0.171-0.213-0.299-0.427-0.469-0.64zM170.667 298.667h682.667v554.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-597.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165zM640 426.667c0 35.371-14.293 67.285-37.504 90.496s-55.125 37.504-90.496 37.504-67.285-14.293-90.496-37.504-37.504-55.125-37.504-90.496c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667c0 58.88 23.936 112.299 62.464 150.869s91.989 62.464 150.869 62.464 112.299-23.936 150.869-62.464 62.464-91.989 62.464-150.869c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"></path>
            </svg>
            <span className="profile-text2 TextSM">
            Lead Rapper, Lead Dancer, Sub-Vocalist, Eldest
            </span>
          </div>
          <div className="profile-container09">
            <div className="profile-container10">
              <svg
                viewBox="0 0 1097.142857142857 1024"
                className="profile-icon4"
              >
                <path d="M548.571 0l548.571 219.429v73.143h-73.143c0 20-17.714 36.571-39.429 36.571h-872c-21.714 0-39.429-16.571-39.429-36.571h-73.143v-73.143zM146.286 365.714h146.286v438.857h73.143v-438.857h146.286v438.857h73.143v-438.857h146.286v438.857h73.143v-438.857h146.286v438.857h33.714c21.714 0 39.429 16.571 39.429 36.571v36.571h-950.857v-36.571c0-20 17.714-36.571 39.429-36.571h33.714v-438.857zM1057.714 914.286c21.714 0 39.429 16.571 39.429 36.571v73.143h-1097.143v-73.143c0-20 17.714-36.571 39.429-36.571h1018.286z"></path>
              </svg>
              <span className="profile-text3 TextSM">
              Didn’t take college, but took an acceleration test for a high school diploma.
              </span>
            </div>
          </div>
          <div className="profile-container11"></div>
          <span className="profile-text4">
            <span className="profile-text5">
            I don’t have a preference, I appreciate all kinds of beauty. What’s important to me is someone who is open-minded and easy to talk too/connect with for a better understanding when there are problems
            </span>
          </span>
          <span >
            <div className="profile-text0">
            - He’s the eldest member.<br></br>
            - Worked as a computer technician and a call center agent.<br></br>
            - His representative color is Red; [based on Alab (Burning) MV]<br></br>
            - He loves playing video games.<br></br>
            - Hobbies: Dance, Play mobile/PC games<br></br>
            - His music inspiration is G-Dragon and BTS.<br></br>
            - His Filipino music inspiration is Loonie, Gloc-9, Shanti Dope and Smugglaz.<br></br>
            - His Filipino celebrity crush is Liza Soberano.<br></br>
            - Josh is a fan of TWICE and his bias is Sana.<br></br>
            - He and Stell used to be in a dancer cover group called SE-EON and they won 7 competitions.<br></br>
            - He and Justin have also been members of a Kpop cover group called Zero To Hero (Z2H).<br></br>
            - He revealed that he and the other members train their vocal and danceability 9 hours each day with only a 1-day break each week.<br></br>
            - He admitted he’s the most sleepy member.<br></br>
            - He currently has braces<br></br>
            - He won first place for Dance Dance Revolution regionals before.<br></br>
            - He cannot swim.<br></br>
            - He snores so loudly the other members can’t sleep.
          </div>
          </span>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

{/* stell profile*/}
      <div className="profile-container01">
        <div className="profile-container02">
          <div className="profile-container03">
 
          
            <Counter type="Youtube" number="141k"></Counter>
            <Counter type="Instagram" number="376k"></Counter> 
            <Counter type="Twitter" number="340.5k"></Counter> 
            <Counter type="Tiktok" number="1.6M"></Counter> 

          </div>
          <img
           id="stell-id"
            alt="image"
            src="/playground_assets/stell.jpg"
            className="profile-image2"
          />
          <div className="profile-container04">
            {/* twitter stell*/}
            <div className="profile-container05">
              <div className="home-container40">
                <a href="https://twitter.com/stellajero_">
                  <svg viewBox="0 0 950.8571428571428 1024" className="home-icon33">
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                </a>
              </div>
            </div>
            {/* facebook */}
            <div className="profile-container05">
              <div className="home-container41">
                <a href="https://web.facebook.com/vesterplays">
                  <svg viewBox="0 0 1024 1024" className="home-icon35">
                      <path d="M783.104 239.957c-74.667-74.283-165.888-111.957-271.104-111.957-106.197 0-197.675 37.717-271.915 112-74.368 74.283-112.085 165.845-112.085 272 0 105.173 37.675 196.395 111.957 271.104 74.283 74.923 165.803 112.896 272.043 112.896 105.259 0 196.48-37.973 271.189-112.768 74.88-74.795 112.811-166.059 112.811-271.232 0-106.155-37.973-197.717-112.896-272.043zM722.859 722.901c-48.512 48.597-103.936 76.288-168.192 84.693v-210.261h85.333v-85.333h-85.333v-59.733c0-14.123 11.477-25.6 25.643-25.6h59.691v-85.333h-59.605c-31.659 0-58.069 11.648-79.232 35.072-21.163 23.339-31.829 51.84-31.829 85.675v49.92h-85.333v85.333h85.333v210.347c-64.939-8.32-120.576-36.053-168.832-84.651-58.667-59.051-87.168-128.085-87.168-211.029 0-83.883 28.459-153.088 87.125-211.627 58.453-58.581 127.659-87.040 211.541-87.040 82.987 0 151.979 28.501 210.987 87.168 59.008 58.539 87.68 127.744 87.68 211.499 0 82.816-28.715 151.851-87.808 210.901z"></path>
                    </svg>
                  </a>
              </div>
            </div>
            {/* insta */}
            <div className="profile-container05">
              <div className="home-container43">
                <a href="https://www.instagram.com/stell16_/">
                  <svg viewBox="0 0 877.7142857142857 1024" className="home-icon39">
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </a>
              </div>
            </div>
          </div> 
          {/* social media close div */}
        </div>
        <div className="profile-container06">
          <h3 className="profile-text Text2XL">Stellvester Ajero</h3>
          <div className="profile-container07">
            <svg viewBox="0 0 1024 1024" className="profile-icon">
              <path d="M512 490q44 0 75-31t31-75-31-75-75-31-75 31-31 75 31 75 75 31zM512 86q124 0 211 87t87 211q0 62-31 142t-75 150-87 131-73 97l-32 34q-12-14-32-37t-72-92-91-134-71-147-32-144q0-124 87-211t211-87z"></path>
            </svg>
            <span className="profile-text1 TextSM">
            Las Piñas City, Philippines.
            </span>
          </div>
          <div className="profile-container08">
            <svg viewBox="0 0 1024 1024" className="profile-icon2">
              <path d="M810.667 213.333h-597.333l64-85.333h469.333zM929.877 230.059l-127.744-170.325c-8.363-11.136-21.077-17.024-34.133-17.067h-512c-13.909 0-26.283 6.656-34.133 17.067l-127.744 170.325c-1.835 2.389-3.456 5.035-4.736 7.808-2.773 5.803-4.096 12.032-4.053 18.133v597.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h597.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-597.333c0-9.344-3.029-18.005-8.064-24.96-0.171-0.213-0.299-0.427-0.469-0.64zM170.667 298.667h682.667v554.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-597.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165zM640 426.667c0 35.371-14.293 67.285-37.504 90.496s-55.125 37.504-90.496 37.504-67.285-14.293-90.496-37.504-37.504-55.125-37.504-90.496c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667c0 58.88 23.936 112.299 62.464 150.869s91.989 62.464 150.869 62.464 112.299-23.936 150.869-62.464 62.464-91.989 62.464-150.869c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"></path>
            </svg>
            <span className="profile-text2 TextSM">
            Main Vocalist, Lead Dancer
            </span>
          </div>
          <div className="profile-container09">
            <div className="profile-container10">
              <svg
                viewBox="0 0 1097.142857142857 1024"
                className="profile-icon4"
              >
                <path d="M548.571 0l548.571 219.429v73.143h-73.143c0 20-17.714 36.571-39.429 36.571h-872c-21.714 0-39.429-16.571-39.429-36.571h-73.143v-73.143zM146.286 365.714h146.286v438.857h73.143v-438.857h146.286v438.857h73.143v-438.857h146.286v438.857h73.143v-438.857h146.286v438.857h33.714c21.714 0 39.429 16.571 39.429 36.571v36.571h-950.857v-36.571c0-20 17.714-36.571 39.429-36.571h33.714v-438.857zM1057.714 914.286c21.714 0 39.429 16.571 39.429 36.571v73.143h-1097.143v-73.143c0-20 17.714-36.571 39.429-36.571h1018.286z"></path>
              </svg>
              <span className="profile-text3 TextSM">
              Hotel and Restaurant Management (STI College)
              </span>
            </div>
          </div>
          <div className="profile-container11"></div>
          <span className="profile-text4">
            <span className="profile-text5">
            I don’t look at appearances. For me, if we come to a mutual understanding that we both like each other, that’s all it takes. If I were to have a future girlfriend, it’d be someone like my mum who is caring.
            </span>
          </span>
          <span >
            <div className="profile-text0">
            - While he was student, he used worked at a fast food chain.<br></br>
            - His representative color is Yellow; [based on Alab (Burning) MV]<br></br>
            - Stell in the main choreographer of the group.<br></br>
            - He loves cooking.<br></br>
            - He loves going on bike rides.<br></br>
            - His music inspiration is VIXX.<br></br>
            - His Filipino music inspiration is Jed Madela and Morissette Amon.<br></br>
            - Stell’s TWICE bias is Jihyo. (Twitter Menpa)<br></br>
            - His Filipino celebrity crush is Toni Gonzaga and Mariz Racal.<br></br>
            - He and Josh used to be in a dancer cover group called ‘SE-EON’ and they won 7 competitions.<br></br>
            - He has a stuffed toy monkey named ‘Tokki’.<br></br>
            - He likes to tease the other members.<br></br>
            - He is good at impersonating, can do the Mimiyuuuh impression.<br></br>
            - He hates peanut as a spreading but loves it in kare-kare.<br></br>
            - He’s a choir member for a church and is the only boy soprano. (highest singing voice)<br></br>
            - His family calls him TayTay man.<br></br>
            - He currently has braces<br></br>
            - He’s afraid of ghosts.<br></br>
          </div>
          </span>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

{/* ken */}
      <div className="profile-container01">
        <div className="profile-container02">
          <div className="profile-container03">
 
          
            <Counter type="Youtube" number="227k"></Counter>
            <Counter type="Instagram" number="396k"></Counter> 
            <Counter type="Twitter" number="331.6k"></Counter> 
            <Counter type="Tiktok" number="790.2k"></Counter> 

          </div>
          <img
           id="ken-id"
            alt="image"
            src="/playground_assets/ken.jpg"
            className="profile-image2"
          />
          <div className="profile-container04">
            {/* twitter ken*/}
            <div className="profile-container05">
              <div className="home-container40">
                <a href="https://twitter.com/felipsuperior">
                  <svg viewBox="0 0 950.8571428571428 1024" className="home-icon33">
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                </a>
              </div>
            </div>
            {/* facebook */}
            <div className="profile-container05">
              <div className="home-container41">
                <a href="https://web.facebook.com/felipsuperior">
                  <svg viewBox="0 0 1024 1024" className="home-icon35">
                      <path d="M783.104 239.957c-74.667-74.283-165.888-111.957-271.104-111.957-106.197 0-197.675 37.717-271.915 112-74.368 74.283-112.085 165.845-112.085 272 0 105.173 37.675 196.395 111.957 271.104 74.283 74.923 165.803 112.896 272.043 112.896 105.259 0 196.48-37.973 271.189-112.768 74.88-74.795 112.811-166.059 112.811-271.232 0-106.155-37.973-197.717-112.896-272.043zM722.859 722.901c-48.512 48.597-103.936 76.288-168.192 84.693v-210.261h85.333v-85.333h-85.333v-59.733c0-14.123 11.477-25.6 25.643-25.6h59.691v-85.333h-59.605c-31.659 0-58.069 11.648-79.232 35.072-21.163 23.339-31.829 51.84-31.829 85.675v49.92h-85.333v85.333h85.333v210.347c-64.939-8.32-120.576-36.053-168.832-84.651-58.667-59.051-87.168-128.085-87.168-211.029 0-83.883 28.459-153.088 87.125-211.627 58.453-58.581 127.659-87.040 211.541-87.040 82.987 0 151.979 28.501 210.987 87.168 59.008 58.539 87.68 127.744 87.68 211.499 0 82.816-28.715 151.851-87.808 210.901z"></path>
                    </svg>
                  </a>
              </div>
            </div>
            {/* insta */}
            <div className="profile-container05">
              <div className="home-container43">
                <a href="https://www.instagram.com/keunsnsn/">
                  <svg viewBox="0 0 877.7142857142857 1024" className="home-icon39">
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </a>
              </div>
            </div>
          </div> 
          {/* social media close div */}
        </div>
        <div className="profile-container06">
        <div id="ken">
          <h3 className="profile-text Text2XL">Felip Jhon Suson</h3>
          </div>
          <div className="profile-container07">
            <svg viewBox="0 0 1024 1024" className="profile-icon">
              <path d="M512 490q44 0 75-31t31-75-31-75-75-31-75 31-31 75 31 75 75 31zM512 86q124 0 211 87t87 211q0 62-31 142t-75 150-87 131-73 97l-32 34q-12-14-32-37t-72-92-91-134-71-147-32-144q0-124 87-211t211-87z"></path>
            </svg>
            <span className="profile-text1 TextSM">
            Pagadian City, Zamboanga del Sur, Philippines
            </span>
          </div>
          <div className="profile-container08">
            <svg viewBox="0 0 1024 1024" className="profile-icon2">
              <path d="M810.667 213.333h-597.333l64-85.333h469.333zM929.877 230.059l-127.744-170.325c-8.363-11.136-21.077-17.024-34.133-17.067h-512c-13.909 0-26.283 6.656-34.133 17.067l-127.744 170.325c-1.835 2.389-3.456 5.035-4.736 7.808-2.773 5.803-4.096 12.032-4.053 18.133v597.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h597.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-597.333c0-9.344-3.029-18.005-8.064-24.96-0.171-0.213-0.299-0.427-0.469-0.64zM170.667 298.667h682.667v554.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-597.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165zM640 426.667c0 35.371-14.293 67.285-37.504 90.496s-55.125 37.504-90.496 37.504-67.285-14.293-90.496-37.504-37.504-55.125-37.504-90.496c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667c0 58.88 23.936 112.299 62.464 150.869s91.989 62.464 150.869 62.464 112.299-23.936 150.869-62.464 62.464-91.989 62.464-150.869c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"></path>
            </svg>
            <span className="profile-text2 TextSM">
            Main Dancer, Lead Vocalist, Lead Rapper
            </span>
          </div>
          <div className="profile-container09">
            <div className="profile-container10">
              <svg
                viewBox="0 0 1097.142857142857 1024"
                className="profile-icon4"
              >
                <path d="M548.571 0l548.571 219.429v73.143h-73.143c0 20-17.714 36.571-39.429 36.571h-872c-21.714 0-39.429-16.571-39.429-36.571h-73.143v-73.143zM146.286 365.714h146.286v438.857h73.143v-438.857h146.286v438.857h73.143v-438.857h146.286v438.857h73.143v-438.857h146.286v438.857h33.714c21.714 0 39.429 16.571 39.429 36.571v36.571h-950.857v-36.571c0-20 17.714-36.571 39.429-36.571h33.714v-438.857zM1057.714 914.286c21.714 0 39.429 16.571 39.429 36.571v73.143h-1097.143v-73.143c0-20 17.714-36.571 39.429-36.571h1018.286z"></path>
              </svg>
              <span className="profile-text3 TextSM">
              Architecture student (Technological Institute of the Philippines)
              </span>
            </div>
          </div>
          <div className="profile-container11"></div>
          <span className="profile-text4">
            <span className="profile-text5">
            For me, physical appearance doesn’t matter. I like talented, skilful and confident women. I would like someone I could dance with.
            </span>
          </span>
          <span >
            <div className="profile-text0">
            - His representative color is Black; [based on Alab (Burning) MV]<br></br>
            - He loves anime.<br></br>
            - Hobbies: Dancing, Watching anime<br></br>
            - His favourite food is chicken.<br></br>
            - He is allergic to shrimp.<br></br>
            - His music inspiration is Daniel Caesar.<br></br>
            - His Filipino music inspiration is AI James and IV of Spades.<br></br>
            - His Filipino celebrity crush is Anne Curtis.<br></br>
            - He admires Kai from EXO. (GGV interview)<br></br>
            - He loves coffee.<br></br>
            - He has the deepest voice out of all members.<br></br>
            - He admitted that he’s not very flexible.<br></br>
            - He sometimes forgets the choreography.<br></br>
            - He grew up in a church with his grandfather being the pastor.<br></br>
            - His grandparents raised him.<br></br>
            - He can dance for grades.<br></br>
            - His favorite food is chicken.<br></br>
            - His biggest fear is intense rides at the amusement parks.<br></br>
            - He prefers to be quiet during an interview not because he does not care but because he is afraid if he will say something, he likes to be careful of what will come out to his mouth.<br></br>
            - Z-Boys Josh and Ken are friends they are both used to be part of Pinoy GOT7 cover group AMIGO7 before becoming idols themselves.<br></br>
            - He is the CEO of his own clothing brand called Superiorson.<br></br>
            - On September 18, 2021 he also debuted as a soloist with the song “Palayo“, under his birth name, Felip.<br></br>
          </div>
          </span>
        </div>
      </div>


      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

{/* justin */}
      <div className="profile-container01">
        <div className="profile-container02">
          <div className="profile-container03">
 
          
            <Counter type="Youtube" number="257k"></Counter>
            <Counter type="Instagram" number="495k"></Counter> 
            <Counter type="Twitter" number="313.2k"></Counter> 
            <Counter type="Tiktok" number="1.2M"></Counter> 

          </div>
          <img
           id="justin-id"
            alt="image"
            src="/playground_assets/justin.jpg"
            className="profile-image2"
          />
          <div className="profile-container04">
            {/* twitter justin*/}
            <div className="profile-container05">
              <div className="home-container40">
                <a href="https://twitter.com/jah447798">
                  <svg viewBox="0 0 950.8571428571428 1024" className="home-icon33">
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                </a>
              </div>
            </div>
            {/* facebook */}
            <div className="profile-container05">
              <div className="home-container41">
                <a href="https://web.facebook.com/justin.dedios.07">
                  <svg viewBox="0 0 1024 1024" className="home-icon35">
                      <path d="M783.104 239.957c-74.667-74.283-165.888-111.957-271.104-111.957-106.197 0-197.675 37.717-271.915 112-74.368 74.283-112.085 165.845-112.085 272 0 105.173 37.675 196.395 111.957 271.104 74.283 74.923 165.803 112.896 272.043 112.896 105.259 0 196.48-37.973 271.189-112.768 74.88-74.795 112.811-166.059 112.811-271.232 0-106.155-37.973-197.717-112.896-272.043zM722.859 722.901c-48.512 48.597-103.936 76.288-168.192 84.693v-210.261h85.333v-85.333h-85.333v-59.733c0-14.123 11.477-25.6 25.643-25.6h59.691v-85.333h-59.605c-31.659 0-58.069 11.648-79.232 35.072-21.163 23.339-31.829 51.84-31.829 85.675v49.92h-85.333v85.333h85.333v210.347c-64.939-8.32-120.576-36.053-168.832-84.651-58.667-59.051-87.168-128.085-87.168-211.029 0-83.883 28.459-153.088 87.125-211.627 58.453-58.581 127.659-87.040 211.541-87.040 82.987 0 151.979 28.501 210.987 87.168 59.008 58.539 87.68 127.744 87.68 211.499 0 82.816-28.715 151.851-87.808 210.901z"></path>
                    </svg>
                  </a>
              </div>
            </div>
            {/* insta */}
            <div className="profile-container05">
              <div className="home-container43">
                <a href="https://www.instagram.com/jahdedios/">
                  <svg viewBox="0 0 877.7142857142857 1024" className="home-icon39">
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </a>
              </div>
            </div>
          </div> 
          {/* social media close div */}
        </div>
        <div className="profile-container06">
          <h3 className="profile-text Text2XL">Justin De Dios</h3>
          <div className="profile-container07">
            <svg viewBox="0 0 1024 1024" className="profile-icon">
              <path d="M512 490q44 0 75-31t31-75-31-75-75-31-75 31-31 75 31 75 75 31zM512 86q124 0 211 87t87 211q0 62-31 142t-75 150-87 131-73 97l-32 34q-12-14-32-37t-72-92-91-134-71-147-32-144q0-124 87-211t211-87z"></path>
            </svg>
            <span className="profile-text1 TextSM">
            Malabon, Philippines.

            </span>
          </div>
          <div className="profile-container08">
            <svg viewBox="0 0 1024 1024" className="profile-icon2">
              <path d="M810.667 213.333h-597.333l64-85.333h469.333zM929.877 230.059l-127.744-170.325c-8.363-11.136-21.077-17.024-34.133-17.067h-512c-13.909 0-26.283 6.656-34.133 17.067l-127.744 170.325c-1.835 2.389-3.456 5.035-4.736 7.808-2.773 5.803-4.096 12.032-4.053 18.133v597.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h597.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-597.333c0-9.344-3.029-18.005-8.064-24.96-0.171-0.213-0.299-0.427-0.469-0.64zM170.667 298.667h682.667v554.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-597.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165zM640 426.667c0 35.371-14.293 67.285-37.504 90.496s-55.125 37.504-90.496 37.504-67.285-14.293-90.496-37.504-37.504-55.125-37.504-90.496c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667c0 58.88 23.936 112.299 62.464 150.869s91.989 62.464 150.869 62.464 112.299-23.936 150.869-62.464 62.464-91.989 62.464-150.869c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"></path>
            </svg>
            <span className="profile-text2 TextSM">
            Sub-Vocalist, Visual, Bunso
            </span>
          </div>
          <div className="profile-container09">
            <div className="profile-container10">
              <svg
                viewBox="0 0 1097.142857142857 1024"
                className="profile-icon4"
              >
                <path d="M548.571 0l548.571 219.429v73.143h-73.143c0 20-17.714 36.571-39.429 36.571h-872c-21.714 0-39.429-16.571-39.429-36.571h-73.143v-73.143zM146.286 365.714h146.286v438.857h73.143v-438.857h146.286v438.857h73.143v-438.857h146.286v438.857h73.143v-438.857h146.286v438.857h33.714c21.714 0 39.429 16.571 39.429 36.571v36.571h-950.857v-36.571c0-20 17.714-36.571 39.429-36.571h33.714v-438.857zM1057.714 914.286c21.714 0 39.429 16.571 39.429 36.571v73.143h-1097.143v-73.143c0-20 17.714-36.571 39.429-36.571h1018.286z"></path>
              </svg>
              <span className="profile-text3 TextSM">
              Has a Multimedia Arts degree from the De La Salle - College of Saint Benilde (he graduated with honors)
              </span>
            </div>
          </div>
          <div className="profile-container11"></div>
          <span className="profile-text4">
            <span className="profile-text5">
            Maria Clara; conservative.”; He tends to like girls that he has been friends with for a long time. But for a preference, he likes girls with short hair.
            </span>
          </span>
          <span >
            <div className="profile-text0">
            - He finished his college degree (ABM Multimedia Arts) as Honorable Mention in 2018.<br></br>
            - his representative color is Green; [based on Alab (Burning) MV]<br></br>
            - Hobbies: Drawing, Dancing, Singing.<br></br>
            - He can combine study and training.<br></br>
            - His favorite number is 7, because his birthday is in July 7;<br></br>
            - He has 7 mole on his face<br></br>
            - His music inspiration is GOT7.<br></br>
            - His Filipino music inspiration is Michael Pangilinan.<br></br>
            - His Filipino celebrity crush is Sarah Geronimo and Sharlene San Pedro.<br></br>
            - Justin won the 1st place on 100 Asian Heartthrobs of 2021<br></br>
            - He is left-handed.<br></br>
            - He thinks Pablo is the best rapper in the group.<br></br>
            - He is the member that’s always on time.<br></br>
            - He taught himself how to swim when he was 9 years old.<br></br>
            -Justin and Josh have also been members of a K-pop cover group called Zero To Hero (Z2H) for sometimes.<br></br>
            - He used to have braces.<br></br>
            - He likes to catch insects from floods.<br></br>
            - He loves turtles so much that he used to own 2 but, they passed away.<br></br>
            - Justin is a fan of TWICE and his biases are Tzuyu and Sana. (Instagram Story Q&A)<br></br>
          </div>
          </span>
        </div>
      </div>




      <Footer></Footer>
    </div>
  )
}

export default Profile
