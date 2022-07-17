

function C2(props) {

    return (
        <>
            {console.log("Render İşlemi devam ediyor")}
            <p>Ben C2 İçerisinde bir paragrafım</p>
            {props.children};
            <p>
                {props.sn}
            </p>
        </>
    );
}

export default C2;