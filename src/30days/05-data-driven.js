import React from 'react';

const activityItems = [
  {
    timestamp: new Date().getTime(),
    text: "Ate lunch",
    user: {
      id: 1,
      name: 'Nate',
      avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
    },
    comments: [
      { from: 'Ari', text: 'Me too!' }
    ]
  },
  {
    timestamp: new Date().getTime(),
    text: "Woke up early for a beautiful run",
    user: {
      id: 2, name: 'Ari',
      avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
    },
    comments: [{ from: 'Nate', text: 'I am so jealous' }]
  }
];

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="menuIcon">
          <div className="dashTop"></div>
          <div className="dashBottom"></div>
          <div className="circle"></div>
        </div>
        <span className="title">{this.props.title}</span>
        <input type="text" className="searchInput" placeholder="Search ..." />
        <div className="glyphicon glyphicon-search searchIcon"></div>
      </div>
    );
  }
}

class Activity extends React.Component {
  render() {
    const { activity } = this.props;
    return (
      <div className="item">
        <div className="avatar">
          <img alt={activity.text} src={activity.user.avatar} />
        </div>
        <span className="time">{activity.timestamp}</span>
        <p>{activity.text}</p>
        <div className="commentCount">{activity.comments.length}</div>
      </div>
    );
  }
}

class Content extends React.Component {

  render() {
    return (
      <div className="content">
        <div className="line"></div>
        {
          activityItems.map((item, index) => {
            return <Activity key={index} activity={item} />
          })
        }
      </div>
    );
  }
}
class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="notificationsFrame">
        <div className="panel">
          <Header title="Timeline" />
          <Content />
        </div>
      </div>
    );
  }

}

export { Timeline };