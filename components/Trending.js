import Image from 'next/image';
import img1 from '../Images/image14.png';
import img2 from '../Images/image15.png';
import img3 from '../Images/image16.png';

const Trending = () => {
    return (
            <div className='bg-primary'>
                <div className="carousel slide py-2 " data-bs-ride="carousel">
                    <div className="carousel-inner ">
                        <div className="carousel-item active "style={{width:"306.78px",height:"172.56px"}} >
                            <Image src={img1} alt="First slide"  />
                        </div>
                        <div className="carousel-item">
                            <Image className="d-block w-100" src={img2} alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <Image className="d-block w-100" src={img3} alt="Third slide" />
                        </div>
                    </div>
                </div>
            </div>
    );
}
export default Trending;