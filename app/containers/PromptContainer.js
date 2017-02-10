import React from 'react';
import Prompt from '../components/Prompt';

class PromptContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ''
    };
    this.handleSubmitUser = this.handleSubmitUser.bind(this);
    this.handleUpdateUser = this.handleUpdateUser.bind(this);
  }

  handleUpdateUser(event) {
    this.setState({
      username: event.target.value
    });
  }

  handleSubmitUser(event) {
    event.preventDefault();
    const username = this.state.username;
    this.setState({
      username: ''
    });

    if (this.props.routeParams.playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: username
        }
      });
    } else {
      this.context.router.push(`/playerTwo/${username}`);
    }
  }

  render() {
    return (
      <Prompt
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.route.header}
        username ={this.state.username}/>
    )
  }
}

PromptContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default PromptContainer;
