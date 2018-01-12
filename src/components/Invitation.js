import React from 'react';

class Invitation extends React.Component {
  render() {
    return (
      <div className="invitation">
        <h1>You've been invited!</h1>
          <small>{this.props.children}</small>
      </div>
    )
  }
}

export default Invitation;
