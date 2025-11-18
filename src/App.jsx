import Hero from './components/Hero/Hero'
import Card from './components/Card/Card'
import Tumascota3d from './assets/Tumascotaen3d.webp'
import Nuestraslamparas from './assets/nuestraslamparas.webp'
import Personalizado3d from './assets/tuproyecto.webp'


function App() {
    return (
        <section className=' px-4 py-8 bg-linear-to-b from-sky-950 to-amber-50'>
            <div className=' max-w-[600px] m-auto'>
                <Hero />
                <Card
                    title='Hacemos tu mascota en 3D'
                    description='Inmortalizá a tu compañero fiel con una figura impresa en 3D. Un recuerdo único y lleno de amor'
                    linkUrl='https://wa.me/5491136306519?text=información%20para%20hacer%20a%20mi%20mascota3d'
                    imageUrl={Tumascota3d}
                    btnText='Pedir cotización'
                    btnsimbolo=''
                />
                <Card
                    title='Nuestras lámparas 3D'
                    description='Descubrí nuestra colección de lámparas fabricadas con impresión 3D para darle un toque moderno y personal a tus espacio'
                    linkUrl='https://fandeco3d.mitiendanube.com'
                    imageUrl={Nuestraslamparas}
                    btnText='Ver el catálogo'
                    btnsimbolo=''
                />
                <Card
                    title='¿Querés un diseño personalizado?'
                    description='¿Tenés una idea en mente? Contanos tu proyecto y creamos un diseño 3D a tu medida'
                    linkUrl='https://wa.me/5491136306519?text=tengo%20una%20idea%20para%20hacer%20en%203d'
                    imageUrl={Personalizado3d}
                    btnText='Contanos tu idea'
                    btnsimbolo=''
                />
            </div>
        </section>
    )
}

export default App
