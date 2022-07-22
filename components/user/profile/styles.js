import styled from 'styled-components'


const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
  };

const ProfileCointainer = styled.div`
    width: 100%;
    height: fit-content ;


    & main.wrapper{
        width: 100% ;
        height: fit-content;
       

        .top-section{
            height: 100px;
            background: #B6BFC3;
            display: flex;
            justify-content: center;
            .profile-name {
                width: 85%;
                height: auto;
                display: flex;
                align-items: flex-end;
                padding-bottom: 0px;
                margin: 0 auto;
                .liner{
                 display: flex;
                 justify-content: center;
                 align-items: flex-start ;
                  h3{
                     font-size: 1.5rem;
                 }
             }
             .avatar-initials{
                    width: 50px;
                    height: 50px;
                    font-size: 1.7rem;
                    margin: 0 30px 0 0;
                    background-color: whitesmoke ;
                    border: 2px solid transparent;
                    border-radius: 100%;
                    display: grid;
                    place-items: center;
                    font-weight: 600 ;
                }
            }
        }

        & .bio{
            width: 70%;
            margin: 50px auto;
            display: flex;
            flex-flow: column wrap;
            justify-content: flex-start;

            .single-info{
                display: flex;
                justify-content: flex-start;
                align-items: center ;
                border: 1px solid gray;
                border-radius: 7px;
                margin-bottom: 10px;
                padding: 10px ;
                label{
                    margin: 0 8px 0 0;
                    font-size: .9rem;
                }
                p{
                    font-size: 1rem;
                    font-weight: 600;
                }
            }
        }
    }
  @media ${device.tablet}{

    & main.wrapper{
        width: 100% ;
        height: 100vh;
       

        .top-section{
            height: 150px;
            background: #B6BFC3;
            display: flex;
            
            justify-content: center ;
            .profile-name {
                width: 80%;
                height: auto;
                display: flex;
                align-items: flex-end ;
                padding-bottom: 20px;
                margin: 200px auto;
                .liner{
                 
                    display: flex;
                    justify-content: center;
                    align-items: flex-start ;
                     h3{
                        font-size: 2rem;
                    }
                }

                
                .avatar-initials{
                    width: 100px;
                    height: 100px;
                    font-size: 4rem;
                    margin: 0 100px 0 0;
                    background-color: whitesmoke ;
                    border: 2px solid transparent;
                    border-radius: 100%;
                    display: grid;
                    place-items: center;
                }
            }
        }

        & .bio{
            width: 50%;
            margin: 80px auto;
            display: flex;
            flex-flow: column wrap;
            justify-content: flex-start;

            .single-info{
                display: flex;
                justify-content: flex-start;
                align-items: center ;
                border: 1px solid gray;
                border-radius: 7px;
                margin-bottom: 10px;
                padding: 10px ;
                label{
                    margin: 0 15px 0 0;
                }
                p{
                    font-size: 1.5rem;
                    font-weight: 600;
                }
            }

            
        }
    }
}
`
export default ProfileCointainer