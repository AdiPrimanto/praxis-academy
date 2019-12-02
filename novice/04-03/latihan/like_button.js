'use strict'
const e = React.createElement;

class LikeButton extends React.Component {
    constructot(props) {
        super(props);
        this.state = {
            liked: false
        }
    }
    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }
        return e(
            'button', {
                onClick: () => this.setState({
                    liked: true
                })
            },
            'like'
        );
    }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);