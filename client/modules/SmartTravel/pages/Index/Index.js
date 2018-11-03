import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

// Import Style
// import styles from '../../components/PostListItem/PostListItem.css';

class Index extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Button variant="contained" color="primary">
          Hi
        </Button>
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
//Index.need = [() => { return null; }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    /*showAddPost: getShowAddPost(state),
    posts: getPosts(state),*/
  };
}

export default connect(mapStateToProps)(Index);
