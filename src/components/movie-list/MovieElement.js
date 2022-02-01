import React, { Component } from "react";

export default class MovieElement extends React.Component {

    mouseEnter = () => {
        this.props.updatedSelectedMovie(this.props.movie.title);
    }

    render() {
        return (
             <div onMouseEnter={ this.mouseEnter } className="w-50 p-2">
                <div className="border d-flex">
                    <img width="150" height="200" alt="anime" src={ this.props.movie.img } />
                    <div className="flex-fill d-flex flex-column p-3">
                        <h5>{ this.props.movie.title }</h5>
                        <hr className="w-100"/>
                        <span>{ this.props.movie.details }</span>
                    </div>
                </div>
             </div>
        );
    }
}