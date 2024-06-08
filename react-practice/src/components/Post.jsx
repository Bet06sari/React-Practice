const names = ["Betül", "Cabbar"];

function Post() {

    const selectedName = Math.random() > 0.5 ? names[0] : names[1];
    return (<div>
        <p>{selectedName}</p>
        <p>Nextjs harikadir.</p>
    </div>
    );
}

export default Post;