import React from 'react'
import ProfileCointainer from './styles'

const data = {
    name: "Moses Inedu",
    username: "mozeyinedu",
    email: "inedumozey@gmail.com",
    accnt: "32987109191",
    balance: "2500",
    referral: "32hudf8923r23832"
}
const Profile = () => {
  return (
    <ProfileCointainer>
        <main className="wrapper">
            <section className="top-section">
                    <span className="profile-name">
                       <div className="liner"> <span className="avatar-initials"> {data.name.charAt(0)} </span> <h3>{data.name}</h3></div> 
                       
                    </span>
                   
            </section>

            <section className="bio">
            <legend>Bio</legend>
                <span className="single-info">
                    <label>Username</label> <p>{data.username}</p>
                </span>

                <span className="single-info">
                    <label>Email</label> <p>{data.email}</p>
                </span>
            </section>

            <section className="bio">
                <legend>Account</legend>
                <span className="single-info">
                    <label>Account Number</label> <p>{data.accnt}</p>
                </span>

                <span className="single-info">
                    <label>Account Balance</label> <p>{data.balance} SEC</p>
                </span>
                <span className="single-info">
                    <label>Referral</label> <p>{data.referral}</p>
                </span>
            </section>
        </main>
    </ProfileCointainer>
  )
}


export default Profile