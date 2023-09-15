import React from 'react'
import LoginForm from '../components/LoginForm'

export default function Login() {
  return (
    <div><LoginForm /></div>
  )
}


// import React from 'react';

// // Higher-Order Component (HOC) for adding a prefix to a component's prop
// const withPrefix = (prefix) => (WrappedComponent) => {
//   return function WithPrefix(props) {
//     // Add the specified prefix to the prop 'text'
//     const modifiedProps = {
//       ...props,
//       text: `${prefix}${props.text}`,
//     };

//     // Render the WrappedComponent with modified props
//     return <WrappedComponent {...modifiedProps} />;
//   };
// };

// // Sample functional component
// const DisplayText = ({ text }) => (
//   <div>{text}</div>
// );

// // Wrap DisplayText with the withPrefix HOC to add a prefix
// const DisplayTextWithPrefix = withPrefix('Prefix: ')(DisplayText);

// // Usage in the application
// const App = () => (
//   <div>
//     <DisplayTextWithPrefix text="Hello, world!" />
//   </div>
// );

// export default App;
