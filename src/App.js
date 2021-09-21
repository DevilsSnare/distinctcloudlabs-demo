import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="sidebar"></div>
      <div className="main">
        <div className="header">
          <div className="title">Advisor Details</div>
          <div className="sub-title">Sub Header</div>
        </div>
        <div className="options">
          <div className="options-title">
            <div className="opt-inline hlight">Performance</div>
            <div className="opt-inline">Advices</div>
            <div className="opt-inline">Performance</div>
            <div className="opt-inline">Reviews</div>
          </div>
          <div className="options-clicked">
            <div className="header">
              <div className="advisor">
                <div className="advisor-photo">
                  <div className="circle"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg></div></div>
                <div className="advisor-name">Manish Gautam<div className="span">16208 followers</div></div>
              </div>
              <div className="rating-follow">
                <div className="rating">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                </div>
                <button className="follow">Follow</button>
              </div>
            </div>
            <div className="details">
              XXX is an expert SEBI registered research analyst with an MBA in Finance and a Six Sigma Master Black Belt. A technical analyst by passion and profession - XXX loves to analyze and trade famous Gann Trading techniques. He delivers insights and analysis of capital markets, especially Nifty and Bank Nifty and specialized in wealth creation, portfolio management and investment advisory.
            </div>
          </div>
        </div>
        <div className="content-box-left"></div>
        <div className="content-box-right"></div>
        <div className="advices-title">Recent Advices</div>
        <div className="advices">
          <div className="advices-menu-block1"></div>
          <div className="advices-menu-block2"></div>
          <div className="advices-menu-block3"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
