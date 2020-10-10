import Button from "../../components/Button";
class RazorpayComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isReady: false };
  }

  render() {
    return (
      <div>
        <ExampleIOUPaymentForm
          ref={(ref) => { this.form = ref; }}
          onChange={(...args) => { console.log("onChange", ...args); }}
          onReadyForSaveChange={(isReady) => {
            console.log("onReadyForSaveChange", isReady);
            this.setState({ isReady });
          }}
          onSubmit={(doc) => { console.log("onSubmit", doc); }}
        />
        <Button isDisabled={!this.state.isReady} onClick={() => { this.form.submit(); }}>Submit</Button>
      </div>
    );
  }
}

<RazorpayComponent />
