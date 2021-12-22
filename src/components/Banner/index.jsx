const Modal = (props) => {
    if (!props.show){
        return null
    }
    return (
        <div className="modal">
            <p>Post aggiunto</p>
        </div>
    )
}

export {Modal}