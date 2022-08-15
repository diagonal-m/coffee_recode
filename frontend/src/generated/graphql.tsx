import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: any;
};

export type CoffeeBean = {
  __typename?: 'CoffeeBean';
  country?: Maybe<Scalars['String']>;
  createdAt: Scalars['ISO8601DateTime'];
  evaluation?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  processing?: Maybe<Scalars['String']>;
  roastLevel?: Maybe<Scalars['Int']>;
  store?: Maybe<Store>;
  storeId?: Maybe<Scalars['Int']>;
  tasting?: Maybe<Scalars['String']>;
  updatedAt: Scalars['ISO8601DateTime'];
  userId: Scalars['Int'];
  varietal?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of CreateCoffeeBean */
export type CreateCoffeeBeanInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  evaluation?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  processing?: InputMaybe<Scalars['String']>;
  roastLevel?: InputMaybe<Scalars['Int']>;
  station?: InputMaybe<Scalars['String']>;
  store: Scalars['String'];
  tasting?: InputMaybe<Scalars['String']>;
  varietal?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of CreateCoffeeBean */
export type CreateCoffeeBeanPayload = {
  __typename?: 'CreateCoffeeBeanPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  coffeeBean?: Maybe<CoffeeBean>;
};

/** Autogenerated input type of CreatePurchase */
export type CreatePurchaseInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  coffeeType: Scalars['Int'];
  menu: Scalars['String'];
  price: Scalars['Int'];
  purchaseDate: Scalars['String'];
  station?: InputMaybe<Scalars['String']>;
  store: Scalars['String'];
  volume: Scalars['String'];
};

/** Autogenerated return type of CreatePurchase */
export type CreatePurchasePayload = {
  __typename?: 'CreatePurchasePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  purchase?: Maybe<Purchase>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCoffeeBean?: Maybe<CreateCoffeeBeanPayload>;
  createPurchase?: Maybe<CreatePurchasePayload>;
  /** An example field added by the generator */
  testField: Scalars['String'];
  updateCoffeeBean?: Maybe<UpdateCoffeeBeanPayload>;
};


export type MutationCreateCoffeeBeanArgs = {
  input: CreateCoffeeBeanInput;
};


export type MutationCreatePurchaseArgs = {
  input: CreatePurchaseInput;
};


export type MutationUpdateCoffeeBeanArgs = {
  input: UpdateCoffeeBeanInput;
};

export type Purchase = {
  __typename?: 'Purchase';
  coffeeType?: Maybe<Scalars['String']>;
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  menu?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  purchaseDate?: Maybe<Scalars['ISO8601DateTime']>;
  store?: Maybe<Store>;
  storeId: Scalars['Int'];
  updatedAt: Scalars['ISO8601DateTime'];
  userId: Scalars['Int'];
  volume?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  bean: CoffeeBean;
  currentUser?: Maybe<User>;
  monthlyPurchases: Array<Purchase>;
  myBeans: Array<CoffeeBean>;
  /** An example field added by the generator */
  testField: Scalars['String'];
};


export type QueryBeanArgs = {
  id: Scalars['ID'];
};


export type QueryMonthlyPurchasesArgs = {
  month: Scalars['String'];
};

export type Store = {
  __typename?: 'Store';
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  station: Scalars['String'];
  updatedAt: Scalars['ISO8601DateTime'];
  userId: Scalars['Int'];
};

/** Autogenerated input type of UpdateCoffeeBean */
export type UpdateCoffeeBeanInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  evaluation?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  processing?: InputMaybe<Scalars['String']>;
  roastLevel?: InputMaybe<Scalars['Int']>;
  tasting?: InputMaybe<Scalars['String']>;
  varietal?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateCoffeeBean */
export type UpdateCoffeeBeanPayload = {
  __typename?: 'UpdateCoffeeBeanPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  coffeeBean?: Maybe<CoffeeBean>;
};

export type User = {
  __typename?: 'User';
  allowPasswordChange?: Maybe<Scalars['Boolean']>;
  confirmationSentAt?: Maybe<Scalars['ISO8601DateTime']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmedAt?: Maybe<Scalars['ISO8601DateTime']>;
  createdAt: Scalars['ISO8601DateTime'];
  email?: Maybe<Scalars['String']>;
  encryptedPassword: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  rememberCreatedAt?: Maybe<Scalars['ISO8601DateTime']>;
  resetPasswordSentAt?: Maybe<Scalars['ISO8601DateTime']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  tokens?: Maybe<Scalars['String']>;
  uid: Scalars['String'];
  unconfirmedEmail?: Maybe<Scalars['String']>;
  updatedAt: Scalars['ISO8601DateTime'];
};

export type BeanQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type BeanQuery = { __typename?: 'Query', bean: { __typename?: 'CoffeeBean', id: string, name: string, processing?: string | null, country?: string | null, varietal?: string | null, roastLevel?: number | null, tasting?: string | null, evaluation?: number | null, store?: { __typename?: 'Store', name: string, station: string } | null } };

export type CreateCoffeeBeanMutationVariables = Exact<{
  name: Scalars['String'];
  processing: Scalars['String'];
  country: Scalars['String'];
  varietal: Scalars['String'];
  roast_level: Scalars['Int'];
  tasting: Scalars['String'];
  evaluation: Scalars['Int'];
  store: Scalars['String'];
  station: Scalars['String'];
}>;


export type CreateCoffeeBeanMutation = { __typename?: 'Mutation', createCoffeeBean?: { __typename?: 'CreateCoffeeBeanPayload', coffeeBean?: { __typename?: 'CoffeeBean', id: string, name: string, processing?: string | null, country?: string | null, varietal?: string | null, roastLevel?: number | null, tasting?: string | null, evaluation?: number | null, store?: { __typename?: 'Store', name: string, station: string } | null } | null } | null };

export type CreatePurchaseMutationVariables = Exact<{
  purchase_date: Scalars['String'];
  menu: Scalars['String'];
  coffee_type: Scalars['Int'];
  volume: Scalars['String'];
  price: Scalars['Int'];
  store: Scalars['String'];
  station: Scalars['String'];
}>;


export type CreatePurchaseMutation = { __typename?: 'Mutation', createPurchase?: { __typename?: 'CreatePurchasePayload', purchase?: { __typename?: 'Purchase', id: string, purchaseDate?: any | null, menu?: string | null, coffeeType?: string | null, volume?: string | null, price?: number | null, store?: { __typename?: 'Store', name: string, station: string } | null } | null } | null };

export type MonthlyPurchasesQueryVariables = Exact<{
  month: Scalars['String'];
}>;


export type MonthlyPurchasesQuery = { __typename?: 'Query', monthlyPurchases: Array<{ __typename?: 'Purchase', id: string, purchaseDate?: any | null, menu?: string | null, coffeeType?: string | null, volume?: string | null, price?: number | null, store?: { __typename?: 'Store', name: string, station: string } | null }> };

export type MyBeansQueryVariables = Exact<{ [key: string]: never; }>;


export type MyBeansQuery = { __typename?: 'Query', myBeans: Array<{ __typename?: 'CoffeeBean', id: string, name: string, processing?: string | null, country?: string | null, varietal?: string | null, roastLevel?: number | null, tasting?: string | null, evaluation?: number | null, store?: { __typename?: 'Store', name: string, station: string } | null }> };

export type UpdateCoffeeBeanMutationVariables = Exact<{
  id: Scalars['ID'];
  name: Scalars['String'];
  processing: Scalars['String'];
  country: Scalars['String'];
  varietal: Scalars['String'];
  roast_level: Scalars['Int'];
  tasting: Scalars['String'];
  evaluation: Scalars['Int'];
}>;


export type UpdateCoffeeBeanMutation = { __typename?: 'Mutation', updateCoffeeBean?: { __typename?: 'UpdateCoffeeBeanPayload', coffeeBean?: { __typename?: 'CoffeeBean', id: string, name: string, processing?: string | null, country?: string | null, varietal?: string | null, roastLevel?: number | null, tasting?: string | null, evaluation?: number | null, store?: { __typename?: 'Store', name: string, station: string } | null } | null } | null };


export const BeanDocument = gql`
    query bean($id: ID!) {
  bean(id: $id) {
    id
    name
    processing
    country
    varietal
    roastLevel
    tasting
    evaluation
    store {
      name
      station
    }
  }
}
    `;

/**
 * __useBeanQuery__
 *
 * To run a query within a React component, call `useBeanQuery` and pass it any options that fit your needs.
 * When your component renders, `useBeanQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBeanQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBeanQuery(baseOptions: Apollo.QueryHookOptions<BeanQuery, BeanQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BeanQuery, BeanQueryVariables>(BeanDocument, options);
      }
export function useBeanLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BeanQuery, BeanQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BeanQuery, BeanQueryVariables>(BeanDocument, options);
        }
export type BeanQueryHookResult = ReturnType<typeof useBeanQuery>;
export type BeanLazyQueryHookResult = ReturnType<typeof useBeanLazyQuery>;
export type BeanQueryResult = Apollo.QueryResult<BeanQuery, BeanQueryVariables>;
export const CreateCoffeeBeanDocument = gql`
    mutation createCoffeeBean($name: String!, $processing: String!, $country: String!, $varietal: String!, $roast_level: Int!, $tasting: String!, $evaluation: Int!, $store: String!, $station: String!) {
  createCoffeeBean(
    input: {name: $name, processing: $processing, country: $country, varietal: $varietal, roastLevel: $roast_level, tasting: $tasting, evaluation: $evaluation, store: $store, station: $station}
  ) {
    coffeeBean {
      id
      name
      processing
      country
      varietal
      roastLevel
      tasting
      evaluation
      store {
        name
        station
      }
    }
  }
}
    `;
export type CreateCoffeeBeanMutationFn = Apollo.MutationFunction<CreateCoffeeBeanMutation, CreateCoffeeBeanMutationVariables>;

/**
 * __useCreateCoffeeBeanMutation__
 *
 * To run a mutation, you first call `useCreateCoffeeBeanMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCoffeeBeanMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCoffeeBeanMutation, { data, loading, error }] = useCreateCoffeeBeanMutation({
 *   variables: {
 *      name: // value for 'name'
 *      processing: // value for 'processing'
 *      country: // value for 'country'
 *      varietal: // value for 'varietal'
 *      roast_level: // value for 'roast_level'
 *      tasting: // value for 'tasting'
 *      evaluation: // value for 'evaluation'
 *      store: // value for 'store'
 *      station: // value for 'station'
 *   },
 * });
 */
export function useCreateCoffeeBeanMutation(baseOptions?: Apollo.MutationHookOptions<CreateCoffeeBeanMutation, CreateCoffeeBeanMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCoffeeBeanMutation, CreateCoffeeBeanMutationVariables>(CreateCoffeeBeanDocument, options);
      }
export type CreateCoffeeBeanMutationHookResult = ReturnType<typeof useCreateCoffeeBeanMutation>;
export type CreateCoffeeBeanMutationResult = Apollo.MutationResult<CreateCoffeeBeanMutation>;
export type CreateCoffeeBeanMutationOptions = Apollo.BaseMutationOptions<CreateCoffeeBeanMutation, CreateCoffeeBeanMutationVariables>;
export const CreatePurchaseDocument = gql`
    mutation createPurchase($purchase_date: String!, $menu: String!, $coffee_type: Int!, $volume: String!, $price: Int!, $store: String!, $station: String!) {
  createPurchase(
    input: {purchaseDate: $purchase_date, menu: $menu, coffeeType: $coffee_type, volume: $volume, price: $price, store: $store, station: $station}
  ) {
    purchase {
      id
      purchaseDate
      menu
      coffeeType
      volume
      price
      store {
        name
        station
      }
    }
  }
}
    `;
export type CreatePurchaseMutationFn = Apollo.MutationFunction<CreatePurchaseMutation, CreatePurchaseMutationVariables>;

/**
 * __useCreatePurchaseMutation__
 *
 * To run a mutation, you first call `useCreatePurchaseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePurchaseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPurchaseMutation, { data, loading, error }] = useCreatePurchaseMutation({
 *   variables: {
 *      purchase_date: // value for 'purchase_date'
 *      menu: // value for 'menu'
 *      coffee_type: // value for 'coffee_type'
 *      volume: // value for 'volume'
 *      price: // value for 'price'
 *      store: // value for 'store'
 *      station: // value for 'station'
 *   },
 * });
 */
export function useCreatePurchaseMutation(baseOptions?: Apollo.MutationHookOptions<CreatePurchaseMutation, CreatePurchaseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePurchaseMutation, CreatePurchaseMutationVariables>(CreatePurchaseDocument, options);
      }
export type CreatePurchaseMutationHookResult = ReturnType<typeof useCreatePurchaseMutation>;
export type CreatePurchaseMutationResult = Apollo.MutationResult<CreatePurchaseMutation>;
export type CreatePurchaseMutationOptions = Apollo.BaseMutationOptions<CreatePurchaseMutation, CreatePurchaseMutationVariables>;
export const MonthlyPurchasesDocument = gql`
    query monthlyPurchases($month: String!) {
  monthlyPurchases(month: $month) {
    id
    purchaseDate
    menu
    coffeeType
    volume
    price
    store {
      name
      station
    }
  }
}
    `;

/**
 * __useMonthlyPurchasesQuery__
 *
 * To run a query within a React component, call `useMonthlyPurchasesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMonthlyPurchasesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMonthlyPurchasesQuery({
 *   variables: {
 *      month: // value for 'month'
 *   },
 * });
 */
export function useMonthlyPurchasesQuery(baseOptions: Apollo.QueryHookOptions<MonthlyPurchasesQuery, MonthlyPurchasesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MonthlyPurchasesQuery, MonthlyPurchasesQueryVariables>(MonthlyPurchasesDocument, options);
      }
export function useMonthlyPurchasesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MonthlyPurchasesQuery, MonthlyPurchasesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MonthlyPurchasesQuery, MonthlyPurchasesQueryVariables>(MonthlyPurchasesDocument, options);
        }
export type MonthlyPurchasesQueryHookResult = ReturnType<typeof useMonthlyPurchasesQuery>;
export type MonthlyPurchasesLazyQueryHookResult = ReturnType<typeof useMonthlyPurchasesLazyQuery>;
export type MonthlyPurchasesQueryResult = Apollo.QueryResult<MonthlyPurchasesQuery, MonthlyPurchasesQueryVariables>;
export const MyBeansDocument = gql`
    query myBeans {
  myBeans {
    id
    name
    processing
    country
    varietal
    roastLevel
    tasting
    evaluation
    store {
      name
      station
    }
  }
}
    `;

/**
 * __useMyBeansQuery__
 *
 * To run a query within a React component, call `useMyBeansQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyBeansQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyBeansQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyBeansQuery(baseOptions?: Apollo.QueryHookOptions<MyBeansQuery, MyBeansQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyBeansQuery, MyBeansQueryVariables>(MyBeansDocument, options);
      }
export function useMyBeansLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyBeansQuery, MyBeansQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyBeansQuery, MyBeansQueryVariables>(MyBeansDocument, options);
        }
export type MyBeansQueryHookResult = ReturnType<typeof useMyBeansQuery>;
export type MyBeansLazyQueryHookResult = ReturnType<typeof useMyBeansLazyQuery>;
export type MyBeansQueryResult = Apollo.QueryResult<MyBeansQuery, MyBeansQueryVariables>;
export const UpdateCoffeeBeanDocument = gql`
    mutation updateCoffeeBean($id: ID!, $name: String!, $processing: String!, $country: String!, $varietal: String!, $roast_level: Int!, $tasting: String!, $evaluation: Int!) {
  updateCoffeeBean(
    input: {id: $id, name: $name, processing: $processing, country: $country, varietal: $varietal, roastLevel: $roast_level, tasting: $tasting, evaluation: $evaluation}
  ) {
    coffeeBean {
      id
      name
      processing
      country
      varietal
      roastLevel
      tasting
      evaluation
      store {
        name
        station
      }
    }
  }
}
    `;
export type UpdateCoffeeBeanMutationFn = Apollo.MutationFunction<UpdateCoffeeBeanMutation, UpdateCoffeeBeanMutationVariables>;

/**
 * __useUpdateCoffeeBeanMutation__
 *
 * To run a mutation, you first call `useUpdateCoffeeBeanMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCoffeeBeanMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCoffeeBeanMutation, { data, loading, error }] = useUpdateCoffeeBeanMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      processing: // value for 'processing'
 *      country: // value for 'country'
 *      varietal: // value for 'varietal'
 *      roast_level: // value for 'roast_level'
 *      tasting: // value for 'tasting'
 *      evaluation: // value for 'evaluation'
 *   },
 * });
 */
export function useUpdateCoffeeBeanMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCoffeeBeanMutation, UpdateCoffeeBeanMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCoffeeBeanMutation, UpdateCoffeeBeanMutationVariables>(UpdateCoffeeBeanDocument, options);
      }
export type UpdateCoffeeBeanMutationHookResult = ReturnType<typeof useUpdateCoffeeBeanMutation>;
export type UpdateCoffeeBeanMutationResult = Apollo.MutationResult<UpdateCoffeeBeanMutation>;
export type UpdateCoffeeBeanMutationOptions = Apollo.BaseMutationOptions<UpdateCoffeeBeanMutation, UpdateCoffeeBeanMutationVariables>;