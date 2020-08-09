import React, { Component } from 'react'

class WithTogleId extends React.Component{
    state={
        openId = false
    }
    toggle = id => this.setState( ({openId}) => ({
        openId: openId === id ? null : id 
    }))
    render() {
        return( <Component {...this.props} {...this.state} toggle={this.toggle} />)
    }
} 
