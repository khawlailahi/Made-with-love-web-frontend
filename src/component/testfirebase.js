import React, { Component } from 'react'

export default class testfirebase extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    componentDidMount(){
        const messaging = firebase.messaging ()
        messaging.requestPermission().then(()=>{
            return messaging.getToken()
        }).then(token=>{
            console.log('Token : ', token)
        }).catch(()=>{
            console.log(error)
        })
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
