import { useParams } from "react-router-dom";

const Bean: React.FC = () => {
  const { id } = useParams<{id: string}>();
  return (
    <>
      <h1>{id}</h1> 
    </>
  )
}

export default Bean