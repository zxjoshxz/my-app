//@ts-ignore
import Signature from './Signature'

const Signatures: React.FC<{ signatures: any}> = ({ signatures,  }) => {
    return (
        <>
           {signatures.map((signature: any) => (
                <Signature key={signature.id} signature={signature}/>
           ))} 
        </>
    )
}

export default Signatures
