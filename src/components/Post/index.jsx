import { formatDistance } from "date-fns"
import { it } from 'date-fns/locale'
import styles from "./Post.module.scss"

const Post = (props) => {
    const data = props.data || {
        author: "User",
        text: "text",
        date: new Date (),
        photo: "https://images.unsplash.com/photo-1501820488136-72669149e0d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80",
    }

    const createDate = (date) => new Date(date)

    return (
        <article className={styles.post}>
        <h3>{data.author}</h3>
            <p><small>
            {formatDistance(new Date(data.date), new Date(), {addSuffix: true, locale: it})}
            </small></p>
            <p>{data.text}</p>
             { data.photo ? <img src={data.photo} alt="post"/> : <></>}
        </article>
    )
}

export {Post};