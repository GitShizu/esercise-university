export default ({uniData})=> {
    return(
        <section>
           { uniData.map((obj, i) => {
                const { name, url } = obj
                return <a key={`uniLink${i}`} href={url}>{name}</a>
            })}
        </section>
    )
}