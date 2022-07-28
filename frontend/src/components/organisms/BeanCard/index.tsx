import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Rating from "@material-ui/lab/Rating"
import styled from "styled-components"


type CoffeeBeanCardType = {
    id: string
    name: string
    processing: string
    tasting: string
    evaluation: number
    store: string
}

const cardStyle: React.CSSProperties = {
  'position': 'relative',
  'textAlign': 'center',
  'width': '210px',
  'height': '310px',
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
  'paddingTop': '15px',
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
  const id = props.id
  const name = props.name
  const processing = props.processing
  const tasting = props.tasting
  const evaluation = props.evaluation
  const store = props.store
  return (
    <>
      <Card id={id} style={cardStyle}>
        <CardContent style={cardTitleStyle}>
          <CardTitle>{name}</CardTitle>
        </CardContent>
        <hr style={{'width': '90%'}}/>
        <CardContent style={cardProcessingStyle}>
          <p style={{'fontSize': '12px', 'margin': '0', 'fontFamily': 'times new roman'}}>{processing}</p>
        </CardContent>
        <CardContent style={cardRoastLevelStyle}>
          <p style={{'fontSize': '12px', 'margin': '0', 'fontFamily': 'times new roman'}}>ROAST LEVELS: LIGHTLY</p>
        </CardContent>
        <CardContent style={cardTastingStyle}>
          <p style={{'fontSize': '12px', 'marginTop': '5px', 'marginBottom': '0', 'fontFamily': 'times new roman'}}>TASITING NOTE</p>
          <p style={{'fontSize': '12px', 'marginTop': '2px', 'marginBottom': '5px', 'fontFamily': 'times new roman'}}>{tasting}</p>
        </CardContent>
        <CardContent style={cardRatingStyle}>
          <Rating value={evaluation} max={10} readOnly={true} style={{'fontSize': '15px'}}/>
        </CardContent>
        <PStyle>Tokyo Japan</PStyle>
        <h6 style={{'fontFamily': 'times new roman', 'marginBottom': '10px', 'marginTop': '10px'}}>{store}</h6>
      </Card>
    </>
  )
}

export default CoffeeBeanCard;