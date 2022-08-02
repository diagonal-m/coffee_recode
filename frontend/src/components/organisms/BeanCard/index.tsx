import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Rating from "@material-ui/lab/Rating"
import styled from "styled-components"


type CoffeeBeanCardType = {
    id: string
    name: string
    processing: string
    country: string
    varietal: string
    roast_level: number
    tasting: string
    evaluation: number
    store: string
    station: string
}

const cardStyle: React.CSSProperties = {
  'position': 'relative',
  'textAlign': 'center',
  'width': '230px',
  'height': '330px',
  'margin': '10px'
}

const cardTitleStyle: React.CSSProperties = {
  'height': '50px',
  'paddingTop': '0',
  'paddingBottom': '0'
}

const cardProcessingStyle: React.CSSProperties = {
  'paddingTop': '3px',
  'paddingBottom': '0',
  'textAlign': 'left'
}

const cardRoastLevelStyle: React.CSSProperties = {
  'paddingTop': '10px',
  'paddingBottom': '0',
  'textAlign': 'left'
}

const cardTastingStyle: React.CSSProperties = {
  'paddingTop': '5px',
  'paddingBottom': '0',
  'textAlign': 'left',
  'height': '70px'
}

const cardRatingStyle: React.CSSProperties = {
  'paddingTop': '10px',
  'paddingBottom': '0',
  'textAlign': 'left',
  'height': '30px'
}

const CardTitle = styled.h4`
  font-family: times new roman;
`

const PStyle = styled.p`
  font-size: 15px;
  display: flex;
  align-items: center;
  padding-right: 10px;
  padding-left: 10px;
  margin-top: 3px;
  margin-bottom: 0;
  font-family: Times New Roman;
  &:before, &:after {
    border-top: 1px solid;
    content: "";
    flex-grow: 1;
  }
  &:before {
    margin-right: 5px;
  }
  &:after {
    margin-left: 5px;
  }
`

const CoffeeBeanCard: React.FC<CoffeeBeanCardType> = (props) => {
  const roastLevels: {[key: number]: string} = { 0: 'LIGHTLY', 1: 'MEDIUM', 2: 'DARK', 99: '' }
  console.log(props.roast_level)

  const id = props.id
  const name = props.name
  const processing = props.processing.toUpperCase()
  const country = props.country.toUpperCase()
  const varietal = props.varietal.toUpperCase()
  const roast_level = roastLevels[props.roast_level]
  const tasting = props.tasting
  const evaluation = props.evaluation
  const store = props.store
  const station = props.station

  return (
    <>
      <Card id={id} style={cardStyle}>
        <CardContent style={cardTitleStyle}>
          <CardTitle>{name}</CardTitle>
        </CardContent>
        <hr style={{'width': '90%', 'marginTop': '0'}}/>
        <CardContent style={cardProcessingStyle}>
          <p style={{'fontSize': '13px', 'margin': '0', 'fontFamily': 'times new roman'}}>{processing}</p>
        </CardContent>
        <CardContent style={cardRoastLevelStyle}>
          <p style={{'fontSize': '13px', 'margin': '0', 'fontFamily': 'times new roman'}}>COUNTRY: {country}</p>
          <p style={{'fontSize': '13px', 'margin': '0', 'fontFamily': 'times new roman'}}>VARIETAL: {varietal}</p>
          <p style={{'fontSize': '13px', 'margin': '0', 'fontFamily': 'times new roman'}}>ROAST LEVELS: {roast_level}</p>
        </CardContent>
        <CardContent style={cardTastingStyle}>
          <p style={{'fontSize': '13px', 'marginTop': '5px', 'marginBottom': '0', 'fontFamily': 'times new roman'}}>TASITING NOTE</p>
          <p style={{'fontSize': '13px', 'marginTop': '2px', 'marginBottom': '5px', 'fontFamily': 'times new roman'}}>{tasting}</p>
        </CardContent>
        <CardContent style={cardRatingStyle}>
          <Rating value={evaluation} max={10} readOnly={true} style={{'fontSize': '17px'}}/>
        </CardContent>
        <PStyle>{station} Station</PStyle>
        <p style={{'fontSize': '12px', 'fontFamily': 'times new roman', 'marginBottom': '10px', 'marginTop': '10px'}}>{store}</p>
      </Card>
    </>
  )
}

export default CoffeeBeanCard;