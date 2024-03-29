import React from 'react'

import PropTypes from 'prop-types'

import './article-card.css'

const ArticleCard = (props) => {
  return (
    <div className="article-card-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="article-card-image"
      />
      <div className="article-card-container1">
        <h3 className="article-card-text Healine">{props.new_prop}</h3>
        <div className="article-card-container2">
          <span className="article-card-text1">{props.description}</span>
        </div>
        <div className="article-card-container3">
          <img
            alt={props.avatar_alt}
            src={props.avatar_src}
            className="article-card-image1"
          />
          <div className="article-card-container4">
            <span className="article-card-text2">{props.name}</span>
            <div className="article-card-container5">
              <span className="article-card-text3 TextSM">{props.time}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ArticleCard.defaultProps = {
  avatar_src: '/playground_assets/jac.jpg',
  name: 'Jacqueline Porral',
  new_prop: '',
  image_src: '/playground_assets/jac.jpg',
  time: 'BS in Computer Science',
  avatar_alt: 'avatar',
  description:
    "A 22 years old Aspiring Backend Developer, Leader and Programmer, currently a student at the University of Caloocan City - North Campus. Have an experience in Javascript, PHP, Dart, C# and VB.Net languages aside from that she also know NOSQL and SQL which is Firebase and mySQL. ",
  image_alt: 'image',
}

ArticleCard.propTypes = {
  avatar_src: PropTypes.string,
  name: PropTypes.string,
  new_prop: PropTypes.string,
  image_src: PropTypes.string,
  time: PropTypes.string,
  avatar_alt: PropTypes.string,
  description: PropTypes.string,
  image_alt: PropTypes.string,
}

export default ArticleCard
