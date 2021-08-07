
interface sigTypes {
    signature: any;
}

const Signature:React.FC<sigTypes> = ({ signature }) => {
    return (
        <div className='signature-element'>
            <h3>{signature.first} {signature.last} &bull; {signature.day}</h3>
        </div>
    )
}

export default Signature
