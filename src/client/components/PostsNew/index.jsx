import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';

import { createPost } from 'actions';

import './style.scss';

const propTypes = {
  createPost: PropTypes.func,
  handleSubmit: PropTypes.func,
  fields: PropTypes.object,
};

const contextTypes = {
  router: PropTypes.object,
};

class PostsNew extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(props) {
    this.props.createPost(props)
      .then(() => {
        this.context.router.push('/');
      });
  }

  render() {
    const { handleSubmit, fields: { title, categories, content } } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <h3>Create New Post</h3>

        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label htmlFor="">Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="form-control-feedback">
            {title.touched ? title.error : ''}
          </div>
        </div>
        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <label htmlFor="">Categories</label>
          <input type="text" className="form-control" {...categories} />
          <div className="form-control-feedback">
            {categories.touched ? categories.error : ''}
          </div>
        </div>
        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
          <label htmlFor="">Content</label>
          <textarea className="form-control" {...content} />
          <div className="form-control-feedback">
            {content.touched ? content.error : ''}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger" >
          Cancel
        </Link>
      </form>
    );
  }
}

PostsNew.propTypes = propTypes;
PostsNew.contextTypes = contextTypes;

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a title';
  }
  if (!values.categories) {
    errors.categories = 'Enter categories';
  }
  if (!values.content) {
    errors.content = 'Enter some content ';
  }

  return errors;
}

export default reduxForm({
  form: 'PostsNew',
  fields: ['title', 'categories', 'content'],
  validate,
}, null, { createPost })(PostsNew);
