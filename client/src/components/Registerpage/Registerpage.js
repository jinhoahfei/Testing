import React from 'react';
import {Button, Input} from 'antd';

function Registerpage(){
    return(
        <div>
            <div>
                <h4>회원가입</h4>
                <h5>이름 : </h5>
                <Input type="text" placeholder="이름을 입력하세요" />
                <h5>이메일 : </h5>
                <Input type="email" placeholder="이메일을 입력하세요" />
                <h5>비밀번호 :</h5>
                <Input type="password" placeholder="비밀번호를 입력하세요" />
                <Button>Sign up!</Button>
            </div>
        </div>
    )
}

export default Registerpage;