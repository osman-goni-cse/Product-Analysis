import React from 'react';

const Blogs = () => {
  return (
    <div className='mt-5'>
      <p> <strong>Question-1: </strong> What is Context API ?</p>
      <p> <strong>Answer: </strong> Context API is a way for creating global variables which can be used for prop drilling. Prop Drilling is when we need to pass props from grandparent to child.The Context API is used to share the data with multiple components, without passing data through props manually.We use Context API when we need to make a website dark mode.Toggling dark mode and light mode using context API is very easy. </p>

      <p><strong>Question-2: </strong> Describe Semantic tag.</p>

      <p><strong>Answer:</strong> Semantic elements are element which is meaningful for browser as well as developer.Search Engines are able to understand website content when we use semantic elements in HTML.Examples of the Semantic elements are:
        <ul>
          <li>&lt;article&gt;</li>
          <li>&lt;header&gt;</li>
          <li>&lt;footer&gt;</li>
          <li>&lt;main&gt;</li>
        </ul>
        and so on. Sematic elements are easier to read.It has greater accessibility.
      </p>

    </div>
  );
};

export default Blogs;