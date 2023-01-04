import React from 'react'
import { useParams } from 'react-router-dom'

import {
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardText
} from 'reactstrap'

const CatShow = ({ cats }) => {

  const { id } = useParams()

  console.log("CatShow id", id)

  const cat = cats?.find(cat => cat.id === +id)

  return (
    <Card className="my-2">
      <CardImg
        alt="Card image cap"
        src={cat.image}
        style={{
          height: 180
        }}
        top
        width="100%"
      />
      <CardBody>
        <CardTitle tag="h5">
          {`${cat.name}, ${cat.age}`} 
        </CardTitle>
        <CardText>
          {cat.enjoys}
        </CardText>
      </CardBody>
    </Card>

  )
}

export default CatShow