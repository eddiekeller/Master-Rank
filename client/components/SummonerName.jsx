import React from 'react'

export default class SummonerName extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
}