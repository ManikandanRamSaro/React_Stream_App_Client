import React from 'react';
import {connect} from 'react-redux';
import { signIn,signOut } from '../Actions/index';
class GoogleAuth extends React.Component{
   //  state = {isSignedIn:null} // changing component level declaration
    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:
                '592545372529-tf661u19u6thbs1ta47ebde28ls9kqs7.apps.googleusercontent.com',
                scope:'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance(); 
              
                //this.setState({isSignedIn:this.auth.isSignedIn.get()});
                this.ListenStatus(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.ListenStatus);
            });
        });
        console.log('this called')
    }
    ListenStatus = ({isSignedIn}) => {
        //this.setState({isSignedIn:this.auth.isSignedIn.get()})
        console.log(isSignedIn,'Get Datatus called')
        if(isSignedIn)
        { 
            this.props.signIn();
        }
        else
        { 
            this.props.signOut();
        }
    }

    onSignInClick = () =>{
        this.auth.signIn();
    }

    onSignOutClick = () =>{
        this.auth.signOut();
    }

    buttonHandler()
    {
        console.log(this.props.isSignedIn)
        if(this.props.isSignedIn === null)
        {
            return null;
        }
        else if(this.props.isSignedIn)
        {
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                        <i className="google icon"/>
                        Sign out
                </button>
                )
        }
        else
        {
            return (
                <button onClick={this.onSignInClick} className="ui green google button">
                        <i className="google icon"/>
                        Sign in with Google
                </button>
                );
        }
    }

    render()
    {
        return <div>{this.buttonHandler()}</div>
    }

}

const mapStateToProps= (state) => {
    return { isSignedIn:state.auth.isSignedIn}
}
export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth);