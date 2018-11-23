import React from 'react'
import { connect } from 'react-redux'
import { ping } from './actions/index'
import { hot } from 'react-hot-loader'

class App extends React.Component {

    constructor(props) {
        super(props)
        this.pingClickHandler = this.pingClickHandler.bind(this)
    }

    pingClickHandler() {
        this.props.ping()
    }

    render() {

        console.log('Is it rendering again? ', this.props)

        const { isPinging } = this.props

        return (
            <div>
            <h1>is Pinging: {isPinging}</h1>
            <button onClick={this.pingClickHandler}>start PING !!</button>
        </div> 
        )
    }
}

const mapStateToProps = state => {
    console.log('State :: ', state)
    return {
        isPinging: state.pingReducer.isPinging
    }
}

const mapDispatchToProps = {
    ping
}

export default connect(mapStateToProps, mapDispatchToProps)(hot(module)(App))