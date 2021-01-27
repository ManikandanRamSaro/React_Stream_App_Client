import React from 'react';

class GoogleAuth extends React.Component{
    state = {isSignedIn:null}
    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:
                '592545372529-tf661u19u6thbs1ta47ebde28ls9kqs7.apps.googleusercontent.com',
                scope:'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn:this.auth.isSignedIn.get()});
                this.auth.isSignedIn.listen(this.ListenStatus);
            });
        });
    }
    ListenStatus = () => {
        this.setState({isSignedIn:this.auth.isSignedIn.get()})
    }

    onSignInClick = () =>{
        this.auth.signIn();
    }

    onSignOutClick = () =>{
        this.auth.signOut();
    }

    buttonHandler()
    {
        if(this.state.isSignedIn === null)
        {
            return null;
        }
        else if(this.state.isSignedIn)
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

export default GoogleAuth;