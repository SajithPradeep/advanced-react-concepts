import { Component, Children } from "react";

class SlideShow extends Component {
  state = {
    total: 0,
    current: 0,
  };
  updateCount = () => {
    const { current, total } = this.state;
    this.setState({
      current: current + 1 === total ? 0 : current + 1,
    });
  };
  componentDidMount() {
    const { children } = this.props;
    this.setState({ total: Children.count(children) });
    setInterval(this.updateCount, 4000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    const bullets = Array(this.state.total).fill("o");
    bullets[this.state.current] = "*";
    const { children } = this.props;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "40px",
        }}
      >
        {bullets}
        {Children.toArray(children)[this.state.current]}
      </div>
    );
  }
}

export default SlideShow;
