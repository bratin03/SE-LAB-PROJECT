const HospitalCard = (props) => {
    return (
        <div className="hospital-card">
            <div className="hospital-title">{props.name}</div>
            <div className="hospital-address">{props.address}</div>
            <div className="hospital-pincode">{props.pincode}</div>
        </div>
    )
}

export default HospitalCard;