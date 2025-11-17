import Btncard from "../Btncard/Btncard"

const Card = (props) => {
    const { title,description, linkUrl, imageUrl, btnText, btnsimbolo, } = props
    return (
        <div
            className={`group bg-white rounded-3xl shadow-lg text-balance overflow-hidden border-10 border-gray-100 duration-300 mb-4`}>
            <div>
              <img
                src={imageUrl} alt=''
                className=''
            />  
            </div>
                       
            <div className='text-center rounded-b-2xl  p-4'>
                <h2 className="pb-2 text-xl">{title}</h2>
                <p className='pb-5 text-xs'>{description}</p>
                
                    <Btncard className='pb-3'
                        linkUrl={linkUrl}
                        btnText={btnText}
                        btnsimbolo={btnsimbolo}
                    />
           
            </div>
        </div>
    )
}

export default Card
