import React from 'react';
import Results from '../components/Result';
import { battle } from '../utils/githubHelpers';

class ResultsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      scores: []
    };
  }

  componentDidMount() {
    battle(this.props.location.state.playerInfo)
      .then(scores => {
        this.setState({
          isLoading: false,
          scores: scores
        });
      });
  }

  render() {
    return (
      <Results
        isLoading={this.state.isLoading}
        playerInfo={this.props.location.state.playerInfo}
        scores={this.state.scores} />
    )
  }
}

module.exports = ResultsContainer;
