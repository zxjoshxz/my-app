import React from 'react'
import { useState } from 'react'
type SignatureBoardProps = {
    onAdd: any;
  }

const SignatureBoard: React.FC<SignatureBoardProps> = ({ onAdd }) => {
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [day, setDay] = useState('')

    const onSubmit = (e: any) => {
        e.preventDefault()

        onAdd({ first, last, day })

        setFirst('')
        setLast('')
        setDay('')
    }

    return (
        <div>
            <form className='signature' onSubmit={onSubmit}>
                <fieldset>
                    <legend>Leave a Signature</legend>
                    <div className="form-group" >
                        <label className="form-label mt-4">First Name</label>
                        <input 
                            type="name" 
                            value={first} 
                            onChange={(e) => setFirst(e.target.value)} 
                            className="form-control" 
                            id="firstName" 
                            placeholder="First Name"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label mt-4">Last Name</label>
                        <input 
                            type="name" 
                            value={last} 
                            onChange={(e) => setLast(e.target.value)}
                            className="form-control" 
                            id="lastName" 
                            placeholder="Last Name"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label mt-4">Add Date</label>
                        <input 
                            type="name" 
                            value={day} 
                            onChange={(e) => setDay(e.target.value)}
                            className="form-control" 
                            id="lastName" 
                            placeholder="Date"
                        />
                    </div>
                    <input type="submit" className="btn btn-primary btn-lg" />
                </fieldset>
            </form>
        </div>
    )
}

export default SignatureBoard
