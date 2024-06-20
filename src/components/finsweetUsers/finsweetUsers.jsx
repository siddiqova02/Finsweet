import "./finsweetUsers.css"

//Json
import finswwetUsers from "../data/finsweetUsers.json"
export const FinsweetUsers = () => {
    return(
        <div className="finsweetUsers-section">
            <div className="finsweetUsers">
                <p className="number">100.000+</p>
                <p className="finsweetUsers-text">Finsweet Users</p>
            </div>
            {FinsweetUsers && finswwetUsers.map((item)=>{
                return(
                    <div key={item.id}>
                        <img src={item.images} alt="" />
                    </div>
                )
            })}
        </div>
    )
}