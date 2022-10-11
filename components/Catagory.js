import Link from "next/link";

const Catagory = () => {
    return (
        <>
            <div className="d-flex justify-content-between">
                <h3>Explore Catagory</h3>
                <h6>
                    <Link href="/catagory">
                        <a>View All</a>
                    </Link>
                </h6>
            </div>
            <div>
                

            </div>
        </>
    );

}
export default Catagory;