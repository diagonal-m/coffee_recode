import React from "react"

import { useMonthlyPurchasesLazyQuery } from "generated/graphql"

import CircularProgress from '@material-ui/core/CircularProgress'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import IconButton from "@material-ui/core/IconButton";

import PurchasesTable from "components/organisms/PurchasesTable";

const parseDate = (date: any, plusMonth: number) => {
  const month = Number(date.getMonth()) + 1 + plusMonth
  return (date.getFullYear() + '-' + String(month))
}

// とりあえず認証済みユーザーの名前やメールアドレスを表示
const About: React.FC = () => {
  const [purchases, setPurchases] = React.useState<any>([])
  const [plusMonth, setPlusMonth] = React.useState(0)
  const date = new Date()
  
  const [getMonthlyPurchases, {loading, data}] = useMonthlyPurchasesLazyQuery()

  React.useEffect((): any => {
    getMonthlyPurchases({
      variables: {month: parseDate(date, plusMonth) + '-' + '1'}
    })
    setPurchases(data?.monthlyPurchases)
  }, [data, plusMonth])

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
    <>
      <div style={{'display': 'flex'}}>
        <IconButton onClick={() => setPlusMonth(plusMonth - 1)}>
          <ArrowBackIosIcon />
        </IconButton>
        <h2>{parseDate(date, plusMonth)}</h2>
        <IconButton onClick={() => setPlusMonth(plusMonth + 1)}>
          <ArrowForwardIosIcon />
        </IconButton>
      </div>
      <PurchasesTable data={data}/>
    </>
  )
}

export default About