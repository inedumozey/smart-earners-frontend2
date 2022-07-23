import styled from 'styled-components';
import Image from 'next/image'
import Link from 'next/link';
import {useState, useEffect} from 'react'
import {useRouter} from 'next/router';
const logo = '/onboadinglogo.png';
import NavAuthBtn from '../../components/navAuthBtn/NavAuthBtn'
import HomeIcon from '@mui/icons-material/Home';
import SavingsIcon from '@mui/icons-material/Savings';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PaidIcon from '@mui/icons-material/Paid';
import PersonIcon from '@mui/icons-material/Person';
import Notifications from './Notifications';
import MobileBottom from './MobileBottom';


export default function MobileHeader({userInfo, notificationData, movingInfo}) {
    const [stick, setStick] = useState(false)
    const router = useRouter()
    const [showMenu, setShowMenu] = useState(false)
    const [isMobile, setIsMobile] = useState(false);
    const [showNotif, setShowNotif] = useState(false);
    const [showDropDown, setDropDown] = useState(false)

    useEffect(()=>{
        window.onscroll=(e)=>{
            window.pageYOffset >= 100 ? setStick(true) : setStick(false)
        }
    }, []) 

    const profileNavLink = [
        {
            link: 'Home',
            url: '/',
            icon: <HomeIcon style={{fontSize: '1.2rem'}}/>
        },
        {
            link: 'profile',
            url: '/dashboard/deposit',
            icon: <PersonIcon style={{fontSize: '1.2rem'}}/>
        },
    ]


  return (
    <Header stick={stick}>
        <Top>
            {/* logo */}
            <div className="logo">
                <Link href='/' passHref>
                    <a><Image width='100' height='65' src={logo} alt="logo" /></a>
                </Link>
            </div>


            <div className="extralNavLink">

                 {/* profile & dashboard nav link btns */}
                {
                profileNavLink.map((link, i)=>{
                    return (
                    <Link key={i} href={link.url} passHref>
                        <a style={{borderRadius: '50%', padding: '2px'}} className={link.url === router.asPath ? 'active-icon link-icon' : 'link-icon'}>{link.icon}</a>
                    </Link>
                    )
                })
                }

                {/* notifaction btn */}
                <Notifications showNotif={showNotif} setShowNotif={setShowNotif} setDropDown={setDropDown} notificationData={notificationData}/>
            </div>

            {/* signup, signup, logout and dashboard btns*/}
            <div style={{position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '100px', height: '100%'}}>
                <NavAuthBtn setShowMenu={setShowMenu} userInfo={userInfo} />
            </div>
            
        </Top>

        <Bottom stick={stick}>
            <MovingInfo movingInfo={movingInfo}/>
        </Bottom>

        {/* bottom menu */}

        <MobileBottom />
    </Header>
  )
}

function MovingInfo({movingInfo}){
    return(
        <marquee behavior="smooth" direction="" style={{fontSize: '.8rem'}}>
            {
                movingInfo.map((info, i)=>{
                    return(
                    <span key={i} style={{marginRight: '5px', display: 'inline-block', fontSize: '.8rem'}}>
                        {info}
                    </span>
                    )
                })
            }
        </marquee>
    )
}



const Header = styled.div`
    width: 100%;
    height: 90px;
    color: #fff;
    position: ${({stick})=>stick ? 'fixed' : 'static'};
    top: ${({stick})=>stick ? '0' : ''};
    left: ${({stick})=>stick ? '0' : ''};
`

const Top = styled.div`
    width: 100%;
    height: calc(100% - 25px);
    background: var(--major-color-purest);
    padding: 2px;
    display: flex;
    transition: .3s;
    align-items: center;
    justify-content: space-between;
    --webkit-user-select: none;

    .togglemenu-wrapper {
        display: flex;
        transition: .3s;

        &:hover{
            color: #fff;
        };
    }

    .logo{
        display: flex;
        width: 100px;
        height:100%;
        transition: .3s;
        align-items: center;
        justify-content: center;
    };

    .extralNavLink{
        display: flex;
        transition: .3s;
        color: #fff;
    }
`

const Bottom = styled.div`
    width: 100%;
    height 25px;
    padding: 0 20px;
    text-align: center;
    box-shadow: 2px 2px 5px #000;
    background: var(--major-color-faded);
`