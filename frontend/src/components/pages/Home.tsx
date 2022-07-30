import React from "react"

import { useMyBeansLazyQuery } from "generated/graphql"
import CoffeeBeanCard from "components/organisms/BeanCard"
import Grid from "@material-ui/core/Grid"
import CircularProgress from '@material-ui/core/CircularProgress'

// とりあえず認証済みユーザーの名前やメールアドレスを表示
const Home: React.FC = () => {
  const [beans, setBeans] = React.useState<any>([])
  const [getMyBeans, {loading, data}] = useMyBeansLazyQuery()

  React.useEffect((): any => {
    getMyBeans()
  }, [beans]);

  if (!data || loading) {
    return (<CircularProgress />)
  }

  const myBeans = data.myBeans

  return (
    <Grid container>
      {myBeans?.map((bean: any) => (
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
  )
}

export default Home
