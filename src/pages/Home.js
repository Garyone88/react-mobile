import React,{ Component,Fragment } from 'react';

import { Carousel } from 'antd-mobile';
import { getGoods } from '../api';

class Home extends React.Component {
  state = {
    sliderlist: [],
    imgHeight: 176,
  }
  componentDidMount() {
    getGoods()
    .then(res=>{
        console.log(res);
        // let {sliderlist} = res.message
        if(res.status === 0){
            this.setState({
                sliderlist:res.message.sliderlist
            })
        }
    })
    
  }
  render() {
    return (
        <Carousel
          autoplay
          infinite
        >
          {this.state.sliderlist.map(val => (
            <a
              key={val.id}
              href="#"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={val.img_url}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
    );
  }
}
 
export default Home;