'use strict'
const e = React.createElement;

class LikeButton extends React.Component{
    constructot(props){
        super(props);
        this.state = { liked: false }
    }
}

render(){
    if(this.state.liked){
        return 'You liked this.';
    }
    return
}

