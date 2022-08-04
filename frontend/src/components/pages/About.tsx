import React from "react"

import { useMonthlyPurchasesLazyQuery } from "generated/graphql"

import CircularProgress from '@material-ui/core/CircularProgress'

import PurchasesTable from "components/organisms/PurchasesTable";


// とりあえず認証済みユーザーの名前やメールアドレスを表示
const About: React.FC = () => {
  const [purchases, setPurchases] = React.useState<any>([])
  
  const [getMonthlyPurchases, {loading, data}] = useMonthlyPurchasesLazyQuery()

  React.useEffect((): any => {
    getMonthlyPurchases({
      variables: {month: '2022-08-01'}
    })
    setPurchases(data?.monthlyPurchases)
  }, [data])

  if (loading) {
    return (<CircularProgress />)
  }

  if (!data) {
    return (<CircularProgress />)
  }

  if (!purchases) {
    <></>
  }

  return (
    <PurchasesTable data={data}/>
  )
}

export default About