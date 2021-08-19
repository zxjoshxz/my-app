import { useState, useEffect } from "react"
import SignatureBoard from "./Components/Signature-board"
import Footer from "./Components/Footer"
import Navigation from "./Components/Navigation"
import Slides from "./Components/Review-Slides"
import { Button } from "react-bootstrap"
import Signatures from "./Components/Signatures"
import Shitpost from "./Components/Shitpost"
import Construction from "./Components/Construction"
import Sus from "./Components/sussy.gif"
// @ts-ignore
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



type XContainerProps = {
  x: number;
};

const XContainer: React.FC<XContainerProps> = (props) => {
  return <h1 className='text-primary'>X: {props.x}</h1>
};


export const App: React.FC = () => {
  const [signatures, setSignatures] = useState([])

  useEffect(() => {
    const getSignatures = async () => {
      const signaturesFromServer = await fetchSignatures()
      setSignatures(signaturesFromServer)
    }

    getSignatures()
  }, [])

  const fetchSignatures = async () => {
    const res = await fetch('http://localhost:5000/signatures')
    const data = await res.json()

    return data
  }

  const [x, setX] = useState(2);
  
  // reset x at 400
  if (x >= 400) {
    setX(x - x);
    console.log(x);
  }
  // Add Signature
  const addSignature = async (signature: any) => {
    const res = await fetch('http://localhost:5000/signatures', {
      method: 'POST',
      headers: {
       'content-type': 'application/json'
      },
      body: JSON.stringify(signature)
    })

     const data: string[] = await res.json()
      
     setSignatures([...signatures, data])
   }
  
  return (
    <Router>
      <header><Navigation /></header>
      <div className='jumbotron'>
        <Switch> 
          <Route exact path="/">
            <img src={Sus} alt="You are so sussy"></img>
          </Route>
          <Route exact path="/signature-board">
            <SignatureBoard onAdd={addSignature} />
            {signatures.length > 0 ? <Signatures signatures={signatures}/> : 'No Signatures To Show'}
          </Route>
          <Route exact path="/x-button">
            <XContainer x={x} />
            <Button type="button" className="btn btn-primary btn-lg" onClick={() => {
              setX(x + 23);
            }}>
              The X Button
            </Button>
          </Route>
          <Route exact path="/about">
            <h3 className='text-muted'>Created by Joshua Whynot</h3>
          </Route>
          <Route exact path="/slides">
            <Slides />
          </Route>
          <Route exact path="/jax">
            <Shitpost />
          </Route>
          <Route exact path="/construction">
            <Construction />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  )
};
