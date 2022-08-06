import React, { useState } from "react"
import TextField from "@material-ui/core/TextField"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardHeader from "@material-ui/core/CardHeader"
import Button from "@material-ui/core/Button"

import { useCreatePurchaseMutation } from "generated/graphql"


type PropsType = {
  setIsModal:  React.Dispatch<React.SetStateAction<boolean>>
  purchases: any
  setPurchases: React.Dispatch<any>
}

const AddPurchaseForm: React.FC<PropsType> = (props) => {
  const [date, setDate] = useState<string>("")
  const [menu, setMenu] = useState<string>("")
  const [coffeeType, setCoffeeType] = useState<string>("")
  const [volume, setVolume] = useState<string>("")
  const [price, setPrice] = useState<string>("")
    
  const [store, setStore] = useState<string>("")
  const [station, setStation] = useState<string>("")

  const [createPurchase] = useCreatePurchaseMutation()
  const submitPurchase = async () => {
    const result = await createPurchase({
      variables: {
        purchase_date: date,
        menu: menu,
        coffee_type: Number(coffeeType),
        volume: volume,
        price: Number(price),
        store: store,
        station: station,
      }
    })
    const purchase = result.data?.createPurchase?.purchase
    props.setPurchases([purchase, ...props.purchases])
  }
  
  return (
    <div style={{'marginTop': '10vh','display': 'flex', 'justifyContent': 'center', 'alignItems': 'center'}}>
        <Card style={{padding: '20px', maxWidth: '500px'}}>
          <CardHeader title="CoffeeBeans" style={{textAlign: "center"}}/>
          <CardContent>
            <TextField
              variant="outlined"
              required
              fullWidth
              label="purchase date"
              value={date}
              margin="dense"
              onChange={event => setDate(event.target.value)}
            />
            <TextField
              variant="outlined"
              required
              fullWidth
              label="Menu"
              value={menu}
              margin="dense"
              onChange={event => setMenu(event.target.value)}
            />
            <TextField
              variant="outlined"
              required
              fullWidth
              label="coffeeType"
              value={coffeeType}
              margin="dense"
              onChange={event => setCoffeeType(event.target.value)}
            />
            <TextField
              variant="outlined"
              required
              fullWidth
              label="Volume"
              value={volume}
              margin="dense"
              onChange={event => setVolume(event.target.value)}
            />
            <TextField
              variant="outlined"
              required
              fullWidth
              label="price"
              value={price}
              margin="dense"
              onChange={event => setPrice(event.target.value)}
            />
            <TextField
              variant="outlined"
              required
              fullWidth
              label="StoreName"
              value={store}
              margin="dense"
              onChange={event => setStore(event.target.value)}
            />
            <TextField
              variant="outlined"
              required
              fullWidth
              label="Station"
              value={station}
              margin="dense"
              onChange={event => setStation(event.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              color="default"
              disabled={!date || !menu}
              style={{padding: '5px', textTransform: 'none'}}
              onClick={() => {
                submitPurchase()
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

export default AddPurchaseForm