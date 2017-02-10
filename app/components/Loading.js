import React, { PropTypes } from 'react';
const styles = {
  container: {
    position: 'fixed',
    left: '0',
    right: '0',
    top: '0',
    bottom: '0',
    fontSize: '55px'
  },
  content: {
    textAlign: 'center',
    position: 'absolute',
    width: '100%',
    marginTop: '30px'
  }
};

class Loading extends React.Component {
  constructor(props) {
    super(props);

    this.originalText = props.text;
    this.state = {
      text: this.originalText
    };
  }

  componentDidMount() {
    let stopper = `${this.originalText}...`;

    this.interval = setInterval(() => {
      this.setState(prevState => ({
        text: this.state.text === stopper ? this.originalText : `${this.state.text}.`
      }));
    }, this.props.speed);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div style={styles.container}>
        <p style={styles.content}>{this.state.text}</p>
      </div>
    )
  }
}

Loading.propTypes = {
  text: PropTypes.string,
  speed: PropTypes.number
};

Loading.defaultProps = {
  text: 'Loading',
  speed: 300
};

export default Loading;
