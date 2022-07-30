import React, { useState } from "react"
import TextField from "@material-ui/core/TextField"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardHeader from "@material-ui/core/CardHeader"
import Button from "@material-ui/core/Button"

import { useCreateCoffeeBeanMutation } from "generated/graphql" 

type PropsType = {
  setIsModal:  React.Dispatch<React.SetStateAction<boolean>>
  beans: any
  setBeans: React.Dispatch<any>
}

// サインアップ用ページ
const AddBeanForm: React.FC<PropsType> = (props) => {
  const [name, setName] = useState<string>("")
  const [processing, setProcessing] = useState<string>("")
  const [roastLevel, setRoastLevel] = useState<string>("")
  const [tasting, setTasting] = useState<string>("")
  const [rating, setRating] = useState<string>("")
  const [storeName, setStoreName] = useState<string>("")

  const [createCoffeeBean] = useCreateCoffeeBeanMutation()
  const submitAdd = async () => {
    const result = await createCoffeeBean({
      variables: {
        name: name,
        processing: processing,
        tasting: tasting,
        evaluation: Number(rating),
        store: storeName
      }
    })
    const coffeeBean = result.data?.createCoffeeBean?.coffeeBean
    console.log(coffeeBean)
    console.log([coffeeBean, ...props.beans])
    props.setBeans([coffeeBean, ...props.beans])
    // console.log(props.beans)
  }

  return (
    <div style={{'marginTop': '25vh','display': 'flex', 'justifyContent': 'center', 'alignItems': 'center'}}>
        <Card style={{padding: '20px', maxWidth: '500px'}}>
          <CardHeader title="CoffeeBeans" style={{textAlign: "center"}}/>
          <CardContent>
            <TextField
              variant="outlined"
              required
              fullWidth
              label="Name"
              value={name}
              margin="dense"
              onChange={event => setName(event.target.value)}
            />
            <TextField
              variant="outlined"
              required
              fullWidth
              label="Processing"
              value={processing}
              margin="dense"
              onChange={event => setProcessing(event.target.value)}
            />
            <TextField
              variant="outlined"
              required
              fullWidth
              label="Roast Level"
              value={roastLevel}
              margin="dense"
              onChange={event => setRoastLevel(event.target.value)}
            />
            <TextField
              variant="outlined"
              required
              fullWidth
              label="Tasting"
              value={tasting}
              margin="dense"
              onChange={event => setTasting(event.target.value)}
            />
            <TextField
              variant="outlined"
              required
              fullWidth
              label="Rating"
              value={rating}
              margin="dense"
              onChange={event => setRating(event.target.value)}
            />
            <TextField
              variant="outlined"
              required
              fullWidth
              label="StoreName"
              value={storeName}
              margin="dense"
              onChange={event => setStoreName(event.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              color="default"
              disabled={!name || !processing}
              style={{padding: '5px', textTransform: 'none'}}
              onClick={() => {
                console.log(name)
                console.log(processing)
                submitAdd()
                props.setIsModal(false)
              }}
            >
              Submit
            </Button>
          </CardContent>
        </Card>
    </div>
  )
}

export default AddBeanForm