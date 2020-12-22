import { ApolloClient, createHttpLink, InMemoryCache, makeVar } from '@apollo/client';
import {setContext} from '@apollo/client/link/context'
import { LOCAL_STORAGE_TOKEN } from './constants';

const token = localStorage.getItem(LOCAL_STORAGE_TOKEN)

export const isLoggedInVar = makeVar(!!token)
export const authTokenVar = makeVar(token)

const httpLink = createHttpLink({uri: 'http://localhost:4000/graphql'})

const authLink = setContext((_, {headers})=>{
  return {
    headers: { 
      ...headers,
      "X-JWT": authTokenVar() || ''
    }
  }
})

export const client = new ApolloClient({
 link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies:{
      Query: {
        fields:{
          isLoggedIn: {
            read(){
              return isLoggedInVar
            }
          },
          token: { 
            read(){
              return authTokenVar
            }
          }
        },
      }
    }
  }),
  connectToDevTools: true,
});