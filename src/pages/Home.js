/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';

export default class Home extends PureComponent {
  state = {
    date: '',
  };

  componentDidMount() {
    console.log(this.props);
  }

  heavyFunction = () => {
    // import('date-fns').then(({ format }) => {
    //   this.setState({ date: format(new Date(), 'MM-dd-yy') });
    // });
    const { history } = this.props;
    history.replace('/about');
  };

  render() {
    const { date } = this.state;
    return (
      <div>
        {date && <p>{date}</p>}
        <button type="button" onClick={this.heavyFunction}>
          Perform Heavy Function
        </button>
      </div>
    );
  }
}
