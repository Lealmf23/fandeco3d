const Btncard = (props) => {
    const { linkUrl, btnText, btnsimbolo, classSpan } = props;
    return (
        <a
            href={linkUrl}
            className={`text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium text-sm px-4 py-2.5 text-center leading-5 rounded-2xl ${classSpan} `}
            target='_blank'>
            <i class={`bi ${btnsimbolo}`}> </i> {btnText}
        </a>
    )
}
 
export default Btncard;