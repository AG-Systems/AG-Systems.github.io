import React from 'react';
import FadeIn from 'react-fade-in';
import $ from "jquery";
import date from 'date-and-time';
import { Link } from "react-router-dom";
import ExpandCollapse from 'react-expand-collapse';

const  DATE_DIFF = require("date-diff-js");
const hash = require('object-hash');



class Card extends React.Component {
  constructor(props)
  {
    super(props);

  }




    render() {

      const data_list = this.props.data;
      let data_cards = data_list.map(function(exp, index)
      {
        let difference_months = "";
        if(exp.date_ended == "Present")
        {
          difference_months = DATE_DIFF(exp.date_started, (new Date(new Date().getFullYear(),new Date().getMonth())).toString(), 'Year').output + 1;
        } else {
          difference_months = DATE_DIFF(exp.date_started, exp.date_ended, "Year").output + 1;
        }

        let description_content = [];
        description_content.push(<br key={ hash("desktop-" + exp.date_started + index + Math.floor(Math.random() * Math.floor(1000))) } />);
        for (let value of data_list[index].description) {
          description_content.push(<span className="dark-mode-card-desc" key={ hash("desktop-" + exp.date_ended + index + Math.floor(Math.random() * Math.floor(1000)))}> { value } </span>);
          description_content.push(<br key={ hash("desktop-" + exp.date_ended + index + Math.floor(Math.random() * Math.floor(1000))) } />);
        }
        description_content.push(<br key={ hash("desktop-" + exp.date_ended + index + Math.floor(Math.random() * Math.floor(1000))) } />);


        return (
          <div className="media mt-5" key={ hash("desktop-" + exp.date_ended + index + Math.floor(Math.random() * Math.floor(1000))) + exp.index }>
            <img src={ exp.img } className="mr-3 d-none d-lg-block" alt="..." />
            <img src={ exp.img } className="mr-3 d-lg-none" alt="..." height="45" width="45" />
            <div className="media-body border-bottom d-none d-lg-block">
              <h3 className="mt-0 dark-mode-card-title" style={{ fontSize: "1.2rem" }}>{ exp.title }</h3>
              <p style={{ fontFamily: "Titillium Web" }}>
                  <span className="dark-mode-card-sub-title" style={{ fontWeight: "400" }}>{ exp.sub_title }</span>
                  <br/>
                  <span className="dark-mode-card-detail" style={{ color: "rgba(0, 0, 0, 0.6)" }} > { exp.date_started } - { exp.date_ended } • { difference_months } Years </span>
                  <br/>
                  <span className="dark-mode-card-detail" style={{ color: "rgba(0, 0, 0, 0.6)" }}> { exp.location } </span>
              </p>
              <span>
                { description_content }
              </span>
            </div>
            <div className="media-body border-bottom d-lg-none">
              <h3 className="mt-0 dark-mode-card-title" style={{ fontSize: "16px", fontWeight: "600" }}>{ exp.title }</h3>
              <p style={{ fontFamily: "Titillium Web" }}>
                  <span className="dark-mode-card-sub-title" style={{ fontWeight: 400, fontSize: "14px" }}>{ exp.sub_title }</span>
                  <br/>
                  <span className="dark-mode-card-detail" style={{fontSize: "13px", fontWeight: 500, color: "rgba(0, 0, 0, 0.6)" }}> { exp.date_started } - { exp.date_ended } • { difference_months } Years </span>
                  <br/>
                  <span className="dark-mode-card-detail" style={{ fontSize: "13px", fontWeight: 500, color: "rgba(0, 0, 0, 0.6)" }}> { exp.location } </span>
              </p>
              <span hidden={ data_list[index].description.length === 0 } style={{ fontSize: "12px" }}>
              <ExpandCollapse
                previewHeight="88px"
                expandText="more"
                collapse={false}
                >
                  { description_content }
              </ExpandCollapse>


              </span>
            </div>
          </div>
        );

      });

      return (
          data_cards
      );
    }
}

export default Card;
