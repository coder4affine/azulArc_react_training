// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// const containerStyle = `container label`;

// class App extends Component {
//   static propTypes = {
//     text: PropTypes.string,
//     applyStyle: PropTypes.bool.isRequired,
//   };

//   static defaultProps = {
//     text: 'Hello',
//   };

//   state = {
//     test: 'Hello Yagnesh',
//   };

//   constructor(props) {
//     super(props);
//     console.log('constructor');
//   }

//   static getDerivedStateFromProps(props, state) {
//     console.log('getDerivedStateFromProps');
//     return {
//       ...state,
//       test: 'heello world....',
//       greet: `${props.text}, Greet...`,
//     };
//   }

//   componentDidMount() {
//     console.log('componentDidMount');
//     this.greet.innerHTML = 'Hello From CDM';

//     document.addEventListener('copy', this.copy);

//     this.timer = setTimeout(() => {
//       console.log('set Timeout');
//     }, 10000);
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log('componentDidUpdate');
//   }

//   componentWillUnmount() {
//     document.removeEventListener('copy');
//     clearTimeout(this.timer);
//   }

//   shouldComponentUpdate() {
//     console.log('shouldComponentUpdate');
//     // if(this.props !== nextProps && this.state !== nextState) {
//     //   return  true
//     // }
//     return true;
//   }

//   static getDerivedStateFromError(error) {
//     // Update state so the next render will show the fallback UI.
//     return { hasError: true };
//   }

//   componentDidCatch(error, info) {
//   }

//   copy = () => {
//     console.log('Copied...');
//   };

//   onClick = () => {
//     this.setState({ test: 'Hello World' }, () => {
//       // console.log('state changed');
//     });
//   };

//   render() {
//     console.log('render');
//     const { applyStyle } = this.props;
//     const { test, greet, hasError } = this.state;
//     return (
//       <div>
//         {hasError && <p>Error...</p>}
//         <h1
//           style={{
//             backgroundColor: applyStyle ? 'yellow' : 'green',
//           }}
//           className={containerStyle}
//         >
//           Hello World
//         </h1>
//         <h1
//           ref={ref => {
//             this.greet = ref;
//           }}
//         >
//           {greet}
//         </h1>
//         <h4>{test}</h4>
//         <input type="password" />
//         <button
//           ref={ref => {
//             this.button = ref;
//           }}
//           type="button"
//           onClick={this.onClick}
//         >
//           Click Me
//         </button>
//       </div>
//     );
//   }
// }

// // App.propTypes = {
// //   text: PropTypes.string.isRequired,
// //   caption: PropTypes.number.isRequired,
// //   applyStyle: PropTypes.bool.isRequired,
// // };

// export default App;

// // // class component

// // // function component

// // import React from 'react';
// // import PropTypes from 'prop-types';

// // import './main.css';

// // const containerStyle = `container label`;

// // let test = 'Hello Yagnesh';

// // const Main = ({ text, applyStyle }) => {
// //   return (
// //     <div>
// //       <h1
// //         style={{
// //           backgroundColor: applyStyle ? 'yellow' : 'green',
// //         }}
// //         className={containerStyle}
// //       >
// //         Hello World
// //       </h1>
// //       <h1>{text}</h1>
// //       <h4>{test}</h4>
// //       <input type="password" />
// //       <button
// //         type="button"
// //         onClick={() => {
// //           test = 'Hello World';
// //         }}
// //       >
// //         Click Me
// //       </button>
// //     </div>
// //   );
// // };

// // Main.propTypes = {
// //   text: PropTypes.string.isRequired,
// //   caption: PropTypes.number.isRequired,
// //   applyStyle: PropTypes.bool.isRequired,
// // };

// // export default Main;
