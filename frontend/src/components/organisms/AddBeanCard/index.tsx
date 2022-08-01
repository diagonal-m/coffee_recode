import Card from "@material-ui/core/Card"
import IconButton from "@material-ui/core/IconButton";
import AddIcon from '@material-ui/icons/Add';

const cardStyle: React.CSSProperties = {
  'width': '230px',
  'height': '330px',
  'margin': '10px',
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center'
}

type PropsType = {
  onClick: () => void
}

const AddCoffeeBeanCard: React.FC<PropsType> = (props) => {
  return (
    <Card style={cardStyle}>
      <IconButton onClick={props.onClick}>
        <AddIcon fontSize="large" />
      </IconButton>
    </Card>
    
  )
}

export default AddCoffeeBeanCard;