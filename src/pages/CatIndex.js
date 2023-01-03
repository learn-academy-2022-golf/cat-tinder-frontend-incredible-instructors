import React from 'react'
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap'
import { NavLink } from "react-router-dom"


const CatIndex = ({ cats }) => {
  console.log("Cat Index props", cats)
  return (
    <main>
      { cats?.map((cat, index)=>{
        return(
          <>
            <Card
              color="light"
              style={{
                width: '18rem'
              }}
            >
              <img
                alt="Sample"
                src={cat.image}
              />
              <CardBody>
                <CardTitle tag="h5">
                  {cat.name}
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  {cat.age}
                </CardSubtitle>
                <NavLink to={`/catshow/${cat.id}`} >
                  <Button>
                    Learn More
                  </Button>
                </NavLink>
                
              </CardBody>
            </Card>
          </>
        )
      })}
    </main>
  )
}

export default CatIndex