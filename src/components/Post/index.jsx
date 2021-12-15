import styles from "./Post.module.scss"

const Post = (props) => {
    const data = props.data || {
        author: "User",
        text: "text",
        date: new Date (),
        photo: "https://images.unsplash.com/photo-1501820488136-72669149e0d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80",
    }

    return (
        <article className={styles.post}>
        <h3>{data.author}</h3>
            <p><small>{data.date.toLocaleDateString()} - {data.date.toLocaleTimeString()}</small></p>
            <p>{data.text}</p>
             { data.photo ? <img src={data.photo} alt="post image"/> : <></>}
        </article>
    )
}

export {Post};