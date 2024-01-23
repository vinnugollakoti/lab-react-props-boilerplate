export default function Img(pro) {
    return(
        <>
        <center>
        {pro.data.map((i)=>{
            return(
                <img src={i.img} key={i.id}/>
            )
        })}</center>
        </>
    )
}