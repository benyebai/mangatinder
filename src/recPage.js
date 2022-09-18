import React from "react";
import Manga from './img/Manga.jpg'
import axios from "axios";
import './recPage.css';

class RecPage extends React.Component {
    constructor(props) {
      super(props);

      this.submit = this.submit.bind(this);
    }

    async submit(e) {
        //prevents it from refreshing the page whenever a "event" happens
        e.preventDefault();

        /*
        axios.get('https://api.pushshift.io/reddit/search/comment/?subreddit=manga&size=100')
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        */

        axios.get('https://api.pushshift.io/reddit/search/submission/?subreddit=manga&size=20&after=30d&sort=desc')
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

    }
  
    render() {
      return (
        <div className="Main"> 

            <h1>CALL OF THE NIGHT</h1>
            <div className="rec">
                <img src={Manga} width='500' />
            </div>

            <button onClick={this.submit}>
                        yes
            </button>
        </div>
      );
    }
  }
  
export default RecPage;