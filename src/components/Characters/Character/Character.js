
const Character = ({ character, addFav }) => {
    const { name, image, id, status, species, origin } = character;
    return (
        <div>
            <h2>{name}</h2>
            <figure>
                <img src={image} />
            </figure> 
            <p>{status}</p>
            <p>{species}</p>
            <p>{origin.name}</p>
            <button type='button' onClick={() => addFav(character)}>Add to favourite</button>
        </div>
    )
}

export default Character;
