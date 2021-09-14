import { Component } from 'react';

class Main extends Component{
  render() {
    return (
    <>
    <HornedBeast title={'The Beast'} imageURL={'https://upload.wikimedia.org/wikipedia/en/4/4a/Disney-beast.PNG'} description={'He\'s no monster, Gaston. <b>You</b> are!'}/>
    <HornedBeast title={'Mr. Narwhal'} imageURL={'https://image.pngaaa.com/515/2033515-middle.png'} description={"Bye Buddy! Hope you fine your dad!"}/>
    </>
    )
  }
};


class HornedBeast extends Component {
  render() {
    return (
    <> 
      <h2>{this.props.title}</h2>
      <img src={this.props.imageURL} alt='horned beast' title="They horned."></img>
      <p>{this.props.description}</p>
    </>
    )
  }
};

export default Main;