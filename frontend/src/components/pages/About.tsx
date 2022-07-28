import React from "react"

import { useMyBeansQuery } from "generated/graphql"
import CoffeeBeanCard from "components/organisms/BeanCard"
import Grid from "@material-ui/core/Grid"

// とりあえず認証済みユーザーの名前やメールアドレスを表示
const About: React.FC = () => {
  const bean = useMyBeansQuery()
  if (!bean.data) {
    return (<></>)
  }
  const myBeans = bean.data.myBeans

  return (
    <Grid container>
      {myBeans?.map((bean) => (
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

export default About