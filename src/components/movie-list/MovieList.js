import React, { Component } from "react";
import MovieElement from "./MovieElement";

export default class MovieList extends React.Component {
    render() {
        return (
             <div className="w-75 d-flex flex-row flex-wrap align-content-start">
                 <MovieElement movie={ this.props.movies[0] } updatedSelectedMovie={ this.props.updatedSelectedMovie } />
                 <MovieElement movie={ this.props.movies[1] } updatedSelectedMovie={ this.props.updatedSelectedMovie } />
                 <MovieElement movie={ this.props.movies[2] } updatedSelectedMovie={ this.props.updatedSelectedMovie } />
                 <MovieElement movie={ this.props.movies[3] } updatedSelectedMovie={ this.props.updatedSelectedMovie } />
             </div>
        );
    }
}