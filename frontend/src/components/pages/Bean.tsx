import React from "react"
import { useParams } from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress'

import { useBeanLazyQuery } from "generated/graphql";

import CoffeeBeanCard from "components/organisms/BeanCard"

const Bean: React.FC = () => {
  const [bean, setBean] = React.useState<any>([])
  const { id } = useParams<{id: string}>();
  const [getBean, {loading, data}] = useBeanLazyQuery()

  React.useEffect((): any => {
    getBean({
      variables: {id: id}
    })
    setBean(data?.bean)
  }, [data, getBean])

  if (loading) {
    return (<CircularProgress />)
  }

  if (!data) {
    return (<CircularProgress />)
  }

  if (!bean) {
    return (<CircularProgress />)
  }

  return (
    <>
      <CoffeeBeanCard
        id={bean.id}
        name={bean.name}
        processing={bean.processing || ''}
        country={bean.country || ''}
        varietal={bean.varietal || ''}
        roast_level={bean.roastLevel}
        tasting={bean.tasting || ''}
        evaluation={bean.evaluation || 0}
        store={bean.store.name || ''}
        station={bean.store.station || ''}
      />
    </>
  )
}

export default Bean