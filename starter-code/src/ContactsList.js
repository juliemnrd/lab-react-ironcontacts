import React from "react";
import grosContacts from './contacts.json';

class ContactsList extends React.Component{
    constructor(props){
        super(props)
       this.state={
           contacts:grosContacts.slice(0, 5)
       };
    }

    
         randomArtist() {
            const randomArtist= grosContacts[Math.floor(Math.random() * grosContacts.length)]
            const{contacts} = this.state;
            console.log("RANDOM!");
            console.log(randomArtist)
            contacts.push(randomArtist)
            this.setState({contacts});
            return randomArtist;
         }

         sortName(){
             const{contacts} = this.state;
            contacts.sort((nameA, nameB)=>{
             if (nameA.name<nameB.name){
                 return -1
                }
                if (nameA.name>nameB.name){
                    return 1
                }
            })
             this.setState({contacts});
             
         }

        render(){
            const{contacts} = this.state;
            const contactList= contacts.map((oneArtist, index) =>
            <tr key={index}>
            <th>{oneArtist.name}</th>
            <th><img src={oneArtist.pictureUrl} alt="{oneArtist.name}" width="100px"/></th>
            <th>{oneArtist.popularity}</th>
            <th>{}</th>
            </tr>
            )

            return(
                <div>
                <button onClick={() => this.randomArtist()}>
                        RANDOM
                </button>
                   <button onClick={() => this.sortName()}>
                        SORT by name
                </button>
                <button>
                        SORT by popularity
                </button>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Picture</th>
                    <th>Popularity</th>
                </tr>
                </thead>


                <tbody>
                    {contactList}

                </tbody>

            </table>
            </div>
 


            )
        }
}

export default ContactsList;







