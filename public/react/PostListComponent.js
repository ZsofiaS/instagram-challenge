'use strict';

class PostListComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.fetchData('/posts/feed');
  }

  fetchData = (apiToFetch) => {
    fetch(apiToFetch)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          posts: data
        });

      })
  }

  updateState = () => {
    console.log("updating")
    this.fetchData('/posts/feed')
  }

  render() {

    return (
      <div>
        <h1>Posts</h1>
        <FormComponent updatemethod={this.updateState}/>
        <div className="feedContainer">
        {this.state.posts.map((post) => {
          return (
            <PostComponent data={post} updatemethod={this.updateState}/>
            );
          }
        )}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<PostListComponent />, document.getElementById('app'));
