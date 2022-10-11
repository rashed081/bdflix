import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faUnlockKeyhole, faDownload, faHighlighter } from "@fortawesome/free-solid-svg-icons";
import Package from "../components/Package";
const Packages = () => {
    const packages = [
        {
            "id": "1",
            "name": "Mini Packages",
            "validity": "15 Days",
            "price": "29 BDT"
        },
        {
            "id": "2",
            "name": "Standard Packages",
            "validity": "30 Days",
            "price": "39 BDT"
        }
    ]
    return (
        <div className="m-4">
            <div className="d-flex align-items-center">
                <Link href="/" className="nav-item active"><a className="nav-link">
                    <FontAwesomeIcon
                        icon={faArrowLeft}
                        style={{ fontSize: 20, color: "black" }}
                    /></a>
                </Link>
                <h5 className="px-4">Packages</h5>
            </div>
            <div className="py-4">
                <h5>Enjoy Unlimited Music & Videos</h5>
                <div className="py-2">
                    <div className="d-flex py-1">
                        <FontAwesomeIcon
                            icon={faUnlockKeyhole}
                            style={{ fontSize: 20, color: "#FFB465" }}
                        />
                        <h6 className="px-2">Unlock premium Natok and dramas</h6>
                    </div>
                    <div className="d-flex py-1">
                        <FontAwesomeIcon
                            icon={faDownload}
                            style={{ fontSize: 20, color: "#039FC3" }}
                        />
                        <h6 className="px-2">Unlimited download</h6>
                    </div>
                    <div className="d-flex py-1">
                        <FontAwesomeIcon
                            icon={faHighlighter}
                            style={{ fontSize: 20, color: "#875DE3" }}
                        />
                        <h6 className="px-2">Watch in HD to 4K resolution</h6>
                    </div>

                </div>
            </div>
            <div>
                <div>
                    <h6>Select Premium Plan</h6>
                    <p>Ad-Free, Unlimited offline Downloads and playlist</p>
                </div>

                <div>
                    {packages.map((pkg) => (
                        <Package
                            key={pkg.id}
                            name={pkg.name}
                            validity={pkg.validity}
                            price={pkg.price}
                        ></Package>
                    ))}
                </div>

            </div>

        </div>

    );
}
export default Packages;