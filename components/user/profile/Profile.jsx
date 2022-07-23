import { getUser } from "../../../redux/auth/auth";
import { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import Loader_ from "../loader/Loader";
import styled from 'styled-components';
import Spinner from "../../../loaders/Spinner";
import { sendVerificationLink } from "../../../redux/auth/auth";
import { RiCloseLine} from 'react-icons/ri'



const Profile = ({userInfo}) => {
    const dispatch = useDispatch()
    const state = useSelector(state=>state);
    const [isLoading, setLoading] = useState(true)
    const {user} = state.auth;
  
    useEffect(()=>{
      dispatch(getUser())
  
      setTimeout(()=>{
        user.isLoading ? setLoading(true) : setLoading(false)
      }, 2000)
    }, [])
    

    return (
    
        //check if user exist
    
        isLoading ? 
        (
          // set loading div
          <Loader_ />
        ) :
        (
          //check if empty
          !user.data ?
         
          (
              <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>No Data Currently Available</div>
          ):
          (
            <ProfileComp data={user.data}/>
          )
        )    
    )
}


export default Profile

const ProfileComp =({data})=>{
    console.log(data)

    const accountStatus =()=>{
        if(data.isBlocked){
            return 'Blocked'
        }else{
            if(data.isVerified){
                return 'Verified'
            }else{
                return 'Unverified'
            }
        }
    }
    return (
        <ProfileCointainer_>
                
                <section className="top-section">
                        <span className="profile-name">
                            <h1>{data.username.charAt(0).toUpperCase()}</h1> 
                        </span>
                    
                </section>


               <div className="container">

                    <section className="bio">
                        <legend>BIO</legend>
                        <div>
                            <label>
                                <span>Username: </span> <span className='data'>{data.username}</span>
                            </label>
                            <label>
                                <span>Email: </span> <span className='data'>{data.username}</span>
                            </label>
                        </div>
                    </section>

                    <section className="bio">
                        <legend>ACCOUNT</legend>
                        <div>
                            <label>
                                <span>Account Number: </span> <span className='data'>{data.accountNumber}</span>
                            </label>
                            <label>
                                <span>Account Balance: </span> <span className='data'>{data.amount} {data.currency}</span>
                            </label>
                            <label>
                                <span>Referral: </span> <span className='data'>{data.referralCode}</span>
                            </label>
                        </div>
                    </section>

                    <section className="bio">
                        <legend>ACCOUNT STATUS</legend>
                        <div>
                            <label>
                                <span>Account Number: </span> <span style={{
                                    color: (function(){
                                        if(data.isBlocked){
                                            return '#c30'
                                        }else{
                                            if(data.isVerified){
                                                return 'var(--major-color-purest);'
                                            }else{
                                                return 'var(--bright-color);'
                                            }
                                        }
                                    }())
                                }} className='data'>{accountStatus()}</span>
                            </label>
                        </div>
                    </section>

                    <Query data={data}/>
               </div>

                
        </ProfileCointainer_>
    )
}

function Query({}){
    const dispatch = useDispatch()
    const state = useSelector(state=>state);
    const {sendVerifyLink} = state.auth;
    // console.log(sendVerifyLink)

    return (
        <section className="bio extraInfo">
            <Feedback msg={sendVerifyLink.msg} status={sendVerifyLink.status}/>
            <button
                disabled={sendVerifyLink.isLoading ? true : false}
                onClick={dispatch(sendVerificationLink())}>
                {sendVerifyLink.isLoading ? 'Sending Link...' : 'Verify Your Account'}
            </button>
            {sendVerifyLink.isLoading ? <Spinner /> : ""}

        </section>
    )
}

function Feedback({msg, status}){

    const [feedback, setFeedback] = useState({
        msg: msg,
        status: false
    });

    // handle close feedback msg
    const handleClose =()=>{
        setFeedback({
            msg: '',
            status: false
        })
    }

    return (
        feedback.status ? (
            msg ? 
            (
                status ? 
            (
                <Success>
                    <Close onClick={handleClose}>
                        <RiCloseLine />
                    </Close>
                    {msg}
                </Success>
            ) :
            (
                <Error>
                    <Close onClick={handleClose}>
                        <RiCloseLine />
                    </Close>
                    {msg}
                </Error>
            )
            ): ''
        ):''
    )
}


export const Error = styled.small`
    background: rgb(243 100 69 / 37%);
    color: rgb(219 70 20);
    border: 1px solid rgb(219 70 20);
    padding: 10px;
    text-align: center;
    font-style: italic;
    position: relative;
    width: 100%;
    margin-bottom: 5px;
    border-radius: 8px;
`

export const Success = styled.small`
    background: rgb(99 227 174 / 43%);
    color: rgb(4 72 53);
    border: 1px solid rgb(4 72 53);
    padding: 10px;
    text-align: center;
    font-style: italic;
    position: relative;
    width: 100%;
    margin-bottom: 5px;
    border-radius: 8px;
`
export const Close = styled.small`
    right: 2px;
    top: 2px;
    width: 16px;
    height: 16px;
    display: flex;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    font-size: .8rem;
    opacity: .5;
    position: absolute;
`


const ProfileCointainer_ = styled.div`
    .top-section{
        width: 100%;
        height: 100px;;
        background: var(--major-color-30A);
        position: relative;

        .profile-name{
            width: 100px;
            height: 100px;
            position: absolute;
            border-radius: 50%;
            background: #ccc;
            top: 50px;
            left: 30px;
            color: var(--major-color-purest);
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.8rem;
        }
    }

    .container{
        margin: 60px auto 40px;
        display: grid;
        grid-template-columns: repeat( auto-fit, minmax(350px, 1fr) );
    }
    .bio{
        margin: 8px auto;
        width: 80%;
        max-width: 500px;

        legend{
            font-weight: bold;
            font-size: 1rem;
        }
        label{
            display: block;
            width: 100%;
            padding: 8px;
            border: 1px solid #ddd;
            margin-bottom: 5px;
        }
        .data{
            font-weight: bold;
        }
    }
    
    .extraInfo{
        box-shadow: 2px 2px 5px #aaa;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        button{
            padding: 8px;
            margin-bottom: 10px;
            background: var(--major-color-purest);
            color: #fff;
            cursor: pointer     
        }
    }
`