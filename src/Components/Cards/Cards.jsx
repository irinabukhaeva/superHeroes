

export default function Cards(props) {
    console.log(props.item);
    const {name, universe, alterego, occupation, friends, superpowers, url, info} = props.item
  return (
    <div>
        <h1>{name}</h1>
        <p>Вселенная: {universe}</p>
        <p>Альтер эго: {alterego}</p>
        <p>Род деятельности: {occupation}</p>
        <p>Друзья: {friends}</p>
        <p>Суперсилы: {superpowers}</p>
        <img src={url}/>
        <p>{info}</p>
    </div>
  )
}
