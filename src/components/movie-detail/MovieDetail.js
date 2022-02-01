import React, { Component } from "react";

export default class MovieDetail extends React.Component {
    render() {
        return (
            <div className="w-25 border p-4 d-flex flex-column">
                <h5>{this.props.movie.title}</h5>
                <hr className="w-100"/>
                <img src={this.props.movie.img}/>
                <hr className="w-100"/>
                <p className="text-secondary">{ this.props.movie.details }</p>         
                <span>{ this.props.movie.description }</span>
            </div>
        );
    }
}