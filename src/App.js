import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';
// import Dough from './dough';
// import Bar from './bar';


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
                <button type="button" className="btn btn-primary follow">Primary</button>
                {/* <button className="follow">Follow</button> */}
              </div>
            </div>
            <div className="details">
              XXX is an expert SEBI registered research analyst with an MBA in Finance and a Six Sigma Master Black Belt. A technical analyst by passion and profession - XXX loves to analyze and trade famous Gann Trading techniques. He delivers insights and analysis of capital markets, especially Nifty and Bank Nifty and specialized in wealth creation, portfolio management and investment advisory.
            </div>
          </div>
        </div>
        <div className="content-box-left">
          <div className="dropdown">
            <Dropdown>
              <Dropdown.Toggle variant="success" className="btn-sm btn-light dropdown-button">
                1 month
              </Dropdown.Toggle >
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">1 year</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="doughnut">
            <span className="glyphicon glyphicon-chevron-right"></span>
          </div>
          <div className="horizontal-bar">
          </div>
        </div>
        <div className="content-box-right"></div>
        <div className="advices-title">Recent Advices</div>
        <div className="advices">
          <div className="advices-menu-block1 advices-menu-block-in-css">
            <div className="flex-1">
              <div className="bank-nifty-trade">Bank Nifty Trade</div>
              <button type="button" class="btn btn-primary more-button">More <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg></button>
            </div>
            <div className="flex-2">
              <div className="entry">Entry Open</div>
              <div className="prediction"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z" />
              </svg>Prediction: Up</div>
            </div>
            <div className="flex-3 flex-bottom-content">
              <div className="left-head">Buy Range</div>
              <div className="right-value">Rs 805 - Rs 814</div>
            </div>
            <div className="flex-4 flex-bottom-content">
              <div className="left-head">Stop Loss</div>
              <div className="right-value">~4% Rs 798</div>
            </div>
            <div className="flex-5 flex-bottom-content">
              <div className="left-head">Take Profit</div>
              <div className="right-value">~11% Rs 895</div>
            </div>
          </div>
          <div className="advices-menu-block2 advices-menu-block-in-css">
            <div className="flex-1">
              <div className="bank-nifty-trade">Bank Nifty Trade</div>
              <button type="button" class="btn btn-primary more-button">More <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg></button>
            </div>
            <div className="flex-2">
              <div className="entry">Entry Open</div>
              <div className="prediction"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z" />
              </svg>Prediction: Up</div>
            </div>
            <div className="flex-3 flex-bottom-content">
              <div className="left-head">Buy Range</div>
              <div className="right-value">Rs 805 - Rs 814</div>
            </div>
            <div className="flex-4 flex-bottom-content">
              <div className="left-head">Stop Loss</div>
              <div className="right-value">~4% Rs 798</div>
            </div>
            <div className="flex-5 flex-bottom-content">
              <div className="left-head">Take Profit</div>
              <div className="right-value">~11% Rs 895</div>
            </div>
          </div>
          <div className="advices-menu-block3 advices-menu-block-in-css">
            <div className="flex-1">
              <div className="bank-nifty-trade">Bank Nifty Trade</div>
              <button type="button" class="btn btn-primary more-button">More <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg></button>
            </div>
            <div className="flex-2">
              <div className="entry">Entry Open</div>
              <div className="prediction"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z" />
              </svg>Prediction: Up</div>
            </div>
            <div className="flex-3 flex-bottom-content">
              <div className="left-head">Buy Range</div>
              <div className="right-value">Rs 805 - Rs 814</div>
            </div>
            <div className="flex-4 flex-bottom-content">
              <div className="left-head">Stop Loss</div>
              <div className="right-value">~4% Rs 798</div>
            </div>
            <div className="flex-5 flex-bottom-content">
              <div className="left-head">Take Profit</div>
              <div className="right-value">~11% Rs 895</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
