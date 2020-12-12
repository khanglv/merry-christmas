import moment from 'moment';
import { notification } from 'antd';

let color = window['colors'];

export const notify = (type, data, duration = 4.5) => {
    notification[type]({
        message: 'Thông báo',
        description: data,
        duration: duration
    });
};

export const warningConsole = ()=>{
    console.log("%cStop!!! You are unauthorized acces", "color: red; font-size: 40px; font-weight: bold;");
}

