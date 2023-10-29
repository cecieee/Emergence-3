function IvCard(props) {
    const gradientCSS = {
        background: 'linear-gradient(to top, #ff5722, transparent, transparent)',
        opacity: 0.7,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none'
    };
    return (
        <div className="w-[80vw] h-max mt-36 max-[650px]:w-[85vw] max-[650px]:mt-14 relative">
            <img src={props.img}/>
            <div style={gradientCSS}></div>
            <div className="absolute bottom-0 right-0 m-12 text-right  text-white max-[650px]:m-5">
                <h2 className="font-bold text-5xl max-[650px]:text-xl ">{props.title} <br /> {props.title2}</h2>
                <p className="w-[60vw] pt-5 font-semibold text-xl max-[650px]:hidden">
                    {props.desc}
                </p>
            </div>
        </div>

    );
}

export default IvCard;