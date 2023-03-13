import React from 'react';
import {Button, Input} from 'antd';

function Loginpage()
{
    return(
        <div>
            <div>
                <h4>Login</h4>
                <h5>아이디(이메일) :</h5>
                <Input type="email" placeholder="아이디를 입력하세요" />
                <h5>비밀번호 : </h5>
                <Input type="password" placeholder ="비밀번호를 입력하세요" />
                <Button>로그인</Button>
            </div>
        </div>
    )
}

export default Loginpage;