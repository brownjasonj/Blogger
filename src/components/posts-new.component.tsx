import * as React from 'react';
import { Field, reduxForm } from 'redux-form';


/*class PostsNew extends React.Component<any, any> {

    constructor(props) {
        super(props);
    }

    render() {
        //const {fields: {title, categories, content}, handleSubmit} = this.props
         const handleSubmit = this.props.handleSubmit;
        // const categories = this.props.fields.categories;
        // const content = this.props.fields.content;

        console.log(this.props);

        return (
            <form onSubmit={handleSubmit}>
                <h3>Create a New Post</h3>
                <div className="form-group">
                    <label>Title</label>
                    <Field name="title" type="text" className="form-control" component="input"></Field>
                </div>
                <div className="form-group">
                    <label>Categories</label>
                    <Field name="categories" type="text" className="form-control" component="input"></Field>
                </div>
                <div className="form-group">
                    <label>Content</label>
                    <Field name="content" className="form-control" component="textarea"></Field>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

reduxForm({
    form: "PostsNewForm"
})(PostsNew);

export { PostsNew }*/


const PostsNew = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <div>
          <Field name="firstName" component="input" type="text" placeholder="First Name"/>
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field name="lastName" component="input" type="text" placeholder="Last Name"/>
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <Field name="email" component="input" type="email" placeholder="Email"/>
        </div>
      </div>
      <div>
        <label>Sex</label>
        <div>
          <label><Field name="sex" component="input" type="radio" value="male"/> Male</label>
          <label><Field name="sex" component="input" type="radio" value="female"/> Female</label>
        </div>
      </div>
      <div>
        <label>Favorite Color</label>
        <div>
          <Field name="favoriteColor" component="select">
            <option></option>
            <option value="ff0000">Red</option>
            <option value="00ff00">Green</option>
            <option value="0000ff">Blue</option>
          </Field>
        </div>
      </div>
      <div>
        <label htmlFor="employed">Employed</label>
        <div>
          <Field name="employed" id="employed" component="input" type="checkbox"/>
        </div>
      </div>
      <div>
        <label>Notes</label>
        <div>
          <Field name="notes" component="textarea"/>
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  )
}

reduxForm({
  form: 'simple'  // a unique identifier for this form
})(PostsNew);

export { PostsNew }