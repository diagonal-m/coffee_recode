import React from "react"

import { useMonthlyPurchasesLazyQuery } from "generated/graphql"

import CircularProgress from '@material-ui/core/CircularProgress'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import IconButton from "@material-ui/core/IconButton";
import Modal from "@material-ui/core/Modal"

import PurchasesTable from "components/organisms/PurchasesTable";
import AddPurchaseForm from "components/organisms/AddPurchasesForm"

const parseDate = (date: any, plusMonth: number) => {
  const month = Number(date.getMonth()) + 1 + plusMonth
  return (date.getFullYear() + '-' + String(month))
}

// とりあえず認証済みユーザーの名前やメールアドレスを表示
const Purchases: React.FC = () => {
  const [purchases, setPurchases] = React.useState<any>([])
  const [isModal, setIsModal] = React.useState<boolean>(false)
  const [plusMonth, setPlusMonth] = React.useState(0)
  //const date = new Date()
  const date = React.useMemo(() => new Date(), [])
  
  const [getMonthlyPurchases, {loading, data}] = useMonthlyPurchasesLazyQuery()

  const addButtonClick = () => {
    setIsModal(true)
  }
  const closeModal = () => {
    setIsModal(false)
  }

  React.useEffect((): any => {
    getMonthlyPurchases({
      variables: {month: `${parseDate(date, plusMonth)}-1`}
    })
    setPurchases(data?.monthlyPurchases)
  }, [data, plusMonth, date, getMonthlyPurchases])

  if (loading) {
    return (<CircularProgress />)
  }

  if (!data) {
    return (<CircularProgress />)
  }

  if (!purchases) {
    <></>
  }
  const totalPrice = purchases?.reduce((sum: number, element: any) => sum + element.price, 0)
  console.log(totalPrice)

  return (
    <>
      <div style={{'display': 'flex', 'justifyContent': 'center'}}>
        <IconButton onClick={() => setPlusMonth(plusMonth - 1)}>
          <ArrowBackIosIcon />
        </IconButton>
        <h2>{parseDate(date, plusMonth)}</h2>
        <IconButton onClick={() => setPlusMonth(plusMonth + 1)}>
          <ArrowForwardIosIcon />
        </IconButton>
        <h2>{`${totalPrice?.toLocaleString()} yen`}</h2>
      </div>
      <PurchasesTable purchases={purchases} onClick={addButtonClick}/>
      <Modal
        open={isModal}
        onClose={closeModal}
      >
        <AddPurchaseForm setIsModal={setIsModal} purchases={purchases} setPurchases={setPurchases}/>
      </Modal>
    </>
  )
}

export default Purchases