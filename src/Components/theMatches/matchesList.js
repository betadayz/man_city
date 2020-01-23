import React, { Component } from 'react'

export default class MatchesList extends Component {

    state = {
        matcheslist: []
    }

    static static getDerivedStateFromProps(props, state) {
        return state = {
            matcheslist: props.matches
        }
    }
    render() {
        console.log(this.props)
        return (
            <div>
                
            </div>
        )
    }
}
