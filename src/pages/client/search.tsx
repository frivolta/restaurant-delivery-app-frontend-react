import { gql, useLazyQuery } from "@apollo/client";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useHistory, useLocation } from "react-router-dom";
import { RESTAURANT_FRAGMENT } from "../../fragments";
import {
  searchRestaurant,
  searchRestaurantVariables,
} from "../../__generated__/searchRestaurant";

const SEARCH_RESTAURANT = gql`
  query searchRestaurant($input: SearchRestaurantInput!) {
    searchRestaurant(input: $input) {
      ok
      error
      totalPages
      totalResults
      restaurants {
        ...RestaurantParts
      }
    }
  }
  ${RESTAURANT_FRAGMENT}
`;

export const Search = () => {
  const location = useLocation();
  const history = useHistory();
  const [callQuery, { loading, data, called }] = useLazyQuery<
    searchRestaurant,
    searchRestaurantVariables
  >(SEARCH_RESTAURANT);

  React.useEffect(() => {
    const [_, query] = location.search.split("?term=");
    if (!query) {
      return history.replace("/");
    }
    callQuery({
      variables: {
        input: {
          page: 1,
          query,
        },
      },
    });
  }, []);

  //@ToDo: Create search view after data
  console.log(loading, data, called);

  return (
    <div>
      <Helmet>
        <title>Search | Delivery app</title>
      </Helmet>
      <h1>Search page</h1>
    </div>
  );
};
