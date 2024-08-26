import React from 'react';
import { Carousel } from 'antd';

const contentStyle = {
  height: '400px',
  width : '98%',
  margin:'auto',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const HeroSection = () => (
  <Carousel autoplay>
    <div>
      <img style={contentStyle} src="https://img.freepik.com/free-vector/social-media-cover-template-fashion-collection-style_23-2150725037.jpg" alt="Third slide"/>
    </div>
    <div>
    <img style={contentStyle} src="https://static.vecteezy.com/system/resources/thumbnails/008/174/590/small/fashion-advertising-web-banner-illustration-vector.jpg" alt="Second slide"/>
    </div>
    <div>
    <img style={contentStyle} src="https://www.sliderrevolution.com/wp-content/uploads/2023/06/fashion-website-templates.jpg" alt="First slide"/> 
    </div>
    <div>
      <img style={contentStyle} src='https://img.freepik.com/premium-psd/fashion-sale-social-media-banner-facebook-cover-photo-design-template_613956-1005.jpg' alt='Silder Img'/>
    </div>
    <div>
      <img style={contentStyle} src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fashion-cover-banner-design-template-776890a614ef3640c1af183531d5de10_screen.jpg?ts=1640570594' alt='Silder Img'/>
    </div>
  </Carousel>
);
export default HeroSection;
