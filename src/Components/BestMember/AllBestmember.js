import React , {Component} from "react"
import "./Bestmember.css"

export default class EachBestMember extends Component {
    render () {
        let {memberInfo} = this.props ;

        let members = memberInfo.map ( bestInformation => {
            return (
                <div key={bestInformation.id} className="col-lg-3 col-md-4 col-sm-6 col-12 best-parent">
                
                   <div className="best-image">
                        <img src={bestInformation.imgSrc} title="Pic for Best Member" alt="best member photo" />
                    </div>

                    <div className="best-information">
                        <h3> {bestInformation.Name} </h3>
                        <h6> {bestInformation.Commitee} </h6>
                        <p> {bestInformation.Track} </p>
                        <p>Best of {bestInformation.month} </p>
                    </div>

                </div>
            )
        }

        )

        return (
            <div className="row show-best">
                {members}
            </div>
        )
    }
}