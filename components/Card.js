import Image from "next/image";
const Card = ({ image }) => {
    const imgStyle = {
        borderRadius: "7px",
        
        width: "100%"
    };
    const textStyle = {
        fontFamily: 'Noto Sans Bengali',
        fontSize: "15px",
    };
    return (
        <>
            <div className="card border-0 mx-auto my-2" style={{ width: "326px", height: "315px" }}>
                <Image src={image} style={imgStyle} />
                <div className="card-body d-flex flex-column mt-2">
                    <h5 className="card-title" style={textStyle}>সময়ের সেরা নতুন গজল । Ishq E Nabi Jindabad | ইশকে নবী জিন্দাবাদ</h5>
                    <a href="#" className='mx-auto mt-3' style={{ fontSize: "14px", color: "blue" }}>Tab to watch</a>
                </div>
            </div>
        </>

    );
}
export default Card;