

function C2(props) {

    return (
        <>
            <p>Ben C2 İçerisinde bir paragrafım</p>
            <div>
                {props.children};
            </div>
        </>
    );
}

export default C2;