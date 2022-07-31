import React from "react"

import Grid from "@material-ui/core/Grid"
import CircularProgress from '@material-ui/core/CircularProgress'
import Modal from "@material-ui/core/Modal"

import { useMyBeansLazyQuery } from "generated/graphql"

import CoffeeBeanCard from "components/organisms/BeanCard"
import AddCoffeeBeanCard from "components/organisms/AddBeanCard"
import AddBeanForm from "components/organisms/AddBeanCardForm"


// とりあえず認証済みユーザーの名前やメールアドレスを表示
const Home: React.FC = () => {
  const [beans, setBeans] = React.useState<any>([])
  const [isModal, setIsModal] = React.useState<boolean>(false)

  const [getMyBeans, {loading, data}] = useMyBeansLazyQuery()

  const addButtonClick = () => {
    setIsModal(true)
  }
  const closeModal = () => {
    setIsModal(false)
  }

  React.useEffect((): any => {
    getMyBeans()
    setBeans(data?.myBeans)
  }, [data]);


  if (loading) {
    return (<CircularProgress />)
  }

  if (!data) {
    return (<CircularProgress />)
  }

  if (!beans) {
    return (<AddCoffeeBeanCard onClick={addButtonClick}/>)
  }

  console.log(beans)

  return (
    <>
      <Grid container >
        <AddCoffeeBeanCard onClick={addButtonClick}/>
        {beans?.map((bean: any) => (
          <Grid item>
          <CoffeeBeanCard
            id={bean.id}
            name={bean.name}
            processing={bean.processing || ''}
            tasting={bean.tasting || ''}
            evaluation={bean.evaluation || 0}
            store={bean.store || ''}
          />
        </Grid>
        ))}
      </Grid>
      <Modal
        open={isModal}
        onClose={closeModal}
      >
        <AddBeanForm setIsModal={setIsModal} beans={beans} setBeans={setBeans}/>
      </Modal>
    </>
  )
}

export default Home