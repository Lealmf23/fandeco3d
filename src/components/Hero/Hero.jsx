import LogoFD3 from '../../assets/FD3bordesblancos.webp'
import Btncard from '../Btncard/Btncard'

const Hero = () => {
    return (
        <div className='text-balance mb-4'>
            <img
                src={LogoFD3}
                alt='Logo Fan deco3D'
                className='w-50 m-auto'
            />
            <div className='px-3 pt-5 text-center text-white'>
                <h1 className='font-bold mb-3'>Impresión 3D decorativa y personalizada. Lámparas 3D, tu mascota en 3D y diseños a medida.</h1>
            </div>
            <div className='grid grid-cols-4 gap-2'>
                <Btncard
                    className='pb-3'
                    linkUrl='https://wa.me/5491136306519?text=Hola%20información'
                    btnText='Consultar por WhatsApp'
                    btnsimbolo='bi-whatsapp'
                    classSpan='col-span-4'
                />
                <Btncard
                    className='pb-3'
                    linkUrl='https://fandeco3d.mitiendanube.com'
                    btnText='Tienda Online'
                    btnsimbolo='bi-bag-check-fill'
                    classSpan='col-span-2'
                />

                <Btncard
                    className='pb-3'
                    linkUrl='https://www.instagram.com/fan.deco3d'
                    btnText=''
                    btnsimbolo='bi-instagram'
                    classSpan='col-span-1'
                />

                <Btncard
                    className='pb-3'
                    linkUrl='https://www.tiktok.com/@fan.deco3d'
                    btnText=''
                    btnsimbolo='bi-tiktok'
                    classSpan='col-span-1'
                />
            </div>
        </div>
    )
}

export default Hero
