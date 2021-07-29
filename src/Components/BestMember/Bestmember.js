import React, { Component } from "react";
import EachBestMember from "./AllBestmember.js"
import"./Bestmember.css"

export default class Bestmember extends Component {

    state = {
        nameOfBestMember : [
            {id : 1 ,
             imgSrc : "../best image/img.jpg" ,
             Name : "Esraa Elshibly" ,
             Commitee : " Develobers " ,
             Track : "Web",
            month: 'April'
            } ,

            {id : 2 ,
                imgSrc : "../best image/img.jpg" ,
                Name : "Esraa Elshibly" ,
                Commitee : " Develobers " ,
                Track : "Web",
            month: 'April'
            } ,

            {id : 3 ,
                imgSrc : "../best image/img.jpg" ,
                Name : "Esraa Elshibly" ,
                Commitee : " Develobers " ,
                Track : "Web",
            month: 'April'
            } ,

            {id : 4 ,
                imgSrc : "../best image/img.jpg" ,
                Name : "Esraa Elshibly" ,
                Commitee : " Develobers " ,
                Track : "Web",
            month: 'April'
            } ,

            {id : 5 ,
                imgSrc : "../best image/img.jpg" ,
                Name : "Esraa Elshibly" ,
                Commitee : " Develobers " ,
                Track : "Web",
            month: 'April'
            } ,

            {id : 6 ,
            imgSrc : "../best image/img.jpg" ,
            Name : "Esraa Elshibly" ,
            Commitee : " Develobers " ,
            Track : "Web",
            month: 'April'
            } ,

            {id : 7 ,
                imgSrc : "../best image/img.jpg" ,
                Name : "Esraa Elshibly" ,
                Commitee : " Develobers " ,
                Track : "Web",
            month: 'April'
            } ,

            {id : 8 ,
                imgSrc : "../best image/img.jpg" ,
                Name : "Esraa Elshibly" ,
                Commitee : " Develobers " ,
                Track : "Web",
            month: 'April'
            } ,

            {id : 9 ,
            imgSrc : "../best image/img.jpg" ,
            Name : "Esraa Elshibly" ,
            Commitee : " Develobers " ,
            Track : "Web",
            month: 'April'
            } ,

            {id : 10 ,
            imgSrc : "../best image/img.jpg" ,
            Name : "Esraa Elshibly" ,
            Commitee : " Develobers " ,
            Track : "Web",
            month: 'April'
            } ,

            {id : 11 ,
            imgSrc : "../best image/img.jpg" ,
            Name : "Esraa Elshibly" ,
            Commitee : " Develobers " ,
            Track : "Web",
            month: 'April'
            } ,

            {id : 12 ,
            imgSrc : "../best image/img.jpg" ,
            Name : "Esraa Elshibly" ,
            Commitee : " Develobers " ,
            Track : "Web",
            month: 'April'
            } ,

            {id : 13 ,
            imgSrc : "../best image/img.jpg" ,
            Name : "Esraa Elshibly" ,
            Commitee : " Develobers " ,
            Track : "Web",
            month: 'April'
            } ,

            {id : 14 ,
            imgSrc : "../best image/img.jpg" ,
            Name : "Esraa Elshibly" ,
            Commitee : " Develobers " ,
            Track : "Web",
            month: 'April'
            } ,

            {id : 15 ,
            imgSrc : "../best image/img.jpg" ,
            Name : "Esraa Elshibly" ,
            Commitee : " Develobers " ,
            Track : "Web",
            month: 'April'
            } ,

            {id : 16 ,
            imgSrc : "../best image/img.jpg" ,
            Name : "Esraa Elshibly" ,
            Commitee : " Develobers " ,
            Track : "Web",
            month: 'April'
            } ,

            {id : 17 ,
            imgSrc : "../best image/img.jpg" ,
            Name : "Esraa Elshibly" ,
            Commitee : " Develobers " ,
            Track : "Web",
            month: 'April'
            } ,

            {id : 18 ,
            imgSrc : "../best image/img.jpg" ,
            Name : "Esraa Elshibly" ,
            Commitee : " Develobers " ,
            Track : "Web",
            month: 'April'
            } ,

            {id : 19 ,
            imgSrc : "../best image/img.jpg" ,
            Name : "Esraa Elshibly" ,
            Commitee : " Develobers " ,
            Track : "Web",
            month: 'April'
            } ,

            {id : 20 ,
            imgSrc : "../best image/img.jpg" ,
            Name : "Esraa Elshibly" ,
            Commitee : " Develobers " ,
            Track : "Web",
            month: 'April'
            } ,
        ]
    }

    render () {
        return(
            <div className="best-header container">
                 <h2>
                     Congratulation Our Best
                 </h2>
                 <EachBestMember memberInfo = {this.state.nameOfBestMember} />
            </div>
        )
    }
}