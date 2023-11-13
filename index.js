body {
    text-align: center;
    font-family: 'Black Ops One', sans-serif;
    background-color: #b3f6d2;
    color: #05386B;
  }
  
  h1 {
    font-size: 4rem;
    margin:  2% 5% 5%;
  }
  
  p{
    line-height: 2;
  }
  
  footer {
    padding: 50px 0 5px;
  }
  
  a {
    color: #05386B;
    margin: 10px 20px;
    display: inline-block;
    text-decoration: none;
  }
  
  a::after{
    content: '';
    width: 0%;
    height: 2px;
    background: #000;
    display: block;
    margin: auto;
    transition: 0.5s;
  }
  
  a:hover::after{
    width: 100%;
  }
  
  .fa {
    padding-right: 5px;
  }
  
  #outer-circle {
    background: #05386B;
    border-radius: 50%;
    height: 500px;
    width: 500px;
    position: relative;
    border-style: solid;
    border-width: 10px;
    margin: auto;
    margin-top: 60px;
    box-shadow: 8px 8px 15px 5px #888888;
  }
  
  #inner-circle {
    position: absolute;
    background: #FFF;
    border-radius: 50%;
    height: 250px;
    width: 250px;
    border-style: solid;
    border-width: 10px;
    top: 50%;
    left: 50%;
    margin: -125px 0px 0px -125px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }
  
  #title a {
    color: blueviolet;
    font-size: 2rem;
    margin: 93px auto;
  }
  
  .btn {
    position: absolute;
    height: 250px;
    width: 250px;
    top: 50%;
    left: 50%;
    border-style: solid;
    border-width: 5px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }
  
  #yellow {
    border-radius: 250px 0 0 0;
    -moz-border-radius: 250px 0 0 0;
    -webkit-border-radius: 250px 0 0 0;
    background: yellow;
    margin: -250px 0px 0px -250px;
  }
  
  #red {
    border-radius: 0 250px 0 0;
    -moz-border-radius: 0 250px 0 0;
    -webkit-border-radius: 0 250px 0 0;
    background: red;
    margin: -250px 0px 0px 0px;
  }
  
  #blue {
    border-radius: 0 0 0 250px;
    -moz-border-radius: 0 0 0 250px;
    -webkit-border-radius: 0 0 0 250px;
    background: blue;
    margin: 0px -250px 0px -250px;
  }
  
  #green {
    border-radius: 0 0 250px 0;
    -moz-border-radius: 0 0 250px 0;
    -webkit-border-radius: 0 0 250px 0;
    background: green;
    margin: 0px 0px -250px 0px;
  }
  
  .pressed {
    box-shadow: 0 0 20px white;
    background-color: grey;
  }
  
  .game-over {
    background-color: red;
    opacity: 0.6;
  }

  .start {
    visibility: hidden;
  }
  
  @media (max-width:570px) {
    h1 {
      display: inline-block;
    }
    a {
      display: inline-block;
    }
  }

  @media (max-width:1000px) {
    .start {
        visibility: visible;
        margin-top: 50px;
        width: 80px;
        height: 30px;
        border: solid #05386B;
        border-radius: 10px;
        color: blueviolet;
        font-size: 1rem;
        font-family: 'Black Ops One', sans-serif;
    }
  }
