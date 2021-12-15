import styles from "./Home.module.scss"

import { useState } from "react";
import { FriendPreview} from "../../components/FriendPreview"
import { MessagePreview} from "../../components/MessagePreview"
import {Post} from '../../components/Post';

const friends = [
    { name: "Chandler", photo:"https://randomuser.me/api/portraits/lego/5.jpg"},
    { name: "Mike", photo:"https://randomuser.me/api/portraits/lego/7.jpg"},
    { name: "Geralt", photo:"https://randomuser.me/api/portraits/lego/8.jpg"},
];
const messages = [
    { text:" lorem  ipsum", date: new Date(), sender:"Pippo" },
    { text:" bauu", date: new Date(), sender:"Pluto" },
    { text:" yoo", date: new Date(), sender:"Me" },
    { text:" goof", date: new Date(), sender:"Pape" },
];

const posts = [
    {author: "User", text: "ammu", date: new Date()},
    {author: "User", text: "learning react", date: new Date(), photo:"https://images.unsplash.com/photo-1501820488136-72669149e0d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80"},
];

const Home = () => {
    const [friendsPreview/*, setFriendsPreview*/] = useState(friends);
    const [allPosts/* , setAllPosts*/] = useState(posts);
    const [messagesPreview/* , setMessagesPreview */] = useState(messages);
    
    return (
        <section className={styles.home}>
            <h3>Benvenuto utente!</h3>
            <div className={styles.grid}>
                <aside>
                {friendsPreview.map((friend,index) => ( 
                <FriendPreview key={index} data={friend}/>))}
                </aside>
                <main>
                {allPosts.map((post, index) => (
                <Post key={index} data={post} />
                ))}
                </main>
                <aside>
                {messagesPreview.map((message,index) => ( 
                <MessagePreview key={index} data={message}/>))}
                </aside>
            </div>
        </section>
    )
}

export default Home;