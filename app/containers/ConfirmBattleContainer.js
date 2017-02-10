import React from 'react';
import ConfirmBattle from '../components/ConfirmBattle';
import { getPlayersInfo } from '../utils/githubHelpers';


class ConfirmBattleContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      playerInfo: []
    };
    this.handleInitiateBattle = this.handleInitiateBattle.bind(this);
  }

  componentDidMount() {
    const query = this.props.location.query;
    getPlayersInfo([query.playerOne, query.playerTwo])
      .then(players => {
        this.setState({
          isLoading: false,
          playerInfo: [...players]
        });
      });
  }

  handleInitiateBattle() {
    this.context.router.push({
      pathname: '/results',
      state: {
        playerInfo: this.state.playerInfo
      }
    })
  }

  render() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        onInitiateBattle={this.handleInitiateBattle}
        players={this.state.playerInfo} />
    )
  }
}

ConfirmBattleContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default ConfirmBattleContainer;
