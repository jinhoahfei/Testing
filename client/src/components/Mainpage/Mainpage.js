import React,{useEffect} from 'react';

const {kakao} = window;

const KakaoMap = () => {
    useEffect(() => {
        const container = document.getElementById("map");
        const options = {
            center : new kakao.maps.LatLng(

            ),
            level: 3,
        };

        const map = new kakao.maps.Map(container,options);

    },[]);

    return <div id ="map" style={{width:"500px",height: "500px"}} />;
}

function Mainpage()
{
    return(
        <div>
            <KakaoMap />
        </div>
    )
}

export default Mainpage;