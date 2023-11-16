import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

//obj:{dispatch(),getState()}
// const logger=function(obj){
//   return function(next){
//     return function(action){
//       if(typeof action !== 'function'){
//         console.log("Action_Type: ",action.type);
//       }
      
//       next(action);
//     }
//   }
// }
//method 2 of writting the above code
const logger=(obj)=>(next)=>(action)=>{
  console.log("Action_Type: ",action.type);
         next(action)
}
// const thunk=(obj)=>(next)=>(action)=>{
//   console.log('received action',action)
//   if (typeof action === "function"){
//     action(obj.dispatch);
//     return;
//   }
//   next(action);
// }

// export const storeContext=createContext();

// class Provider extends React.Component{
//   render(){
//     const {store}=this.props;
//     return (
//       <storeContext.Provider value={store}>
//         {this.props.children}
//       </storeContext.Provider>
//     )
//   }
// }

//const connecttoAppComponent=connect(callback)(App)
// export function connect(callback){
//   return function (Component){
//      class ConnectedComponent extends React.Component{
//       constructor(props){
//         super(props);
//         this.unsubscribe=this.props.store.subscribe(()=>this.forceUpdate());
//       }
//       componentWillUnmount(){
//         this.unsubscribe();
//       }
//       render(){
//         const{store}=this.props;
//         const state=store.getState();
//         const dataToBePassedAsProps=callback(state)
//         return <Component {...dataToBePassedAsProps} 
//          dispatch={store.dispatch}/>
//       }
//     }
//     class ConnectedComponentWrapper extends React.Component{
//       render(){
//         return(
//           <storeContext.Consumer>
//             {
//               (store)=>(
//                 <ConnectedComponent store={store}/>
//               )
//             }
//           </storeContext.Consumer>
//         )
//       }
//     }
//     return ConnectedComponentWrapper;
//   }
  
// }




const store=configureStore({
  reducer:rootReducer,
  middleware:[logger,thunk]
});
// console.log('before',store.getState());
// store.dispatch({
//   type:'Add_movies',
//   movies:[{name:'batman'}]
// })
// console.log('after',store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
       <App store={store} />
    </Provider>
  </React.StrictMode>
);


