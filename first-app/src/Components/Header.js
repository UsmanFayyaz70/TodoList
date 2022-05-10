import React from 'react';

class Container extends React.Component{
  constructor(props){
    super(props);
    this.state = {pressed: true};
  }
  
  btnDel = () => {
    this.setState({pressed: false});
  }
  render(){
    if(this.state.pressed){
      <Header/>
    }
  }



}

class Header extends React.Component{
  //-------Mounting--------
  constructor(props){
    super(props);
    this.state={
      brand: "Samsung",
      meow: "CHECKING"
    };
  }
  btnPressed = () => {
    if(this.state.meow == "Not anymore"){
      this.setState ({
        meow :"CHECKING"
        // brand: "bekaar"
      });  
    }else{
    this.setState ({
      meow :"Not anymore",
      brand: "bekaar"
    });}
  }
  componentDidMount() {
      setTimeout(() => {
        this.setState({meow: this.props.tryout})
      }, 2000)
  }
  //-------End of Mounting--------

  //-------Updating--------

 //Before Update
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("h1").innerHTML =
    "Before the update, the favorite was " + prevState.meow;
  }
  //After update
  componentDidUpdate(){
    document.getElementById("h1").innerHTML =
    "After update , the favorite was " + this.state.meow;
  }
    render(){
      return(
        <>
        <h1>
        This is {this.state.brand}!
        </h1>
        <h2 id = "h1">
        This is {this.state.meow}
        </h2>
        {/* <button  onClick = {this.press}>Press me!</button>s */}
        </>  
      );
    }
}

export default Header;