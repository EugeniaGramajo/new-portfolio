interface Props {
    text : string
    styles: string
}
export default function Title({text, styles}:Props){
    return(
        <>
        <h1 className={`${styles} `} >{text}</h1>
        </>
    )
}